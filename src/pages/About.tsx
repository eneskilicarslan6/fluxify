import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Terminal } from 'lucide-react';
import SEO from '../components/SEO';

const GITHUB_USERNAME = "eneskilicarslan6";

const About = () => {
  const [stats, setStats] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const calculateStats = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`);
        const repos = await res.json();
        
        const languageCounts: { [key: string]: number } = {};
        let totalReposWithLanguage = 0;

        repos.forEach((repo: any) => {
          if (repo.language) {
            languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
            totalReposWithLanguage++;
          }
        });

        const calculatedStats = Object.keys(languageCounts)
          .map(lang => ({
            name: lang,
            percentage: Math.round((languageCounts[lang] / totalReposWithLanguage) * 100),
            count: languageCounts[lang]
          }))
          .sort((a, b) => b.percentage - a.percentage) 
          .slice(0, 5); 

        setStats(calculatedStats);
        setLoading(false);
      } catch (error) {
        console.error("GitHub verileri alınamadı", error);
        setLoading(false);
      }
    };

    calculateStats();
  }, []);

  return (
    <div className="pt-24 pb-10 min-h-screen bg-brand-dark text-white px-4">
      <SEO title="Hakkımızda" />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Biz <span className="text-brand-primary">Kimiz?</span>
          </motion.h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Teknolojiyi sanatla birleştiren, kodlara ruh katan dijital çözüm ortağınız.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
               <Terminal className="text-brand-primary" /> Kodlamaya Olan Tutkumuz
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Fluxify olarak yolculuğumuz basit bir "Merhaba Dünya" çıktısından çok daha fazlasıydı. 
              Karmaşık problemleri çözmek ve kullanıcı dostu arayüzler tasarlamak bizim ana odağımız.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <Code2 className="text-brand-primary mb-2" />
                    <h3 className="font-bold">Temiz Kod</h3>
                    <p className="text-xs text-slate-400">Sürdürülebilir mimari.</p>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <Layout className="text-brand-primary mb-2" />
                    <h3 className="font-bold">Modern UI</h3>
                    <p className="text-xs text-slate-400">Estetik tasarımlar.</p>
                </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="bg-white/5 border border-white/10 rounded-3xl p-8"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Database className="text-brand-primary" /> GitHub Teknik Analizim
            </h3>
            
            {loading ? (
                <p className="text-slate-400">Veriler analiz ediliyor...</p>
            ) : (
                <div className="space-y-6">
                    {stats.map((stat) => (
                        <div key={stat.name}>
                            <div className="flex justify-between mb-2 text-sm font-medium">
                                <span>{stat.name}</span>
                                <span className="text-brand-primary">
                                    %{stat.percentage} 
                                    <span className="text-slate-500 text-xs ml-1">({stat.count} Repo)</span>
                                </span>
                            </div>
                            <div className="w-full bg-brand-dark rounded-full h-3 overflow-hidden border border-white/5">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: `${stat.percentage}%` }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    className={`h-full rounded-full ${
                                        stat.name === 'Python' ? 'bg-yellow-500' :
                                        stat.name === 'TypeScript' ? 'bg-blue-500' :
                                        'bg-brand-primary'
                                    }`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default About;