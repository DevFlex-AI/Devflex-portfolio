import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import StoryPage from "./pages/StoryPage";
import TechLanguagesPage from "./pages/TechLanguagesPage";
import TechFrameworksPage from "./pages/TechFrameworksPage";
import ProjectsOverviewPage from "./pages/ProjectsOverviewPage";
import { VortexPage, CodingITPage, GeminiPage, LobePage, StirlingPage } from "./pages/ProjectDeepDives";
import DesignPhilosophyPage from "./pages/DesignPhilosophyPage";
import SmackShPage from "./pages/SmackShPage";
import PrinciplesPage from "./pages/PrinciplesPage";
import ArchitecturePage from "./pages/ArchitecturePage";
import GitHubStatsPage from "./pages/GitHubStatsPage";
import ForkStrategyPage from "./pages/ForkStrategyPage";
import BuilderLogPage from "./pages/BuilderLogPage";
import RetroMantrasPage from "./pages/RetroMantrasPage";
import ContactPage from "./pages/ContactPage";
import PhilosophyPage from "./pages/PhilosophyPage";
import ResumePage from "./pages/ResumePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/story" element={<StoryPage />} />
            <Route path="/tech-languages" element={<TechLanguagesPage />} />
            <Route path="/tech-frameworks" element={<TechFrameworksPage />} />
            <Route path="/projects" element={<ProjectsOverviewPage />} />
            <Route path="/projects/vortex" element={<VortexPage />} />
            <Route path="/projects/codingit" element={<CodingITPage />} />
            <Route path="/projects/gemini" element={<GeminiPage />} />
            <Route path="/projects/lobe" element={<LobePage />} />
            <Route path="/projects/stirling" element={<StirlingPage />} />
            <Route path="/design-philosophy" element={<DesignPhilosophyPage />} />
            <Route path="/smack-sh" element={<SmackShPage />} />
            <Route path="/principles" element={<PrinciplesPage />} />
            <Route path="/architecture" element={<ArchitecturePage />} />
            <Route path="/github-stats" element={<GitHubStatsPage />} />
            <Route path="/fork-strategy" element={<ForkStrategyPage />} />
            <Route path="/builder-log" element={<BuilderLogPage />} />
            <Route path="/retro-mantras" element={<RetroMantrasPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/philosophy" element={<PhilosophyPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
