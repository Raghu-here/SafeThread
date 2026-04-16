import { Sidebar } from "@/components/Sidebar";
import { MemoryInputPanel } from "@/components/MemoryInputPanel";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";
import { useEffect, useState } from "react";
import api from "@/api/axios";

export const DashboardPage = () => {
  const user = useAuthStore((s) => s.user);
  const [memories, setMemories] = useState([]);

  useEffect(() => {
    api.get("/memories")
      .then((res) => setMemories(res.data || []))
      .catch(() => setMemories([]));
  }, []);

  const sortedMemories = [...memories].sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt));
  const recentMemories = sortedMemories.slice(0, 3);

  const greeting = user?.name ? `Welcome back, ${user.name}.` : "Your Safe Space";

  return (
    <div className="min-h-screen bg-warm-white flex">
      <Sidebar />
      <main className="flex-1 lg:ml-72 p-4 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Input */}
          <section className="space-y-8">
            <header>
              <h1 className="text-4xl text-forest font-serif mb-2">{greeting}</h1>
              <p className="text-sage font-sans lg:max-w-md">
                Record your memories as they come to you. We'll secure them and build your timeline when you're ready.
              </p>
            </header>

            <MemoryInputPanel />
          </section>

          {/* Right Column: Stats */}
          <section className="space-y-6">
            <header className="flex items-center justify-between">
              <h2 className="text-2xl text-forest font-serif">Recent Memories</h2>
              <span className="font-mono text-xs bg-silver-sage/20 text-sage px-2 py-1 rounded-full">{memories.length} entries</span>
            </header>
            
            <div className="bg-blush/10 rounded-[2.5rem] p-6 border border-silver-sage/30 h-full min-h-[400px]">
              {recentMemories.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4 pt-12">
                  <div className="w-16 h-16 bg-warm-white rounded-2xl flex items-center justify-center text-terracotta border border-silver-sage/50">
                    <Lock size={32} />
                  </div>
                  <h3 className="text-xl text-forest font-serif mb-2">Secure Entries</h3>
                  <p className="text-sage font-sans italic max-w-[200px]">Your timeline is waiting. Save a memory to begin.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {recentMemories.map(m => (
                    <div key={m.id} className="bg-warm-white p-4 rounded-3xl border border-silver-sage/30 hover:border-terracotta/30 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono text-sage uppercase tracking-widest bg-sage/5 px-2 py-1 rounded-full">
                          {m.eventDate ? new Date(m.eventDate).toLocaleDateString() : "Undated"}
                        </span>
                        <span className="text-[10px] font-mono text-sage/50 italic">#{m.hash.substring(0, 6)}</span>
                      </div>
                      <p className="text-sm text-forest font-sans">
                        {m.content?.substring(0, 80)}{m.content?.length > 80 ? "..." : ""}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        </motion.div>
      </main>
    </div>);
};