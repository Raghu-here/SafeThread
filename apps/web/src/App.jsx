import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthPage } from "./pages/AuthPage";
import { DashboardPage } from "./pages/DashboardPage";
import { LandingPage } from "./pages/LandingPage";
import { TimelinePage } from "./pages/TimelinePage";
import { SettingsPage } from "./pages/SettingsPage";
import { NotFound } from "./pages/NotFound";
import { UniquePointsPage } from "./pages/UniquePointsPage";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/timeline" element={<TimelinePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/difference" element={<UniquePointsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};