import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-brand-dark to-black relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Harika Bir Fikriniz mi Var?
          <br />
          <span className="text-brand-primary">Gelin Birlikte İnşa Edelim.</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto"
        >
          İster yeni bir girişim, ister kurumsal bir otomasyon projesi olsun. Projelerinizi yapmaya hazırız.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link 
            to="/contact"
            className="px-8 py-4 bg-brand-primary text-brand-dark font-bold rounded-full hover:bg-white transition-all flex items-center gap-2 shadow-lg shadow-brand-primary/25"
          >
            Projemi Başlat <ArrowRight size={20} />
          </Link>
          
          <a 
            href="mailto:info@fluxify.agency"
            className="px-8 py-4 bg-white/5 text-white font-bold rounded-full hover:bg-white/10 border border-white/10 transition-all flex items-center gap-2"
          >
            <Mail size={20} /> E-Posta Gönder
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;