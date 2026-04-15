import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Type, Save, Calendar, ChevronDown, Mic, Square, Play, Trash2, Upload } from "lucide-react";
import Button from "@/components/Button";
import { cn } from "@/lib/utils";
import api from "@/api/axios";

export const MemoryInputPanel = ({ onSaved }) => {
  const [mode, setMode] = useState("type");
  const [content, setContent] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState(null); // 'ok' | 'err'

  // Date/time/confidence
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [confidence, setConfidence] = useState("APPROXIMATE");

  // Voice-to-text
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  // Audio recording — key fix: use STATE for audioBlob so React can react to it
  const [isRecording, setIsRecording] = useState(false);
  const [recordingSeconds, setRecordingSeconds] = useState(0);
  const [audioBlob, setAudioBlob] = useState(null);   // ← STATE not ref
  const [audioUrl, setAudioUrl] = useState(null);     // for <audio> playback
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const timerRef = useRef(null);
  const textareaRef = useRef(null);

  // ── Speech Recognition (Voice-to-Text) ─────────────────────────────────
  const startListening = () => {
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRec) {
      alert("Speech recognition is not supported in your browser. Try Chrome.");
      return;
    }
    const recognition = new SpeechRec();
    recognitionRef.current = recognition;
    recognition.lang = "en-US";
    recognition.interimResults = true;
    recognition.continuous = true;
    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((r) => r[0].transcript)
        .join("");
      setContent(transcript);
    };
    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);
    recognition.start();
    setIsListening(true);
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
    setIsListening(false);
  };

  // ── Audio Recording ─────────────────────────────────────────────────────
  const startRecording = async () => {
    // Clear any previous recording
    if (audioUrl) URL.revokeObjectURL(audioUrl);
    setAudioBlob(null);
    setAudioUrl(null);
    audioChunksRef.current = [];

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      mediaRecorderRef.current = recorder;

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunksRef.current.push(e.data);
      };

      recorder.onstop = () => {
        // Stop all tracks so the mic indicator disappears
        stream.getTracks().forEach((t) => t.stop());
        const blob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        const url = URL.createObjectURL(blob);
        setAudioBlob(blob);   // ← triggers re-render, Save button becomes enabled
        setAudioUrl(url);
      };

      recorder.start(100); // collect data every 100ms
      setIsRecording(true);
      setRecordingSeconds(0);
      timerRef.current = setInterval(() => setRecordingSeconds((s) => s + 1), 1000);
    } catch {
      alert("Microphone access was denied. Please allow access and try again.");
    }
  };

  const stopRecording = () => {
    clearInterval(timerRef.current);
    mediaRecorderRef.current?.stop();
    setIsRecording(false);
  };

  const discardRecording = () => {
    if (audioUrl) URL.revokeObjectURL(audioUrl);
    setAudioBlob(null);
    setAudioUrl(null);
    audioChunksRef.current = [];
    setRecordingSeconds(0);
  };

  useEffect(() => () => {
    clearInterval(timerRef.current);
    recognitionRef.current?.stop();
    if (audioUrl) URL.revokeObjectURL(audioUrl);
  }, []);

  const formatTime = (secs) =>
    `${String(Math.floor(secs / 60)).padStart(2, "0")}:${String(secs % 60).padStart(2, "0")}`;

  // ── Save ────────────────────────────────────────────────────────────────
  const handleSave = async () => {
    let memoryContent = content.trim();

    if (mode === "audio") {
      if (!audioBlob) return;
      // Encode audio as base64 data URL and send it to the API
      const base64 = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(audioBlob);
      });
      memoryContent = `[Audio Recording — ${formatTime(recordingSeconds)}]\n\nThis memory was captured as a voice recording. Duration: ${formatTime(recordingSeconds)}.`;

      if (!memoryContent) return;
      setIsSaving(true);
      setSaveStatus(null);

      try {
        await api.post("/memories", {
          content: memoryContent,
          eventDate: date || undefined,
          eventTime: time || undefined,
          dateConfidence: confidence,
          audioData: base64,          // ← stored in DB
        });
        setSaveStatus("ok");
        setContent(""); setDate(""); setTime(""); setConfidence("APPROXIMATE");
        setShowDetails(false);
        discardRecording();
        onSaved?.();
        setTimeout(() => setSaveStatus(null), 3000);
      } catch {
        setSaveStatus("err");
        setTimeout(() => setSaveStatus(null), 4000);
      } finally { setIsSaving(false); }
      return;            // early return — skip the rest of handleSave
    }

    if (!memoryContent) return;
    setIsSaving(true);
    setSaveStatus(null);

    try {
      await api.post("/memories", {
        content: memoryContent,
        eventDate: date || undefined,
        eventTime: time || undefined,
        dateConfidence: confidence,
      });
      setSaveStatus("ok");
      setContent("");
      setDate("");
      setTime("");
      setConfidence("APPROXIMATE");
      setShowDetails(false);
      discardRecording();
      onSaved?.();
      setTimeout(() => setSaveStatus(null), 3000);
    } catch {
      setSaveStatus("err");
      setTimeout(() => setSaveStatus(null), 4000);
    } finally {
      setIsSaving(false);
    }
  };

  // ── Save button disabled state ──────────────────────────────────────────
  const isSaveDisabled =
    isSaving ||
    (mode === "audio" ? (!audioBlob || isRecording) : !content.trim());

  // ── Render ─────────────────────────────────────────────────────────────
  return (
    <div className="bg-blush/20 backdrop-blur-md rounded-[2.5rem] p-5 md:p-8 border border-silver-sage shadow-sm">
      <div className="flex items-center gap-2 mb-8 text-forest/70">
        <div className="p-2 bg-warm-white rounded-xl">
          <Type size={20} />
        </div>
        <h2 className="text-2xl font-serif">Record a Memory</h2>
      </div>

      {/* Mode Selector */}
      <div className="flex bg-warm-white/50 p-1 rounded-full mb-8 max-w-xs mx-auto border border-silver-sage/30">
        {["type", "stt", "audio"].map((m) =>
          <button
            key={m}
            onClick={() => {
              setMode(m);
              if (isListening) stopListening();
              if (isRecording) stopRecording();
            }}
            className={cn(
              "flex-1 py-1.5 rounded-full text-xs font-sans transition-all timeline-breath capitalize",
              mode === m ? "bg-terracotta text-warm-white shadow-sm" : "text-sage hover:text-forest"
            )}>
            {m === "stt" ? "Voice-to-Text" : m === "audio" ? "Audio" : "Type"}
          </button>
        )}
      </div>

      {/* ── Type / STT Mode ── */}
      {(mode === "type" || mode === "stt") && (
        <div className="relative mb-6">
          <textarea
            ref={textareaRef}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder={
              mode === "stt"
                ? "Press 'Start Listening' below — your words will appear here."
                : "A memory surfaced... write it here."
            }
            className="w-full min-h-[200px] bg-warm-white/40 border-none rounded-3xl p-6 font-serif text-lg leading-relaxed text-forest placeholder:italic placeholder:text-sage/40 focus:ring-2 focus:ring-terracotta/20 transition-all resize-none timeline-breath" />

          {mode === "stt" && (
            <div className="flex justify-center mt-4">
              <button
                onClick={isListening ? stopListening : startListening}
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-sans transition-all border",
                  isListening
                    ? "bg-terracotta text-warm-white border-terracotta animate-pulse"
                    : "bg-warm-white text-forest border-silver-sage hover:border-terracotta"
                )}>
                <Mic size={16} />
                {isListening ? "Stop Listening" : "Start Listening"}
              </button>
            </div>
          )}
        </div>
      )}

      {/* ── Audio Recording Mode ── */}
      {mode === "audio" && (
        <div className="mb-6">
          <AnimatePresence mode="wait">
            {/* Step 1: No recording yet → show big record button */}
            {!audioBlob && !isRecording && (
              <motion.div
                key="idle"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="flex flex-col items-center gap-6 py-8">
                <p className="text-sm text-sage font-sans italic text-center max-w-xs">
                  Press record, speak your memory, then stop. You can listen back before saving.
                </p>
                <button
                  onClick={startRecording}
                  className="w-20 h-20 rounded-full bg-warm-white border-2 border-silver-sage flex items-center justify-center text-sage hover:border-terracotta hover:text-terracotta transition-all shadow-sm">
                  <Mic size={32} />
                </button>
                <span className="text-xs font-mono text-sage/60 uppercase tracking-widest">Tap to begin</span>
              </motion.div>
            )}

            {/* Step 2: Currently recording */}
            {isRecording && (
              <motion.div
                key="recording"
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                className="flex flex-col items-center gap-6 py-8">
                <div className="relative">
                  {/* Pulsing ring */}
                  <div className="absolute inset-0 rounded-full bg-terracotta/20 animate-ping" />
                  <div className="w-20 h-20 rounded-full bg-terracotta/10 border-2 border-terracotta flex items-center justify-center text-terracotta relative">
                    <Mic size={28} />
                  </div>
                </div>
                <p className="text-3xl font-mono text-terracotta">{formatTime(recordingSeconds)}</p>
                <p className="text-xs text-sage font-sans uppercase tracking-widest animate-pulse">Recording…</p>
                <button
                  onClick={stopRecording}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-terracotta text-warm-white text-sm font-sans border border-terracotta hover:bg-terracotta/90 transition-all shadow-sm">
                  <Square size={14} />
                  Stop Recording
                </button>
              </motion.div>
            )}

            {/* Step 3: Recording done → show audio player + confirm/discard */}
            {audioBlob && !isRecording && (
              <motion.div
                key="review"
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="space-y-5 py-4">
                <div className="bg-warm-white/60 rounded-3xl p-5 border border-silver-sage/30 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-forest">
                      <Play size={16} className="text-terracotta" />
                      <span className="text-sm font-sans font-medium">Your Recording</span>
                    </div>
                    <span className="text-xs font-mono text-sage/60">{formatTime(recordingSeconds)}</span>
                  </div>

                  {/* Native audio player */}
                  <audio
                    src={audioUrl}
                    controls
                    className="w-full h-10 accent-[#CB997E]"
                    style={{ borderRadius: "12px" }} />

                  <p className="text-[10px] text-sage font-sans italic text-center">
                    Listen before you save — this memory will be permanently sealed once uploaded.
                  </p>
                </div>

                {/* Context fields for audio too */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-sage font-mono ml-2">Approx. Date</span>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-warm-white/50 border border-silver-sage/30 rounded-2xl px-4 py-2.5 font-mono text-xs text-forest focus:ring-0 focus:border-terracotta transition-all" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-sage font-mono ml-2">Approx. Time</span>
                    <input
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-warm-white/50 border border-silver-sage/30 rounded-2xl px-4 py-2.5 font-mono text-xs text-forest focus:ring-0 focus:border-terracotta transition-all" />
                  </div>
                </div>

                {/* Discard button */}
                <button
                  onClick={discardRecording}
                  className="flex items-center gap-1.5 text-xs text-sage hover:text-terracotta transition-colors font-sans mx-auto">
                  <Trash2 size={12} />
                  Discard and re-record
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Optional context for type/stt modes */}
      {mode !== "audio" && (
        <div className="space-y-4 mb-6">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center gap-2 text-sm text-sage hover:text-forest transition-colors font-sans ml-2">
            <Calendar size={14} />
            <span>Add context (Optional)</span>
            <ChevronDown size={14} className={cn("transition-transform", showDetails && "rotate-180")} />
          </button>

          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-sage font-mono ml-2">Approximate Date</span>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-warm-white/50 border border-silver-sage/30 rounded-2xl px-4 py-3 font-mono text-xs text-forest focus:ring-0 focus:border-terracotta transition-all" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-sage font-mono ml-2">Approximate Time</span>
                    <input type="time" value={time} onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-warm-white/50 border border-silver-sage/30 rounded-2xl px-4 py-3 font-mono text-xs text-forest focus:ring-0 focus:border-terracotta transition-all" />
                  </div>
                  <div className="md:col-span-2 space-y-2 mt-2">
                    <span className="text-[10px] uppercase tracking-widest text-sage font-mono ml-2">How sure are you about the timing?</span>
                    <div className="flex gap-2">
                      {["CERTAIN", "APPROXIMATE", "NOT_SURE"].map((c) =>
                        <button key={c} onClick={() => setConfidence(c)}
                          className={cn(
                            "px-4 py-2 rounded-full text-[10px] font-sans border transition-all",
                            confidence === c ? "bg-sage text-warm-white border-sage" : "bg-transparent text-sage border-silver-sage hover:border-sage"
                          )}>
                          {c.replace("_", " ")}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Save Button */}
      <div className="mt-4">
        <Button
          onClick={handleSave}
          className="w-full group relative overflow-hidden h-14"
          disabled={isSaveDisabled}>
          <span className="relative z-10 flex items-center gap-2 text-lg">
            {isSaving ? "Sealing memory…" :
              mode === "audio" && audioBlob ? (
                <><Upload size={20} /> Upload & Seal Recording</>
              ) : (
                <><Save size={20} className="transition-transform group-hover:translate-y-[-2px]" /> Save this memory</>
              )
            }
          </span>
          <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
        </Button>

        <AnimatePresence>
          {saveStatus === "ok" && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="text-center text-xs text-green-600 font-sans mt-3">
              ✓ Memory sealed and secured.
            </motion.p>
          )}
          {saveStatus === "err" && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="text-center text-xs text-terracotta font-sans mt-3">
              Something went wrong — please try again.
            </motion.p>
          )}
        </AnimatePresence>

        <p className="text-center text-[10px] text-sage font-sans mt-4 uppercase tracking-widest">
          Once saved, your memory is sealed and immutable
        </p>
      </div>
    </div>
  );
};