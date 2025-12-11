import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import ProjectDetail from './pages/ProjectDetail'; 

function App() {
  return (
    <div className="bg-brand-dark min-h-screen text-white font-sans selection:bg-brand-primary selection:text-brand-dark">
      <ScrollToTop />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:name" element={<ProjectDetail />} />        
      </Routes>
    </div>
  )
}

export default App;