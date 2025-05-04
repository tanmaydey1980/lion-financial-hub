
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "./layouts/MainLayout";

// Pages
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import ProfilesPage from "./pages/ProfilesPage";
import WorkWithUsPage from "./pages/WorkWithUsPage";
import SustainabilityPage from "./pages/SustainabilityPage";
import LionsPerspectivePage from "./pages/LionsPerspectivePage";
import NewsroomPage from "./pages/NewsroomPage";
import CustomerSupportPage from "./pages/CustomerSupportPage";
import AboutUsPage from "./pages/AboutUsPage";
import ShopPage from "./pages/ShopPage";
import FileClaim from "./pages/FileClaim";
import ClientLoginPage from "./pages/ClientLoginPage";

// Blog
import BlogPostPage from "./pages/BlogPostPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/profiles" element={<ProfilesPage />} />
            <Route path="/work-with-us" element={<WorkWithUsPage />} />
            <Route path="/sustainability" element={<SustainabilityPage />} />
            <Route path="/lions-perspective" element={<LionsPerspectivePage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/newsroom" element={<NewsroomPage />} />
            <Route path="/customer-support" element={<CustomerSupportPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/file-claim" element={<FileClaim />} />
            <Route path="/client-login" element={<ClientLoginPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
