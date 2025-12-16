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
    image: 'https://instagram.fesb7-1.fna.fbcdn.net/v/t51.2885-19/517579468_18317550196235258_1355293022315147132_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fesb7-1.fna.fbcdn.net&_nc_cat=102&_nc_oc=Q6cZ2QEVw7z4hmZQBSqklqyPXGQmV8tZ1N5qw5HpfP1sMwPVxW1eo5LexVilnWhGL3sk8mY&_nc_ohc=lal1EINH-hQQ7kNvwGJNp7Q&_nc_gid=6EJ5UaniK_ZERG6UTrtxdw&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AflngwwF86r1lhTDgl-2TCOU2yIPh50Llskl6Lrkm6mxww&oe=69473F15&_nc_sid=7a9f4b' 
  },
  {
    id: 2,
    platform: 'LinkedIn',
    username: 'İlhan Enes Kılıçarslan',
    url: 'https://www.linkedin.com/in/eneskilicarslan6/',
    followers: '',
    color: 'from-blue-600 to-blue-800',
    icon: <Linkedin size={32} />,
    image: 'https://media.licdn.com/dms/image/v2/D5603AQFEB9DSgkpQkw/profile-displayphoto-scale_400_400/B56Zgiza0rHQAg-/0/1752930563563?e=1767225600&v=beta&t=A_A85tr7Yh-YYoortFUDRSZ0P4XlXye10I4qV516NjI'
  },
  {
    id: 3,
    platform: 'YouTube',
    username: '@enssklcarsln',
    url: 'https://www.youtube.com/@enssklcarsln',
    followers: '',
    color: 'from-red-600 to-red-800',
    icon: <Youtube size={32} />,
    image: 'https://yt3.ggpht.com/uYXSWddKkqUBgi1oqnvSkwcUu4icdRFNvqLN8ETXKn4qVykrEu_cSBSzDRTIyKydi6J25JXl=s600-c-k-c0x00ffffff-no-rj-rp-mo'
  },
  {
    id: 4,
    platform: 'TikTok',
    username: '@enskilicrsln6',
    url: 'https://www.tiktok.com/@enskilicrsln6?lang=tr-TR',
    followers: '',
    color: 'from-black to-slate-800',
    icon: <TikTokIcon size={32} />,
    image: 'https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/d92f354cb6b253e2d821ea68d310dc93~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=c823351e&x-expires=1766059200&x-signature=XtgokkMJFjf0DLWKwBak22iWmAg%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1'
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