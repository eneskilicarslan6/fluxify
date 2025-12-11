import { Mail, MessageCircle, MapPin, Clock, CheckCircle2, Github, Linkedin, Instagram, Youtube, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const TikTokIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Contact = () => {
  return (
    <div className="pt-24 pb-10 min-h-screen bg-brand-dark text-white px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4">
            İletişime <span className="text-brand-primary">Geç</span>
          </motion.h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Yeni bir proje fikriniz mi var veya sadece tanışmak mı istiyorsunuz? 
            Aşağıdaki kanallardan bana ulaşabilirsiniz.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full blur-2xl -mr-10 -mt-10" />
            <div className="relative z-10">
              <div className="w-24 h-24 rounded-2xl overflow-hidden mb-6 border-2 border-brand-primary/20 shadow-lg shadow-brand-primary/10">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D5603AQFEB9DSgkpQkw/profile-displayphoto-scale_400_400/B56Zgiza0rHQAg-/0/1752930563563?e=1767225600&v=beta&t=A_A85tr7Yh-YYoortFUDRSZ0P4XlXye10I4qV516NjI" 
                  alt="Profil" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-white mb-1">Enes Kılıçarslan</h2>
              <p className="text-brand-primary font-medium mb-6">Full Stack Developer & Python Uzmanı</p>
              <div className="space-y-4 mb-8 text-slate-300 leading-relaxed text-sm">
                <p>
                  Merhaba! Ben dijital çözümler üreten bir yazılımcıyım. 
                  Python otomasyonları, modern web arayüzleri ve mobil uygulamalar konusunda uzmanlaşmış durumdayım.
                </p>
                <p>
                  Karmaşık problemleri basit kodlara dönüştürmeyi severim.
                </p>
              </div>
              <div className="bg-brand-primary/10 border border-brand-primary/20 rounded-xl p-4 flex items-center gap-3">
                <div className="relative">
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <CheckCircle2 className="text-green-500" />
                </div>
                <div>
                    <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Durum</p>
                    <p className="text-white font-bold text-sm">Yeni Projelere Açığım</p>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.a 
                    href="mailto:info@fluxify.agency"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-primary/50 p-6 rounded-2xl transition-all cursor-pointer">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                        <Mail size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">Mail Gönder</h3>
                    <p className="text-slate-400 text-sm mb-4">Projelerini detaylıca anlat.</p>
                    <span className="text-brand-primary text-sm font-bold flex items-center gap-2">
                        eneskilicarslan6@gmail.com
                    </span>
                </motion.a>
                <motion.a 
                    href="https://wa.me/905435237760"
                    target="_blank"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-primary/50 p-6 rounded-2xl transition-all cursor-pointer"
                >
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400 mb-4 group-hover:scale-110 transition-transform">
                        <MessageCircle size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">WhatsApp</h3>
                    <p className="text-slate-400 text-sm mb-4">Hızlı iletişim ve sohbet için.</p>
                    <span className="text-brand-primary text-sm font-bold flex items-center gap-2">
                        Mesaj Gönder
                    </span>
                </motion.a>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="group bg-white/5 border border-white/10 p-6 rounded-2xl transition-all">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 mb-4">
                        <MapPin size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">Konum</h3>
                    <p className="text-slate-400 text-sm">Tokat / Türkiye</p>
                    <p className="text-slate-500 text-xs mt-1">(Remote olarak tüm dünyaya hizmet veriyorum)</p>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="group bg-white/5 border border-white/10 p-6 rounded-2xl transition-all">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-400 mb-4">
                        <Clock size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">Çalışma Saatleri</h3>
                    <p className="text-slate-400 text-sm">Hafta İçi: 09:00 - 18:00</p>
                    <p className="text-slate-500 text-xs mt-1">Acil durumlarda 7/24 mail atabilirsiniz.</p>
                </motion.div>
            </div>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"><div>
                    <h3 className="text-xl font-bold text-white mb-1">Sosyal Medya</h3>
                    <p className="text-slate-400 text-sm">Güncel paylaşımlarımı takip etmeyi unutmayın.</p>
                </div>
                <div className="flex gap-3">
                     <a href="https://github.com/eneskilicarslan6" target="_blank" className="p-3 bg-brand-dark hover:bg-brand-primary hover:text-brand-dark rounded-full border border-white/10 transition-all text-white"><Github size={20} /></a>
                     <a href="https://www.linkedin.com/in/eneskilicarslan6/" target="_blank" className="p-3 bg-brand-dark hover:bg-brand-primary hover:text-brand-dark rounded-full border border-white/10 transition-all text-white"><Linkedin size={20} /></a>
                     <a href="https://www.instagram.com/eneskilicarslan6/" target="_blank" className="p-3 bg-brand-dark hover:bg-brand-primary hover:text-brand-dark rounded-full border border-white/10 transition-all text-white"><Instagram size={20} /></a>
                     <a href="https://www.youtube.com/@enssklcarsln" target="_blank" className="p-3 bg-brand-dark hover:bg-brand-primary hover:text-brand-dark rounded-full border border-white/10 transition-all text-white"><Youtube size={20} /></a>
                     <a href="https://www.tiktok.com/@enskilicrsln6?lang=tr-TR" target="_blank" className="p-3 bg-brand-dark hover:bg-brand-primary hover:text-brand-dark rounded-full border border-white/10 transition-all text-white"><TikTokIcon size={20} /></a>
                </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;