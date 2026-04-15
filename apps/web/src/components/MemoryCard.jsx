import { motion } from "framer-motion";
import { Lock, Tag as TagIcon, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
















export const MemoryCard = ({ memory, index }) => {
  const hashSnippet = memory.hash.substring(0, 8) + "..." + memory.hash.substring(memory.hash.length - 4);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        "group p-6 bg-blush/30 backdrop-blur-sm rounded-[2rem] border border-silver-sage/30 hover:border-terracotta/30 transition-all timeline-breath relative",
        memory.isSuperseded && "opacity-60"
      )}>
      
      {memory.isSuperseded &&
      <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 bg-sage/20 rounded-full border border-sage/20 text-[10px] text-sage font-mono uppercase tracking-widest">
          <AlertCircle size={10} />
          Correction Filed
        </div>
      }

      <div className="flex items-center gap-3 mb-4">
        <div className="px-3 py-1 bg-warm-white rounded-full border border-silver-sage/30 text-[10px] font-mono text-forest">
          {memory.eventDate ? new Date(memory.eventDate).toLocaleDateString() : "Undated"}
        </div>
        <div className={cn(
          "w-2 h-2 rounded-full",
          memory.dateConfidence === "CERTAIN" ? "bg-forest" : "bg-sage"
        )} />
      </div>

      <p className="text-xl font-serif text-forest leading-relaxed mb-6">
        {memory.content}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {memory.tags?.map((t) =>
        <span key={t.tag.id} className="inline-flex items-center gap-1 px-2 py-0.5 bg-silver-sage/20 rounded-md text-[10px] text-sage font-sans uppercase">
            <TagIcon size={10} />
            {t.tag.name}
          </span>
        )}
      </div>

      <div className="pt-4 border-t border-silver-sage/20 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[10px] text-sage font-mono uppercase tracking-wider">
          <Lock size={12} className="text-terracotta/60" />
          <span>{hashSnippet}</span>
        </div>
        
        <button className="text-[10px] text-sage hover:text-terracotta transition-colors font-sans uppercase tracking-[0.1em] border-b border-transparent hover:border-terracotta">
          File Correction
        </button>
      </div>
    </motion.div>);

};