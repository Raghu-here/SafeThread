import { Sidebar } from "@/components/Sidebar";
import { motion } from "framer-motion";
import { Download, FileText, Volume2, Search, ChevronDown, ChevronUp } from "lucide-react";
import Button from "@/components/Button";
import { SkeletonTimelineNode } from "@/components/Skeleton";
import { useEffect, useState } from "react";
import api from "@/api/axios";
import { AnimatePresence } from "framer-motion";

const isAudioMemory = (memory) =>
  memory.content?.startsWith("[Audio Recording");

const TimelineNode = ({ memory, isLast }) => {
  const audio = isAudioMemory(memory);

  return (
    <div className="relative pl-12 pb-16">
      {!isLast && (
        <div className="absolute left-[19px] top-8 bottom-0 w-px bg-silver-sage/30" />
      )}
      {/* Node dot */}
      <div className={`absolute left-0 top-2 w-10 h-10 rounded-full bg-warm-white border flex items-center justify-center z-10 ${
        audio ? "border-terracotta/40" : "border-silver-sage/50"
      }`}>
        {audio
          ? <Volume2 size={16} className="text-terracotta" />
          : <div className="w-2 h-2 rounded-full bg-terracotta" />}
      </div>

      <motion.div
        initial={{ opacity: 0, x: 16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl space-y-3">

        {/* Date + hash row */}
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-mono text-sage uppercase tracking-[0.2em]">
            {memory.eventDate ? new Date(memory.eventDate).toLocaleDateString() : "Undated"}
          </span>
          {audio && (
            <span className="text-[10px] font-mono text-terracotta/60 bg-terracotta/5 px-2 py-0.5 rounded-full border border-terracotta/10">
              Audio Memory
            </span>
          )}
          <div className="h-px flex-1 bg-silver-sage/10" />
          <span className="text-[10px] font-mono text-sage/50 italic">
            #{memory.hash.substring(0, 6)}
          </span>
        </div>

        {/* Content / audio player */}
        {audio && memory.audioData ? (
          <div className="bg-blush/20 rounded-3xl p-5 border border-silver-sage/30 space-y-4">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono text-terracotta uppercase tracking-wider">AI Transcript</span>
              <p className="text-sm text-forest font-sans">
                {memory.transcript || "No transcript available. Audio may still be processing or was not provided."}
              </p>
            </div>
            <audio
              src={memory.audioData}
              controls
              className="w-full h-10 accent-[#CB997E]"
              style={{ borderRadius: "12px" }}
            />
            <p className="text-[10px] text-sage/50 font-sans text-center">
              This audio recording is cryptographically sealed and cannot be altered.
            </p>
          </div>
        ) : (
          <p className="text-2xl font-serif text-forest leading-snug">
            {memory.content}
          </p>
        )}

        <div className="pt-2">
          <span className="text-[10px] text-sage font-mono uppercase tracking-widest opacity-60">
            Recorded: {new Date(memory.submittedAt).toLocaleString()}
          </span>
        </div>
      </motion.div>
    </div>
  );
};

const MonthGroup = ({ title, entries }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-12">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 mb-6 group outline-none"
      >
        <h2 className="text-xl font-serif text-forest">{title} <span className="text-sage font-sans text-sm tracking-widest uppercase ml-2">• {entries.length} entri{entries.length === 1 ? "y" : "es"}</span></h2>
        <div className="p-1 rounded-full bg-silver-sage/10 text-sage group-hover:bg-silver-sage/20 transition-colors">
          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden space-y-4"
          >
            {entries.map((m, i) => (
              <TimelineNode key={m.id} memory={m} isLast={i === entries.length - 1} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


export const TimelinePage = () => {
  const [memories, setMemories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("ALL");

  useEffect(() => {
    api.get("/memories")
      .then((res) => setMemories(res.data || []))
      .catch(() => setMemories([]))
      .finally(() => setLoading(false));
  }, []);

  const handleGenerateLegalDoc = () => {
    if (!memories.length) { alert("No memories to export yet."); return; }

    const lines = [
      "═".repeat(60),
      "SAFETHREAD — SECURE MEMORY LEDGER",
      "A chronological record of sealed moments",
      "═".repeat(60),
      `Generated: ${new Date().toLocaleString()}`,
      `Total entries: ${memories.length}`,
      "",
      "NOTICE: This document was generated by SafeThread, a supportive and",
      "secure memory logging platform. All entries are cryptographically hashed at",
      "the time of recording and cannot be retroactively altered.",
      "",
      "═".repeat(60),
      "",
      ...memories.map((m, i) => {
        const isAudio = isAudioMemory(m);
        const lines = [
          `ENTRY ${String(i + 1).padStart(3, "0")}`,
          "-".repeat(40),
          `Date of Event : ${m.eventDate ? new Date(m.eventDate).toLocaleDateString() : "Not specified"}`,
          `Time of Event : ${m.eventTime || "Not specified"}`,
          `Date Confidence : ${m.dateConfidence || "APPROXIMATE"}`,
          `Recorded At   : ${new Date(m.submittedAt).toLocaleString()}`,
          `Integrity Hash : ${m.hash}`,
          `Memory Type   : ${isAudio ? "Audio Recording (Digital)" : "Written Statement"}`,
          "",
        ];

        if (isAudio) {
          lines.push(
            "[AUDIO MEMORY]",
            `Duration/Info: ${m.content.split("\n")[0]}`,
            "TRANSCRIPT (AI-generated via OpenAI Whisper):",
            m.transcript || "[Transcript unavailable]",
            "",
            "The original audio recording for this entry is stored digitally",
            "and cryptographically sealed within the SafeThread system.",
            "To access the playable recording, open this memory in the",
            "SafeThread Timeline view and press Play.",
            ""
          );
        } else {
          lines.push("CONTENT:", m.content, "");
        }

        lines.push("-".repeat(40), "");
        return lines.join("\n");
      }),
      "═".repeat(60),
      "END OF DOCUMENT",
      "═".repeat(60),
    ];

    const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `safethread-ledger-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const filteredMemories = memories.filter((m) => {
    if (filter === "WRITTEN" && isAudioMemory(m)) return false;
    if (filter === "AUDIO" && !isAudioMemory(m)) return false;
    if (filter === "UNDATED" && m.eventDate) return false;
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return m.content?.toLowerCase().includes(query) || m.transcript?.toLowerCase().includes(query);
    }
    return true;
  });

  const groupedMemories = filteredMemories.reduce((acc, m) => {
    const key = m.eventDate 
      ? new Date(m.eventDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
      : "Undated";
    if (!acc[key]) acc[key] = [];
    acc[key].push(m);
    return acc;
  }, {});

  const sortedKeys = Object.keys(groupedMemories).sort((a, b) => {
    if (a === "Undated") return 1;
    if (b === "Undated") return -1;
    return new Date(b) - new Date(a);
  });

  return (
    <div className="min-h-screen bg-warm-white flex">
      <Sidebar />
      <main className="flex-1 lg:ml-72 p-4 md:p-12">
        <div className="max-w-4xl mx-auto">
          <header className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between mb-12 md:mb-20">
            <div>
              <h1 className="text-4xl text-forest font-serif mb-2">My Timeline</h1>
              <p className="text-sage font-sans italic">Your story, woven back together.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="gap-2" onClick={handleGenerateLegalDoc}>
                <FileText size={18} />
                Memory Ledger
              </Button>
              <Button
                variant="outline"
                className="gap-2"
                onClick={() => {
                  // Archive excludes raw audioData for file size
                  const exportData = memories.map(({ audioData, ...rest }) => rest);
                  const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json" });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement("a");
                  a.href = url;
                  a.download = `safethread-archive-${Date.now()}.json`;
                  a.click();
                  URL.revokeObjectURL(url);
                }}>
                <Download size={18} />
                Archive
              </Button>
            </div>
          </header>

          <div className="mb-12 space-y-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search your memories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-warm-white border border-silver-sage/40 rounded-full pl-12 pr-6 py-4 text-forest placeholder:text-sage/60 outline-none focus:border-terracotta transition-colors shadow-sm"
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-sage/60" size={18} />
            </div>
            
            <div className="flex flex-wrap items-center gap-2">
              {["ALL", "WRITTEN", "AUDIO", "UNDATED"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest transition-colors ${
                    filter === f 
                      ? "bg-forest text-warm-white" 
                      : "bg-silver-sage/10 text-sage hover:bg-silver-sage/20 border border-transparent hover:border-silver-sage/30"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="space-y-4">
              <SkeletonTimelineNode />
              <SkeletonTimelineNode />
              <SkeletonTimelineNode isLast />
            </div>
          ) : filteredMemories.length === 0 ? (
            <div className="text-center py-24 space-y-4">
              <p className="text-2xl font-serif text-forest italic">
                {memories.length === 0 ? "Your timeline is waiting." : "No memories match your search."}
              </p>
              <p className="text-sm text-sage font-sans">
                {memories.length === 0 ? "Save your first memory from the Dashboard to begin." : "Try adjusting your filters or search terms."}
              </p>
            </div>
          ) : (
            <div>
              {sortedKeys.map(key => (
                <MonthGroup key={key} title={key} entries={groupedMemories[key]} />
              ))}
            </div>
          )}

          <div className="mt-20 pt-12 border-t border-silver-sage/20 text-center">
            <p className="text-sm text-sage font-sans italic max-w-sm mx-auto">
              Memories without dates are placed at the end to preserve continuity.
              Audio recordings are marked with a <Volume2 className="inline-block w-3 h-3 text-terracotta" /> icon.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};