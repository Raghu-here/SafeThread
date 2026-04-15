import { forwardRef } from "react";
import { cn } from "@/lib/utils";






const Input = forwardRef(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        {label && <label className="text-sm font-sans text-sage ml-1">{label}</label>}
        <input
          ref={ref}
          className={cn(
            "w-full px-4 py-2.5 rounded-xl border border-silver-sage bg-warm-white/50 focus:border-terracotta focus:ring-0 transition-all font-sans text-forest placeholder:text-sage/50 timeline-breath",
            error && "border-terracotta/50 bg-terracotta/5",
            className
          )}
          {...props} />
        
        {error && <p className="text-xs font-sans text-terracotta mt-1 ml-1">{error}</p>}
      </div>);

  }
);

Input.displayName = "Input";
export default Input;