import { motion } from "framer-motion";
import { Heart, Home } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "@/components/Button";

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-warm-white flex items-center justify-center p-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md space-y-8">
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-blush/20 rounded-[2.5rem] flex items-center justify-center text-terracotta border border-silver-sage/30">
            <Heart size={40} />
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-4xl font-serif text-forest italic">Take a breath.</h1>
          <p className="text-sage font-sans leading-relaxed">
            This space seems to be quiet. Let's head back to a familiar place where we can continue your journey.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Link to="/">
            <Button className="w-full gap-2">
              <Home size={18} />
              Return Home
            </Button>
          </Link>
          <p className="text-xs text-sage font-mono uppercase tracking-widest opacity-60">
            Error 404 &bull; Page Not Found
          </p>
        </div>
      </motion.div>
    </div>
  );
};
