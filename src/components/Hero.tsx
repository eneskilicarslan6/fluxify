import { motion } from 'framer-motion';
import { ArrowRight, Code2, Terminal, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark pt-20">
      
      { }
      { }
      <div className="absolute inset-0 w-full h-full">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-brand-primary/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, 100, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 -right-20 w-80 h-80 bg-brand-secondary/20 rounded-full blur-3xl"
        />
      </div>

      { }
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {   }
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
          <span className="text-sm text-slate-300">Digital Desing & Web Content Agency</span>
        </motion.div>

        {   }
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6"
        >
          Fikirlerinizi <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">
            Koda Dönüştürüyoruz
          </span>
        </motion.h1>

        {   }
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl text-slate-400 max-w-2xl mx-auto mb-10"
        >
          Fluxify ile dijital dünyada akışı yakalayın. Web geliştirme, Python otomasyonları ve özel yazılım çözümleriyle işinizi büyütüyoruz.
        </motion.p>

        {   }
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="/projects"
            className="group px-8 py-4 bg-brand-primary text-brand-dark font-bold rounded-full hover:bg-brand-secondary transition-all flex items-center gap-2"
          >
            Projelerimizi İncele
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            to="/contact"
            className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all"
          >
            İletişime Geç
          </Link>
        </motion.div>

        {   }
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
        >
            <div className="flex items-center gap-2 text-slate-300">
                <Terminal className="w-6 h-6" /> <span>Python</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
                <Code2 className="w-6 h-6" /> <span>Web Develop</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
                <Cpu className="w-6 h-6" /> <span>Anothers</span>
            </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;