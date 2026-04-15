import { LayoutDashboard, Clock, Settings, LogOut, ShieldCheck } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store/useAuthStore";
import api from "@/api/axios";

const NavLink = ({ to, icon: Icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-3 px-6 py-3 rounded-full transition-all timeline-breath font-sans text-sm",
        isActive ?
        "bg-blush text-forest shadow-sm" :
        "text-sage hover:text-forest hover:bg-blush/20"
      )}>
      <Icon size={20} />
      <span>{label}</span>
    </Link>);
};

export const Sidebar = () => {
  const { user, refreshToken, clearAuth } = useAuthStore();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await api.post("/auth/logout", { refreshToken });
    } catch (_) {
      // ignore errors — still clear local state
    }
    clearAuth();
    navigate("/");
  };

  return (
    <div className="w-72 h-screen fixed left-0 top-0 border-r border-silver-sage p-8 flex flex-col bg-warm-white/80 backdrop-blur-lg z-50">
      <div className="flex items-center gap-2 mb-12 px-4">
        <ShieldCheck className="text-terracotta" size={28} />
        <span className="text-2xl font-serif text-forest tracking-tight">SafeThread</span>
      </div>

      <nav className="flex-1 space-y-2">
        <NavLink to="/dashboard" icon={LayoutDashboard} label="Dashboard" />
        <NavLink to="/timeline" icon={Clock} label="Timeline" />
        <NavLink to="/settings" icon={Settings} label="Settings" />
      </nav>

      <div className="mt-auto space-y-4">
        {user && (
          <div className="px-6 py-3 space-y-0.5">
            <p className="text-xs font-mono text-forest truncate">{user.name || user.email}</p>
            <p className="text-[10px] font-mono text-sage/60 truncate">{user.email}</p>
          </div>
        )}
        <button
          onClick={handleSignOut}
          className="flex items-center gap-3 px-6 py-3 text-sage hover:text-terracotta transition-colors font-sans text-sm w-full rounded-full hover:bg-terracotta/5">
          <LogOut size={20} />
          <span>Sign Out</span>
        </button>
      </div>
    </div>);
};