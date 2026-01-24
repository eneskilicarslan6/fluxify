import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-brand-dark flex flex-col items-center justify-center text-center px-4">
      <div className="w-24 h-24 bg-red-500/10 rounded-full flex items-center justify-center mb-8 animate-pulse">
        <AlertTriangle className="w-12 h-12 text-red-500" />
      </div>
      <h1 className="text-7xl font-bold text-white mb-2">404</h1>
      <h2 className="text-2xl font-bold text-slate-300 mb-6">Ops! Aradığınız sayfa uzay boşluğunda kayboldu.</h2>      
      <p className="text-slate-400 max-w-md mb-10">
        Görünüşe göre gitmek istediğiniz yer silinmiş, taşınmış veya hiç var olmamış.
      </p>
      <Link 
        to="/" 
        className="flex items-center gap-2 px-8 py-4 bg-brand-primary text-brand-dark font-bold rounded-full hover:bg-white transition-all shadow-lg shadow-brand-primary/20"
      >
        <Home size={20} />
        Anasayfaya Dön
      </Link>
    </div>
  );
};

export default NotFound;