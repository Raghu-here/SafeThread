import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/Button";

const steps = [
  { title: "Welcome to SafeThread", text: "Your safe space to document your truth." },
  { title: "Immutable by design", text: "Once saved, memories cannot be altered. Each entry receives a cryptographically secure hash to preserve the chain of custody." },
  { title: "Your timeline", text: "Fragments logged in any order are assembled chronologically based on their approximated dates." },
  { title: "When you're ready", text: "Export a legal-grade document for advocates, therapy, or proceedings at any time." },
];

export const OnboardingModal = () => {
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!localStorage.getItem("safethread_onboarded")) {
      setShow(true);
    }
  }, []);

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      localStorage.setItem("safethread_onboarded", "true");
      setShow(false);
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-forest/40 backdrop-blur-md"
        >
          <motion.div 
            className="w-full max-w-lg bg-warm-white p-10 rounded-[3rem] border border-silver-sage/30 shadow-xl overflow-hidden relative min-h-[360px] flex flex-col"
          >
            <div className="flex gap-3 mb-10 justify-center">
              {steps.map((_, i) => (
                <div key={i} className={`w-2.5 h-2.5 rounded-full transition-colors ${i === step ? 'bg-terracotta' : 'bg-silver-sage/40'}`} />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ ease: [0.25, 0.46, 0.45, 0.94], duration: 0.4 }}
                className="flex-1 text-center space-y-6"
              >
                <h2 className="text-3xl font-serif text-forest">{steps[step].title}</h2>
                <p className="text-sage font-sans text-lg italic leading-relaxed px-4">
                  {steps[step].text}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-between items-center mt-auto pt-8">
              <button
                onClick={handleBack}
                disabled={step === 0}
                className="text-sage hover:text-forest transition-colors text-sm font-sans font-medium px-4 py-2 opacity-100 disabled:opacity-0"
              >
                Back
              </button>
              <Button onClick={handleNext} className="min-w-[120px]">
                {step === steps.length - 1 ? "Begin" : "Next"}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
