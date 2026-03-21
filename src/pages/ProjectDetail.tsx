import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, Star, GitFork, ExternalLink, Loader2, Code, Layers, Calendar } from 'lucide-react';

const GITHUB_USERNAME = "eneskilicarslan6";

const ProjectDetail = () => {
  const { name } = useParams();
  const [project, setProject] = useState<any>(null);
  const [languages, setLanguages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [imgSrc, setImgSrc] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const repoRes = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${name}`);
        if (!repoRes.ok) throw new Error("Proje bulunamadı");
        const repoData = await repoRes.json();
        setProject(repoData);
        if (repoData.name) {
            setImgSrc(`/projects/${repoData.name}.png`);
        }

        const langRes = await fetch(repoData.languages_url);
        const langData = await langRes.json();
        const totalBytes = Object.values(langData).reduce((a: any, b: any) => a + b, 0) as number;
        const langStats = Object.keys(langData).map(key => ({
            name: key,
            percentage: ((langData[key] as number) / totalBytes * 100).toFixed(1),
            color: getColorForLanguage(key)
        }));
        
        setLanguages(langStats);
        setLoading(false);

      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    if (name) fetchData();
  }, [name]);

  const getColorForLanguage = (lang: string) => {
    const colors: {[key: string]: string} = {
        Python: '#3572A5', TypeScript: '#3178C6', JavaScript: '#F7DF1E', 
        HTML: '#E34C26', CSS: '#563D7C', Vue: '#41B883', Shell: '#89e051'
    };
    return colors[lang] || '#00D1FF';
  };

  const handleImageError = () => {
        const lowercaseSrc = `/projects/${project?.name?.toLowerCase()}.png`;
        if (project?.name && imgSrc !== lowercaseSrc) {
            setImgSrc(lowercaseSrc);
            return;
        }
    setImgSrc(`https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop&random=${project?.id}`);
  };

  if (loading) return <div className="min-h-screen bg-brand-dark flex items-center justify-center text-brand-primary"><Loader2 className="animate-spin w-10 h-10"/></div>;
  if (error) return <div className="min-h-screen bg-brand-dark text-white flex justify-center items-center">{error}</div>;

  return (
    <div className="min-h-screen bg-brand-dark text-white pt-24 pb-10 px-4">
      <div className="max-w-5xl mx-auto">
        <Link to="/projects" className="inline-flex items-center gap-2 text-slate-400 hover:text-brand-primary mb-6 transition-colors">
          <ArrowLeft size={20} /> Projelere Dön
        </Link>

        <div className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 mb-10 h-[300px] md:h-[400px] group">
            <img 
                src={imgSrc}
                onError={handleImageError}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent" />
            
            <div className="absolute bottom-0 left-0 p-8 w-full">
                <h1 className="text-4xl md:text-6xl font-bold mb-3 text-white tracking-tight">{project.name.replace(/-/g, " ").toUpperCase()}</h1>
                <div className="flex flex-wrap gap-4 text-sm font-medium">
                    <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full text-yellow-400 backdrop-blur-md">
                        <Star size={16} fill="currentColor" /> {project.stargazers_count} Yıldız
                    </span>
                    <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full text-blue-400 backdrop-blur-md">
                        <GitFork size={16} /> {project.forks_count} Fork
                    </span>
                    <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full text-slate-300 backdrop-blur-md">
                        <Calendar size={16} /> {new Date(project.created_at).toLocaleDateString('tr-TR')}
                    </span>
                </div>
            </div>
        </div>        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-white">
                        <Code className="text-brand-primary" /> Proje Hakkında
                    </h2>
                    <p className="text-slate-300 leading-relaxed text-lg">
                        {project.description || "Bu proje için özel bir açıklama girilmemiş."}
                    </p>
                </div>
                {languages.length > 0 && (
                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
                            <Layers className="text-brand-primary" /> Kullanılan Teknolojiler
                        </h2>
                        <div className="flex h-4 rounded-full overflow-hidden w-full mb-4 bg-brand-dark border border-white/5">
                            {languages.map((lang) => (
                                <div key={lang.name} style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }} className="h-full" title={`${lang.name}: %${lang.percentage}`} />
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-4">
                            {languages.map((lang) => (
                                <div key={lang.name} className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: lang.color }} />
                                    <span className="text-slate-300 font-medium">{lang.name}</span>
                                    <span className="text-slate-500 text-sm">%{lang.percentage}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <div className="space-y-6">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 sticky top-24">
                    <h3 className="font-bold mb-4 text-white">Kaynak Kodlar</h3>
                    <div className="space-y-3">
                        <a href={project.html_url} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-4 bg-brand-primary text-brand-dark font-bold rounded-xl hover:bg-brand-secondary transition-colors">
                            <Github size={20} /> GitHub'da İncele
                        </a>
                        {project.homepage && (
                            <a href={project.homepage} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-4 bg-white/5 text-white font-bold rounded-xl hover:bg-white/10 border border-white/10 transition-colors">
                                <ExternalLink size={20} /> Canlı Siteyi Gör
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;