import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Type, Save, Calendar, ChevronDown, Mic, Square, Play, Trash2, Upload, X } from "lucide-react";
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

  // Tags & Emotions
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [selectedEmotion, setSelectedEmotion] = useState(null);

  // Voice-to-text
  const [isListening, setIsListening] = useState(false);
  const [sttLang, setSttLang] = useState("en-US");
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
    recognition.lang = sttLang;
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

  // ── Unified Save ───────────────────────────────────────────────────────
  const handleSave = async () => {
    let memoryContent = content.trim();
    let base64 = null;

    if (mode === "audio") {
      if (!audioBlob) return;
      base64 = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(audioBlob);
      });
      memoryContent = `[Audio Recording — ${formatTime(recordingSeconds)}]\n\nThis memory was captured as a voice recording. Duration: ${formatTime(recordingSeconds)}.`;
    }

    if (!memoryContent) return;
    setIsSaving(true);
    setSaveStatus(null);

    const payload = {
      content: memoryContent,
      eventDate: date || undefined,
      eventTime: time || undefined,
      dateConfidence: confidence,
      tags: selectedEmotion ? [...tags, selectedEmotion] : tags,
    };
    if (mode === "audio") payload.audioData = base64;

    try {
      await api.post("/memories", payload);
      setSaveStatus("ok");
      setContent(""); setDate(""); setTime(""); setConfidence("APPROXIMATE");
      setTags([]); setSelectedEmotion(null); setTagInput("");
      setShowDetails(false);
      discardRecording();
      onSaved?.();
      window.dispatchEvent(new Event("memorySaved"));
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

  // ── Tag & Emotion UI (shared across all modes) ─────────────────────────
  const renderTagsAndEmotions = () => (
    <div className="mt-6 space-y-5">
      <div className="flex flex-wrap gap-2 items-center">
        {tags.map(t => (
          <span key={t} className="flex items-center gap-1 bg-terracotta/10 text-terracotta px-3 py-1 rounded-full text-xs font-sans border border-terracotta/20">
            #{t}
            <button onClick={() => setTags(tags.filter(x => x !== t))} className="hover:text-terracotta/70 ml-1 outline-none focus-visible:ring-2 focus-visible:ring-terracotta rounded">
              <X size={12} />
            </button>
          </span>
        ))}
        <input 
          type="text" 
          placeholder="Add tag (press Enter)"
          value={tagInput}
          onChange={e => setTagInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && tagInput.trim()) {
              e.preventDefault();
              if (!tags.includes(tagInput.trim())) setTags([...tags, tagInput.trim()]);
              setTagInput("");
            }
          }}
          className="text-xs font-sans px-4 py-1.5 bg-warm-white rounded-full border border-silver-sage/30 text-forest placeholder:text-sage/60 outline-none focus:border-terracotta transition-colors shadow-sm min-w-[150px]"
        />
      </div>
      
      <div className="space-y-2 pt-4 border-t border-silver-sage/20">
        <span className="text-xs font-sans text-sage">How are you feeling right now?</span>
        <div className="flex flex-wrap gap-2">
          {[
            { label: "Calm", icon: "🌿", value: "emotion:calm" },
            { label: "Uncertain", icon: "🌫", value: "emotion:uncertain" },
            { label: "Sad", icon: "🌧", value: "emotion:sad" },
            { label: "Afraid", icon: "🌑", value: "emotion:afraid" },
            { label: "Resolved", icon: "☀", value: "emotion:resolved" }
          ].map(emotion => (
            <button
              key={emotion.value}
              onClick={() => setSelectedEmotion(selectedEmotion === emotion.value ? null : emotion.value)}
              className={cn(
                "flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-sans transition-colors border shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-terracotta",
                selectedEmotion === emotion.value ? "bg-terracotta text-warm-white border-terracotta" : "bg-warm-white text-forest border-silver-sage/30 hover:border-terracotta/50"
              )}
            >
              <span>{emotion.icon}</span>
              <span>{emotion.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

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
              "flex-1 py-1.5 rounded-full text-xs font-sans transition-all timeline-breath capitalize focus-visible:ring-2 focus-visible:ring-terracotta outline-none",
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
            maxLength={5000}
            placeholder={
              mode === "stt"
                ? "Press 'Start Listening' below — your words will appear here."
                : "A memory surfaced... write it here."
            }
            className="w-full min-h-[200px] bg-warm-white/40 border-none rounded-3xl p-6 font-serif text-lg leading-relaxed text-forest placeholder:italic placeholder:text-sage/40 focus:ring-2 focus:ring-terracotta/20 transition-all resize-none timeline-breath" />
          <span className="text-[10px] text-sage/50 font-mono text-right block mt-1">
            {content.length} / 5000
          </span>

          {mode === "stt" && (
            <div className="flex flex-col items-center gap-3 mt-4">
              <select
                value={sttLang}
                onChange={(e) => setSttLang(e.target.value)}
                className="text-xs bg-warm-white border border-silver-sage/40 rounded-full px-3 py-1.5 outline-none text-forest focus:border-terracotta transition-colors shadow-sm"
              >
                <option value="en-US">English (en-US)</option>
                <option value="hi-IN">Hindi (hi-IN)</option>
                <option value="es-ES">Spanish (es-ES)</option>
                <option value="fr-FR">French (fr-FR)</option>
                <option value="de-DE">German (de-DE)</option>
                <option value="ar-SA">Arabic (ar-SA)</option>
                <option value="zh-CN">Mandarin (zh-CN)</option>
              </select>
              <button
                onClick={isListening ? stopListening : startListening}
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-sans transition-all border shadow-sm",
                  isListening
                    ? "bg-terracotta text-warm-white border-terracotta animate-pulse"
                    : "bg-warm-white text-forest border-silver-sage hover:border-terracotta hover:bg-warm-white/80"
                )}>
                <Mic size={16} />
                {isListening ? "Stop Listening" : "Start Listening"}
              </button>
            </div>
          )}
          
          {renderTagsAndEmotions()}
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

          {/* Tags and emotions always visible in audio mode */}
          {renderTagsAndEmotions()}
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
                            "px-4 py-2 rounded-full text-[10px] font-sans border transition-all focus-visible:ring-2 focus-visible:ring-terracotta outline-none",
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