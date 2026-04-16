import { motion, AnimatePresence } from "framer-motion";
import { Lock, Tag as TagIcon, AlertCircle, X, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import api from "@/api/axios";
















export const MemoryCard = ({ memory, index }) => {
  const hashSnippet = memory.hash.substring(0, 8) + "..." + memory.hash.substring(memory.hash.length - 4);
  const [isCorrecting, setIsCorrecting] = useState(false);
  const [correctionContent, setCorrectionContent] = useState("");
  const [correctionDate, setCorrectionDate] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleCorrectionSubmit = async (e) => {
    e.preventDefault();
    if (!correctionContent.trim() || !correctionDate) return;
    setIsSubmitting(true);
    try {
      await api.post("/memories", {
        content: correctionContent,
        eventDate: new Date(correctionDate).toISOString(),
        dateConfidence: "CERTAIN",
        supersedesId: memory.id
      });
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setIsCorrecting(false);
        window.location.reload();
      }, 2000);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

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
        
        {!memory.isSuperseded && (
          <button 
            onClick={() => setIsCorrecting(true)}
            className="text-[10px] text-sage hover:text-terracotta transition-colors font-sans uppercase tracking-[0.1em] border-b border-transparent hover:border-terracotta">
            File Correction
          </button>
        )}
      </div>

      <AnimatePresence>
        {isCorrecting && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest/40 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-full max-w-lg bg-warm-white p-8 rounded-[2rem] border border-silver-sage/30 relative"
            >
              <button 
                onClick={() => !isSubmitting && !showSuccess && setIsCorrecting(false)}
                className="absolute top-6 right-6 text-sage hover:text-forest transition-colors"
              >
                <X size={24} />
              </button>

              {showSuccess ? (
                <div className="flex flex-col items-center justify-center text-center space-y-4 py-8">
                  <CheckCircle size={48} className="text-terracotta" />
                  <p className="text-2xl font-serif text-forest">Correction filed and sealed.</p>
                  <p className="text-sm font-sans text-sage">The original record has been marked as superseded.</p>
                </div>
              ) : (
                <form onSubmit={handleCorrectionSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-serif text-forest mb-2">File a Correction</h3>
                    <p className="text-sm font-sans text-sage mb-6">
                      This will create a new interconnected memory. The original entry will remain sealed but will be marked as superseded.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-sage uppercase tracking-wider">What is the correction?</label>
                    <textarea 
                      required
                      value={correctionContent}
                      onChange={(e) => setCorrectionContent(e.target.value)}
                      className="w-full bg-warm-white border border-silver-sage/40 rounded-2xl p-4 text-forest placeholder:text-sage/50 outline-none focus:border-terracotta transition-colors min-h-[120px]"
                      placeholder="Detail the corrected information..."
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-sage uppercase tracking-wider">Date of Correction</label>
                    <input 
                      type="date"
                      required
                      value={correctionDate}
                      onChange={(e) => setCorrectionDate(e.target.value)}
                      className="w-full bg-warm-white border border-silver-sage/40 rounded-full px-5 py-3 text-forest outline-none focus:border-terracotta transition-colors font-mono text-sm"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-forest text-warm-white py-4 rounded-full font-sans shadow-md hover:bg-forest/90 transition-all timeline-breath disabled:opacity-50"
                  >
                    {isSubmitting ? "Sealing..." : "Seal Correction"}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>);

};