import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetail from './pages/ProjectDetail';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress'; 
import SecurityAlert from './components/SecurityAlert';

function App() {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  useEffect(() => {
    const triggerAlert = () => {
      setIsAlertOpen(true);
      setTimeout(() => {
        setIsAlertOpen(false);
      }, 3000);
    };
    
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      triggerAlert();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && e.key === 'I') || 
        (e.ctrlKey && e.shiftKey && e.key === 'J') || 
        (e.ctrlKey && e.key === 'U')
      ) {
        e.preventDefault();
        triggerAlert();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="bg-brand-dark min-h-screen text-white font-sans selection:bg-brand-primary selection:text-brand-dark">
      <SecurityAlert isOpen={isAlertOpen} />

      <ScrollToTop />
      <ScrollProgress />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/project/:name" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App;