import { Sidebar } from "@/components/Sidebar";
import { MemoryInputPanel } from "@/components/MemoryInputPanel";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";
import { useEffect, useState } from "react";
import api from "@/api/axios";

export const DashboardPage = () => {
  const user = useAuthStore((s) => s.user);
  const [memoryCount, setMemoryCount] = useState("—");

  useEffect(() => {
    api.get("/memories")
      .then((res) => setMemoryCount(res.data?.length ?? 0))
      .catch(() => setMemoryCount(0));
  }, []);

  const greeting = user?.name ? `Welcome back, ${user.name}.` : "Your Safe Space";

  return (
    <div className="min-h-screen bg-warm-white flex">
      <Sidebar />
      <main className="flex-1 md:ml-72 p-4 md:p-12">
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
          <section className="space-y-8">
            <div className="bg-blush/10 rounded-[2.5rem] p-8 border border-silver-sage/30 h-full flex flex-col items-center justify-center text-center space-y-6">
              <div className="w-16 h-16 bg-warm-white rounded-2xl flex items-center justify-center text-terracotta border border-silver-sage/50">
                <Lock size={32} />
              </div>
              <div>
                <h3 className="text-2xl text-forest font-serif mb-2">Secure Entries</h3>
                <p className="text-4xl font-mono text-forest">{memoryCount}</p>
              </div>
              <p className="text-xs text-sage font-sans uppercase tracking-[0.2em] max-w-[200px]">
                Chronologically ordered and cryptographically signed
              </p>
            </div>
          </section>
        </motion.div>
      </main>
    </div>);
};