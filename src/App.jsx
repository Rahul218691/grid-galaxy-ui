
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Index from "./pages/Index";
import Truckers from "./pages/Truckers";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex min-h-screen w-full overflow-hidden">
            <Sidebar collapsed={sidebarCollapsed} toggleCollapse={toggleSidebar} />
            <main className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'ml-0 md:ml-20' : 'ml-0 md:ml-64'}`}>
              <div className="flex items-center justify-end py-4 px-6 border-b">
                <div className="flex items-center">
                  <span className="text-sm text-muted-foreground mr-4">
                    Hello, User
                  </span>
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <span className="text-sm font-medium">U</span>
                  </div>
                </div>
              </div>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/truckers" element={<Truckers />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
