import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import ProjectsPage from "../pages/ProjectsPage";
import ProcessPage from "../pages/ProcessPage";
import ContactPage from "../pages/ContactPage";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/process" element={<ProcessPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}