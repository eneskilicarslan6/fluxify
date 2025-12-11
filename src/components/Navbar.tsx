import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Anasayfa', path: '/' },
    { name: 'Projeler', path: '/projects' },
    { name: 'Hakkımızda', path: '/about' },
    { name: 'İletişim', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 top-0 left-0 border-b border-white/10 bg-brand-dark/80 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-6 h-6 shadow-brand-primary/20 group-hover:shadow-brand-primary/40 transition-all">
              <img 
                src={"/logo.svg"} 
                alt="Fluxify Logo" 
              />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white group-hover:text-brand-primary transition-colors">
              FLUXIFY
            </span>
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative ${
                    isActive(item.path) 
                      ? 'text-brand-primary' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <motion.div 
                        layoutId="active-nav"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-primary mx-3" 
                    />
                  )}
                </Link>
              ))}
              <Link 
                to="/contact"
                className="bg-brand-primary text-brand-dark px-5 py-2 rounded-full font-bold text-sm hover:bg-brand-secondary hover:shadow-lg hover:shadow-brand-primary/25 transition-all transform hover:-translate-y-0.5"
              >
                Teklif Al
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-dark border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-medium border-l-2 transition-all ${
                    isActive(item.path)
                      ? 'border-brand-primary text-brand-primary bg-brand-primary/5'
                      : 'border-transparent text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-white/10">
                <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center bg-brand-primary text-brand-dark px-5 py-3 rounded-lg font-bold hover:bg-brand-secondary transition-colors"
                >
                    Teklif Al
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;