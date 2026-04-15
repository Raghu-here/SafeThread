import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, RegisterSchema } from "@safethread/shared";
import { useNavigate } from "react-router-dom";
import api from "@/api/axios";
import { useAuthStore } from "@/store/useAuthStore";
import Button from "@/components/Button";
import Input from "@/components/Input";

export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const setAuth = useAuthStore((state) => state.setAuth);
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(isLogin ? LoginSchema : RegisterSchema)
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    setError(null);
    try {
      const endpoint = isLogin ? "/auth/login" : "/auth/register";
      const response = await api.post(endpoint, data);
      const { user, accessToken, refreshToken } = response.data;
      setAuth(user, accessToken, refreshToken);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Something feels off — could you check this?");
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -16 }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-warm-white">
      <div className="w-full max-w-md">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-4xl text-forest mb-2 font-serif">
            
            SafeThread
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sage font-sans italic">
            
            {isLogin ? "Your journey is safe here." : "Begin your healing space."}
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="bg-blush/30 backdrop-blur-sm p-8 rounded-3xl border border-silver-sage shadow-sm">
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {!isLogin &&
            <Input
              label="Full Name (Optional)"
              placeholder="How should we address you?"
              {...register("name")}
              error={errors.name?.message} />

            }
            <Input
              label="Email"
              type="email"
              placeholder="Your email address"
              {...register("email")}
              error={errors.email?.message} />
            
            <Input
              label="Password"
              type="password"
              placeholder="A secure password"
              {...register("password")}
              error={errors.password?.message} />
            

            <AnimatePresence>
              {error &&
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-xs text-terracotta text-center font-sans">
                
                  {error}
                </motion.p>
              }
            </AnimatePresence>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Wait a moment..." : isLogin ? "Enter my space" : "Create my space"}
            </Button>
          </form>

          <div className="text-center mt-8">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-sage hover:text-forest transition-colors font-sans">
              
              {isLogin ? "Don't have a space yet? Register here." : "Already have a space? Enter here."}
            </button>
          </div>
        </motion.div>
      </div>
    </div>);

};