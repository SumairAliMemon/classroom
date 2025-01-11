import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppSidebar } from '@/components/AppSidebar';
import Dashboard from '@/pages/Dashboard';
import Assignments from '@/pages/Assignments';
import Profile from '@/pages/Profile';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <AppSidebar />
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;