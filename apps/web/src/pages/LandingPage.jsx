import { motion } from "framer-motion";
import { Shield, Clock, Lock, Heart, ChevronRight, PenLine, Layers, Download } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "@/components/Button";
import { UniquePointsSection } from "../components/UniquePointsSection";
import { FooterSection } from "../components/FooterSection";
import AntiGravityField from "../components/AntiGravityField";

const FeatureCard = ({ icon: Icon, title, description }) =>
  <motion.div
    whileHover={{ y: -8 }}
    className="p-8 bg-blush/20 rounded-[2.5rem] border border-silver-sage/30 space-y-4 timeline-breath">
    <div className="w-12 h-12 bg-warm-white rounded-2xl flex items-center justify-center text-terracotta border border-silver-sage/50">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-serif text-forest">{title}</h3>
    <p className="text-sm text-sage leading-relaxed">{description}</p>
  </motion.div>;

const HowStep = ({ number, icon: Icon, title, description, isLast }) =>
  <div className="relative flex gap-4 md:gap-8 pb-12 md:pb-16">
    {!isLast && (
      <div className="absolute left-5 top-11 bottom-0 w-px bg-silver-sage/30" />
    )}
    <div className="flex-shrink-0 w-10 h-10 mt-1 rounded-full bg-warm-white border border-silver-sage/50 flex items-center justify-center text-terracotta font-mono text-sm font-bold z-10">
      {number}
    </div>
    <motion.div
      initial={{ opacity: 0, x: 16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-2">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-blush/30 rounded-xl text-forest">
          <Icon size={18} />
        </div>
        <h3 className="text-xl font-serif text-forest">{title}</h3>
      </div>
      <p className="text-sm text-sage leading-relaxed max-w-lg">{description}</p>
    </motion.div>
  </div>;

export const LandingPage = () => {
  const scrollToHowItWorks = () => {
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToDifference = () => {
    document.getElementById("difference")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-warm-white selection:bg-terracotta/20 selection:text-forest">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}>
            <h1 className="text-6xl md:text-8xl text-forest font-serif mb-8 leading-[1.1]">
              Every fragment <br />
              <span className="italic text-terracotta">holds a truth.</span>
            </h1>
            <p className="text-xl md:text-2xl text-sage font-sans max-w-2xl mx-auto mb-12 leading-relaxed">
              SafeThread helps you preserve delicate memories as they are,
              securing them into a chronological timeline for when you're ready.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/auth">
                <Button size="lg" className="group">
                  Begin my journey
                  <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" onClick={scrollToHowItWorks}>
                How it works
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToDifference}>
                Our Difference
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Animated Background Thread */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
              d="M0,500 C200,400 300,600 500,500 C700,400 800,600 1000,500"
              stroke="#CB997E"
              strokeWidth="2"
              fill="none" />
          </svg>
        </div>
      </section>

      {/* Anti-Gravity Field Section */}
      <AntiGravityField />

      {/* Trust Section */}
      <section className="py-24 px-4 sm:px-6 bg-blush/10 border-y border-silver-sage/20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <FeatureCard
            icon={Lock}
            title="Immutable Record"
            description="Once saved, memories cannot be altered. Our system ensures a verifiable chain of custody for legal admissibility." />
          <FeatureCard
            icon={Shield}
            title="Secure Space"
            description="Your data is encrypted and handled with the highest standards of privacy. You are always in control." />
          <FeatureCard
            icon={Clock}
            title="Chronological Unity"
            description="Log fragments in any order. Our algorithm assembles them into a coherent, dated timeline automatically." />
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-32 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20">
            <h2 className="text-4xl font-serif text-forest mb-4">How it works</h2>
            <p className="text-sage font-sans italic">At your pace. In your own words.</p>
          </motion.div>
          <div>
            <HowStep
              number="1" icon={PenLine}
              title="Write, speak, or record"
              description="Log a memory fragment however it comes to you — type it out, use voice-to-text, or record an audio note. No pressure, no structure required."
              isLast={false} />
            <HowStep
              number="2" icon={Lock}
              title="It is sealed & hashed"
              description="The moment you save, your memory is cryptographically hashed, making it immutable. It cannot be changed or deleted — forming an honest record."
              isLast={false} />
            <HowStep
              number="3" icon={Layers}
              title="Fragments are woven into a timeline"
              description="SafeThread analyzes the dates and context you provide and places each memory fragment into a coherent chronological timeline, even when they arrive out of order."
              isLast={false} />
            <HowStep
              number="4" icon={Download}
              title="A clear record, when you're ready"
              description="When the time comes, generate a secure chronological document of your full timeline — a gentle way to share your story with counselors or advocates."
              isLast={true} />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-4 sm:px-6 bg-blush/10 border-t border-silver-sage/20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}>
            <Heart className="text-terracotta mx-auto mb-6" size={40} />
            <h2 className="text-4xl font-serif text-forest italic">
              "Healing isn't linear, <br /> but your story can be."
            </h2>
            <p className="text-sage font-sans max-w-xl mx-auto mt-6 leading-relaxed">
              We understand that painful events can scatter memory. SafeThread exists to hold the pieces
              together, providing a dignified space to document your truth at your own pace.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Unique Points & Difference Section */}
      <UniquePointsSection id="difference" />

      {/* Footer */}
      <FooterSection />
    </div>);
};