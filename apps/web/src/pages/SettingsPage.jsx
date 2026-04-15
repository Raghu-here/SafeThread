import { Sidebar } from "@/components/Sidebar";
import { User, Shield, HardDrive, Key } from "lucide-react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { useAuthStore } from "@/store/useAuthStore";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "@/api/axios";

const SettingsSection = ({ title, icon: Icon, children }) =>
  <div className="space-y-6">
    <div className="flex items-center gap-3 pb-4 border-b border-silver-sage/20">
      <div className="w-10 h-10 bg-blush/20 rounded-xl flex items-center justify-center text-forest">
        <Icon size={20} />
      </div>
      <h2 className="text-2xl font-serif text-forest">{title}</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {children}
    </div>
  </div>;

export const SettingsPage = () => {
  const { user, clearAuth } = useAuthStore();
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [pwStatus, setPwStatus] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleChangePassword = async () => {
    if (!newPassword || newPassword.length < 6) {
      setPwStatus("Password must be at least 6 characters.");
      return;
    }
    try {
      await api.post("/auth/change-password", { newPassword });
      setPwStatus("Password updated successfully.");
      setNewPassword("");
    } catch {
      setPwStatus("Failed to update password. Try again.");
    }
    setTimeout(() => setPwStatus(null), 4000);
  };

  const handleTerminate = async () => {
    if (!confirmDelete) { setConfirmDelete(true); return; }
    try {
      await api.delete("/auth/account");
    } catch (_) {}
    clearAuth();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-warm-white flex">
      <Sidebar />
      <main className="flex-1 md:ml-72 p-4 md:p-12">
        <div className="max-w-4xl mx-auto space-y-16">
          <header>
            <h1 className="text-4xl text-forest font-serif mb-2">Account Settings</h1>
            <p className="text-sage font-sans italic">Manage your secure space.</p>
          </header>

          <SettingsSection title="Personal Information" icon={User}>
            <Input label="Display Name" placeholder={user?.name || "Your name"} disabled />
            <Input label="Email Address" type="email" placeholder={user?.email || "email@example.com"} disabled />
          </SettingsSection>

          <SettingsSection title="Security" icon={Shield}>
            <div className="space-y-4">
              <p className="text-sm text-sage font-sans leading-relaxed">
                Your account is protected with JWT rotation and encrypted storage.
                Keep your password secure.
              </p>
              <Input
                label="New Password"
                type="password"
                placeholder="At least 6 characters"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)} />
              <Button variant="outline" className="gap-2" onClick={handleChangePassword}>
                <Key size={16} />
                Change Password
              </Button>
              {pwStatus && <p className="text-xs text-sage font-sans">{pwStatus}</p>}
            </div>
            <div className="bg-terracotta/5 p-6 rounded-[2rem] border border-terracotta/10 space-y-3">
              <h4 className="text-sm font-sans font-bold text-terracotta uppercase tracking-[0.1em]">Caution Pool</h4>
              <p className="text-xs text-sage leading-relaxed">
                Deleting your account will permanently erase your memories and break the chain of custody.
              </p>
              <button
                onClick={handleTerminate}
                className="text-xs text-terracotta font-serif border-b border-terracotta/30 hover:border-terracotta transition-all">
                {confirmDelete ? "⚠ Click once more to confirm — this cannot be undone" : "Terminate Account"}
              </button>
            </div>
          </SettingsSection>

          <SettingsSection title="Data & Storage" icon={HardDrive}>
            <div className="md:col-span-2 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between p-6 bg-blush/10 rounded-[2rem] border border-silver-sage/20">
              <div className="space-y-1">
                <p className="text-forest font-sans">Timeline Export Status</p>
                <p className="text-sm text-sage">Download a copy of all your memories.</p>
              </div>
              <Button
                variant="secondary"
                onClick={async () => {
                  try {
                    const res = await api.get("/memories");
                    const blob = new Blob([JSON.stringify(res.data, null, 2)], { type: "application/json" });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = "safethread-archive.json";
                    a.click();
                    URL.revokeObjectURL(url);
                  } catch { alert("Could not retrieve data. Please try again."); }
                }}>
                Request Data Archive
              </Button>
            </div>
          </SettingsSection>
        </div>
      </main>
    </div>);
};