import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, Star, GitFork, ExternalLink, Loader2 } from 'lucide-react';


const GITHUB_USERNAME = "eneskilicarslan6";

const ProjectDetail = () => {
  const { name } = useParams();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${name}`)
      .then(async (res) => {
        if (!res.ok) {
           const errData = await res.json();
           throw new Error(errData.message || "Proje bulunamadı");
        }
        return res.json();
      })
      .then(data => {
        setProject(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Hata:", err);
        setError(err.message);
        setLoading(false);
      });
  }, [name]);


  if (loading) return (
    <div className="min-h-screen bg-brand-dark flex items-center justify-center text-brand-primary">
        <Loader2 className="animate-spin w-10 h-10"/>
    </div>
  );

 
  if (error || !project) return (
    <div className="min-h-screen bg-brand-dark text-white flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold text-red-400">Bir Hata Oluştu</h2>
        <p className="text-slate-400">{error === "Not Found" ? "Bu isimde bir proje GitHub hesabında bulunamadı." : error}</p>
        <Link to="/" className="px-6 py-2 bg-brand-primary text-brand-dark rounded-full font-bold">Anasayfaya Dön</Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-brand-dark text-white pt-24 pb-10 px-4">
      <div className="max-w-4xl mx-auto">
        

        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-brand-primary mb-8 transition-colors">
          <ArrowLeft size={20} /> Anasayfaya Dön
        </Link>


        <div className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 mb-8">
            <div className="h-64 bg-gradient-to-r from-brand-dark to-brand-primary/20 relative">
                 <img 
                    src={`https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop&random=${project.id}`} 
                    alt={project.name}
                    className="w-full h-full object-cover opacity-50 mix-blend-overlay"
                 />
                 <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full bg-gradient-to-t from-brand-dark to-transparent">
                    <h1 className="text-3xl md:text-5xl font-bold mb-2 text-white">{project.name.replace(/-/g, " ").toUpperCase()}</h1>
                    <div className="flex gap-4 text-sm text-slate-300">
                        <span className="flex items-center gap-1"><Star size={16} className="text-yellow-500" /> {project.stargazers_count} Yıldız</span>
                        <span className="flex items-center gap-1"><GitFork size={16} /> {project.forks_count} Fork</span>
                    </div>
                 </div>
            </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h2 className="text-xl font-bold mb-4 text-brand-primary">Proje Hakkında</h2>
                    <p className="text-slate-300 leading-relaxed text-lg">
                        {project.description || "Bu proje için GitHub üzerinde bir açıklama girilmemiş."}
                    </p>
                </div>
            </div>


            <div className="space-y-4">
                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h3 className="font-bold mb-4 border-b border-white/10 pb-2 text-white">Proje Bilgileri</h3>
                    <div className="space-y-3 text-sm text-slate-300">
                        <div className="flex justify-between">
                            <span>Dil:</span>
                            <span className="text-brand-primary font-bold">{project.language}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Oluşturulma:</span>
                            <span>{new Date(project.created_at).toLocaleDateString('tr-TR')}</span>
                        </div>
                    </div>
                </div>

                <a 
                    href={project.html_url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-4 bg-brand-primary text-brand-dark font-bold rounded-xl hover:bg-brand-secondary transition-colors"
                >
                    <Github size={20} />
                    GitHub'da İncele
                </a>

                {project.homepage && (
                    <a 
                        href={project.homepage} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-4 bg-white/5 text-white font-bold rounded-xl hover:bg-white/10 border border-white/10 transition-colors"
                    >
                        <ExternalLink size={20} />
                        Canlı Siteye Git
                    </a>
                )}
            </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;