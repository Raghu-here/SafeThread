import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AuthPage } from "./pages/AuthPage";
import { DashboardPage } from "./pages/DashboardPage";
import { LandingPage } from "./pages/LandingPage";
import { TimelinePage } from "./pages/TimelinePage";
import { SettingsPage } from "./pages/SettingsPage";

export const App = () => {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </AnimatePresence>
    </Router>);

};
const Timeline = () => <div className="p-8">Timeline - Your Journey.</div>;