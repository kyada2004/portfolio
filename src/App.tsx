import { Toaster as RadixToaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Create a single query client instance
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* Toast Notifications */}
      <RadixToaster />
      <SonnerToaster />

      {/* Router with GitHub Pages base path */}
      <BrowserRouter basename="/portfolio">
        <div className="flex flex-col min-h-screen">
          <Routes>
            {/* Pages with Navbar and Footer */}
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <main className="flex-grow">
                    <Index />
                  </main>
                  <Footer />
                </>
              }
            />
            
            {/* Admin page (no Navbar/Footer) */}
            <Route path="/admin" element={<Admin />} />

            {/* NotFound page */}
            <Route
              path="*"
              element={
                <>
                  <Navbar />
                  <main className="flex-grow">
                    <NotFound />
                  </main>
                  <Footer />
                </>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
