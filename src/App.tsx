import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ViaductA2 from "./pages/projects/ViaductA2";
import Blog from "./pages/Blog";
import Jobs from "./pages/Jobs";
import Contact from "./pages/Contact";
import SearchResults from "./pages/SearchResults";
import NotFound from "./pages/NotFound";
import ProjectManagement from "./pages/services/ProjectManagement";
import TechnicalStudies from "./pages/services/TechnicalStudies";
import Inspection from "./pages/services/Inspection";
import ProfessionalTraining from "./pages/services/ProfessionalTraining";
import ProjectPlannerBrussels from "./pages/jobs/ProjectPlannerBrussels";

const queryClient = new QueryClient();

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/project-management" element={<ProjectManagement />} />
            <Route path="/services/technical-studies" element={<TechnicalStudies />} />
            <Route path="/services/inspection" element={<Inspection />} />
            <Route path="/services/professional-training" element={<ProfessionalTraining />} />
            <Route path="/expertise" element={<Projects />} />
            <Route path="/projects/viaduct-a2" element={<ViaductA2 />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/jobs/project-planner-brussels" element={<ProjectPlannerBrussels />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/search" element={<SearchResults />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
