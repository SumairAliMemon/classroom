import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from '@/components/AppSidebar';
import Dashboard from '@/pages/Dashboard';
import Assignments from '@/pages/Assignments';
import Profile from '@/pages/Profile';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <SidebarProvider>
            <div className="flex min-h-screen w-full">
              <AppSidebar />
              <main className="flex-1 overflow-x-hidden">
                <div className="container p-4">
                  <SidebarTrigger className="mb-4" />
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/assignments" element={<Assignments />} />
                    <Route path="/profile" element={<Profile />} />
                  </Routes>
                </div>
              </main>
            </div>
          </SidebarProvider>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;