import { motion } from 'framer-motion';
import { Bot, Globe, Smartphone, BarChart3, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: "Python",
    description: "İş süreçlerinizi hızlandıran, verileri analiz eden ve tekrarlayan işleri yok eden akıllı bot yazılımları ve otomasyon sistemler.",
    icon: <Bot className="w-8 h-8" />,
    color: "bg-yellow-500/10 text-yellow-500"
  },
  {
    id: 2,
    title: "Modern Web Geliştirme",
    description: "React ve TypeScript ile geliştirilen  hızlı ve etkileyici kurumsal web siteleri.",
    icon: <Globe className="w-8 h-8" />,
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    id: 3,
    title: "Mobil Uygulama",
    description: "Fikirlerinizi iOS ve Android dünyasına taşıyan kullanıcı dostu mobil uygulamalar.",
    icon: <Smartphone className="w-8 h-8" />,
    color: "bg-purple-500/10 text-purple-500"
  },
  {
    id: 4,
    title: "Social Media",
    description: "Markanızı dijital dünyada görünür kılan sosyal medya hizmetleri.",
    icon: <BarChart3 className="w-8 h-8" />,
    color: "bg-green-500/10 text-green-500"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Neler <span className="text-brand-primary">Yapıyoruz?</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Sadece kod yazmıyoruz işinizi büyütecek dijital stratejiler ve çözümler üretiyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-brand-primary transition-colors">
                Teklif Al <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;