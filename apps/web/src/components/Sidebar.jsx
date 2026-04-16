import { LayoutDashboard, Clock, Settings, LogOut, ShieldCheck, Menu, X, HeartHandshake } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store/useAuthStore";
import api from "@/api/axios";
import { useState, useEffect } from "react";

const NavLink = ({ to, icon: Icon, label, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      onClick={onClick}
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
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  // Close sidebar on route change (mobile)
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

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
    <>
      {/* Mobile Hamburger */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-4 left-4 z-40 p-2.5 bg-warm-white/80 backdrop-blur-lg border border-silver-sage/30 rounded-2xl text-forest shadow-sm hover:bg-warm-white transition-all">
        <Menu size={24} />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-forest/20 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Drawer */}
      <div className={cn(
        "w-72 h-screen fixed left-0 top-0 border-r border-silver-sage p-8 flex flex-col bg-warm-white/95 backdrop-blur-lg z-50 transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}>
        <div className="flex items-center justify-between mb-12 px-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-terracotta" size={28} />
            <span className="text-2xl font-serif text-forest tracking-tight">SafeThread</span>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="md:hidden p-1 text-sage hover:text-forest">
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 space-y-2">
          <NavLink to="/dashboard" icon={LayoutDashboard} label="Dashboard" onClick={() => setIsOpen(false)} />
          <NavLink to="/timeline" icon={Clock} label="Timeline" onClick={() => setIsOpen(false)} />
          <NavLink to="/settings" icon={Settings} label="Settings" onClick={() => setIsOpen(false)} />
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
          
          <div className="px-4 py-2 border-t border-silver-sage/20">
            <a 
              href="https://www.rainn.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-2 py-1 text-sage/80 hover:text-forest transition-colors mt-2"
            >
              <HeartHandshake size={16} />
              <span className="text-xs font-sans">Need support?</span>
            </a>
            <p className="px-2 mt-1 text-[10px] font-mono text-sage/60">Crisis line: 988</p>
          </div>
        </div>
      </div>
    </>);
};