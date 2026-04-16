import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/Button";

export const GroundingModal = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("grounding_shown")) {
      setShow(true);
    }
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem("grounding_shown", "true");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center p-4 bg-blush/40 backdrop-blur-md"
        >
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-terracotta/10 rounded-full"
               style={{ transform: "translate(-50%, -50%)" }}>
            <motion.div
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full bg-forest/5 rounded-full border border-forest/10"
            />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="z-10 text-center space-y-6 w-full max-w-sm bg-warm-white/90 p-10 rounded-[3rem] border border-silver-sage/30 shadow-lg"
          >
            <div className="space-y-4 mb-8">
              <h2 className="text-3xl font-serif text-forest">Take a moment. <br/> Breathe.</h2>
              <p className="text-sage font-sans italic">SafeThread is here when you're ready.</p>
            </div>

            <div className="flex flex-col gap-4 items-center">
              <Button onClick={handleDismiss} className="w-full h-12 text-lg">
                I'm ready
              </Button>
              <button 
                onClick={handleDismiss}
                className="text-sm font-sans text-sage hover:text-forest transition-colors font-medium border-b border-transparent hover:border-forest pb-0.5"
              >
                Skip
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
