import { Youtube, Instagram, Linkedin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const TikTokIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const socialProfiles = [
  {
    id: 1,
    platform: 'Instagram',
    username: '@eneskilicarslan6',
    url: 'https://www.instagram.com/eneskilicarslan6/',
    followers: '',
    color: 'from-purple-500 via-pink-500 to-orange-500',
    icon: <Instagram size={32} />,
    image: '../public/ınstagram.jpg' 
  },
  {
    id: 2,
    platform: 'LinkedIn',
    username: 'İlhan Enes Kılıçarslan',
    url: 'https://www.linkedin.com/in/eneskilicarslan6/',
    followers: '',
    color: 'from-blue-600 to-blue-800',
    icon: <Linkedin size={32} />,
    image: '../public/linkedin.png'
  },
  {
    id: 3,
    platform: 'YouTube',
    username: '@enssklcarsln',
    url: 'https://www.youtube.com/@enssklcarsln',
    followers: '',
    color: 'from-red-600 to-red-800',
    icon: <Youtube size={32} />,
    image: '../public/yt.jpg'
  },
  {
    id: 4,
    platform: 'TikTok',
    username: '@enskilicrsln6',
    url: 'https://www.tiktok.com/@enskilicrsln6?lang=tr-TR',
    followers: '',
    color: 'from-black to-slate-800',
    icon: <TikTokIcon size={32} />,
    image: '../public/tiktok.jpeg'
  }
];

const SocialsSection = () => {
  return (
    <section className="py-20 bg-brand-dark relative overflow-hidden">
      <div className="absolute right-0 top-1/2 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Beni <span className="text-brand-primary">Takip Edin</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Yazılım dünyasından ipuçları, ofis hallerimiz ve proje süreçleri için sosyal medya hesaplarımız.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialProfiles.map((profile, index) => (
            <motion.a
              key={profile.id}
              href={profile.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative block rounded-3xl overflow-hidden aspect-[4/5] bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-500"
            >
              <div className="absolute inset-0">
                <img 
                  src={profile.image} 
                  alt={profile.username} 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              <div className="absolute inset-0 p-6 flex flex-col justify-end items-center text-center">                
                <div className={`mb-4 p-4 rounded-full bg-gradient-to-tr ${profile.color} shadow-lg shadow-black/50 transform group-hover:-translate-y-2 transition-transform duration-300`}>
                    <div className="text-white">
                        {profile.icon}
                    </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-brand-primary transition-colors">
                  {profile.username}
                </h3>
                
                <p className="text-sm text-slate-300 mb-6 font-medium">
                  {profile.followers}
                </p>

                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs font-bold text-white uppercase tracking-wider group-hover:bg-white group-hover:text-black transition-all">
                    <span>Takip Et</span>
                    <ExternalLink size={14} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialsSection;