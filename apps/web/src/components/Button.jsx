import { forwardRef } from "react";
import { cn } from "@/lib/utils";






const Button = forwardRef(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "bg-terracotta text-warm-white hover:bg-terracotta/90 shadow-sm",
      secondary: "bg-blush text-forest hover:bg-blush/90",
      outline: "border border-silver-sage bg-transparent hover:bg-sage/10",
      ghost: "hover:bg-sage/10"
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-6 py-2.5",
      lg: "px-8 py-3.5 text-lg"
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-sans transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none timeline-breath",
          variants[variant],
          sizes[size],
          className
        )}
        {...props} />);


  }
);

Button.displayName = "Button";
export default Button;