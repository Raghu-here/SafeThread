import { DoorOpen } from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";
import { useLocation } from "react-router-dom";

export const QuickExit = () => {
  const { user } = useAuthStore();
  const location = useLocation();

  // Only show on authenticated pages, not on landing or auth page
  const isAuthPage = location.pathname === "/" || location.pathname === "/auth" || location.pathname === "/difference";

  if (!user || isAuthPage) return null;

  const handleExit = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    useAuthStore.getState().clearAuth();
    sessionStorage.clear();
    window.location.replace("https://google.com");
  };

  return (
    <button
      onClick={handleExit}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-warm-white/90 backdrop-blur border border-silver-sage/30 rounded-full text-sage hover:bg-warm-white hover:text-forest shadow-sm transition-all timeline-breath"
      title="Exit safely immediately"
    >
      <span className="font-sans text-sm font-medium">Exit safely</span>
      <DoorOpen size={18} />
    </button>
  );
};
