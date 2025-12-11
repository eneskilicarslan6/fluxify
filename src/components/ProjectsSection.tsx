import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';


interface Project {
  id: number;
  title: string;
  repoName: string;
  description: string;
  category: string;
  imageUrl: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  stars: number;
  updatedAt: string;
}


interface ProjectsSectionProps {
  limit?: number; 
  title?: string;
}


const GITHUB_USERNAME = "eneskilicarslan6"; 

const ProjectsSection = ({ limit, title }: ProjectsSectionProps) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("Hepsi");

  useEffect(() => {
    const fetchGithubRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=100`);
        
        if (!response.ok) throw new Error("GitHub'a bağlanılamadı");
        const data = await response.json();

        const formattedProjects: Project[] = data
          .filter((repo: any) => !repo.fork) 
          .map((repo: any) => ({
            id: repo.id,
            title: repo.name.replace(/-/g, " ").toUpperCase(),
            repoName: repo.name,
            description: repo.description || "Açıklama girilmemiş.",
            category: repo.language || "Diğer", 
            imageUrl: `https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop&random=${repo.id}`,
            technologies: [repo.language || "Code"], 
            githubUrl: repo.html_url,
            liveUrl: repo.homepage || undefined,
            stars: repo.stargazers_count,
            updatedAt: repo.pushed_at
          }));


        formattedProjects.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());

        setProjects(formattedProjects);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Projeler yüklenirken hata oluştu.");
        setLoading(false);
      }
    };

    fetchGithubRepos();
  }, []);

  const categories = ["Hepsi", ...new Set(projects.map(p => p.category))];


  let displayedProjects = activeCategory === "Hepsi"
    ? projects
    : projects.filter(p => p.category === activeCategory);


  if (limit && activeCategory === "Hepsi") {
    displayedProjects = displayedProjects.slice(0, limit);
  }

  return (
    <section className="py-20 px-4 bg-brand-dark" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            {title || (limit ? "Seçilmiş" : "Tüm")} <span className="text-brand-primary">Projelerimiz</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {limit 
              ? "En popüler ve güncel açık kaynak projelerimizden bazıları." 
              : "GitHub üzerindeki tüm açık kaynak kodlu çalışmalarımız."}
          </p>
        </div>

        {loading && <div className="text-center text-brand-primary"><Loader2 className="animate-spin inline w-8 h-8"/></div>}
        
        {error && <div className="text-center text-red-400">{error}</div>}

        {!loading && !error && (
          <>
            {!limit && (
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((cat) => (
                    <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full border transition-all ${
                        activeCategory === cat ? 'bg-brand-primary text-brand-dark' : 'text-slate-400 border-white/10'
                    }`}
                    >
                    {cat}
                    </button>
                ))}
                </div>
            )}

            {/* Kartlar */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {displayedProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </AnimatePresence>
            </motion.div>
            
            {limit && (
                <div className="mt-16 text-center">
                    <Link 
                        to="/projects"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-brand-primary hover:text-brand-dark text-white rounded-full transition-all border border-white/10 font-bold"
                    >
                        Tüm Projeleri İncele <ArrowRight size={20} />
                    </Link>
                </div>
            )}
            
            {!limit && (
                <div className="mt-16 text-center">
                    <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                        <Github size={20} /> GitHub Profilime Git
                    </a>
                </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;