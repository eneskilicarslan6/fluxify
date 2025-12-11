import { motion } from 'framer-motion';
import { Code2, Database, Layout, Terminal } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Python', level: 95, color: 'bg-yellow-500' },
    { name: 'Web Codding & Frontend', level: 90, color: 'bg-blue-400' },
    { name: 'Social Media Design', level: 85, color: 'bg-green-500' },
    { name: 'Backend & API', level: 80, color: 'bg-purple-500' },
  ];

  return (
    <div className="pt-20 min-h-screen bg-brand-dark text-white">
      <div className="relative py-20 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Biz <span className="text-brand-primary">Kimiz?</span>
          </motion.h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Teknolojiyi sanatla birleştiren, kodlara ruh katan dijital çözüm ortağınız.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Terminal className="text-brand-primary" />
              <span className="text-white">Kodlamaya Olan Tutkumuz</span>
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Fluxify olarak yolculuğumuz, basit bir "Merhaba Dünya" çıktısından çok daha fazlasıydı. Karmaşık problemleri Python'un gücüyle çözmek ve React'in esnekliğiyle estetik arayüzler tasarlamak bizim ana odağımız.
              </p>
              <p>
                Ajansımız, statik web sitelerinden kapsamlı veri analizi botlarına kadar geniş bir yelpazede hizmet verir. Bizim için her proje, çözülmesi gereken yeni bir bulmaca ve yaratılması gereken yeni bir eserdir.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <Code2 className="mb-2 text-brand-primary" />
                    <h3 className="font-bold text-white">Temiz Kod</h3>
                    <p className="text-xs text-slate-500">Sürdürülebilir ve okunabilir yapı.</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <Layout className="mb-2 text-brand-primary" />
                    <h3 className="font-bold text-white">Modern UI</h3>
                    <p className="text-xs text-slate-500">Kullanıcı dostu arayüzler.</p>
                </div>
              </div>
            </div>
          </motion.div>


          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 p-8 rounded-2xl border border-white/10"
          >
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                <Database className="text-brand-primary" />
                Teknik Yetkinlikler
            </h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-slate-300">{skill.name}</span>
                    <span className="text-slate-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className={`h-full ${skill.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default About;