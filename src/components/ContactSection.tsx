import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Github } from 'lucide-react';

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
}


const GITHUB_USERNAME = "eneskilicarslan6"; 

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("Hepsi");

  useEffect(() => {
    const fetchGithubRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`);
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
            liveUrl: repo.homepage || undefined
          }));

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

  const filteredProjects = activeCategory === "Hepsi"
    ? projects
    : projects.filter(p => p.category === activeCategory);

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
            Seçilmiş <span className="text-brand-primary">Projelerimiz</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Fluxify olarak geliştirdiğimiz, işlevselliği ve estetiği birleştiren çözümlerden bazıları.
          </p>
        </div>

        {loading && <div className="text-center text-brand-primary"><Loader2 className="animate-spin inline w-8 h-8"/></div>}
        
        {error && <div className="text-center text-red-400">{error}</div>}

        {!loading && !error && (
          <>
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

            <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </AnimatePresence>
            </motion.div>
            
            <div className="mt-16 text-center">
                <a 
                    href={`https://github.com/${GITHUB_USERNAME}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors border border-white/10"
                >
                    <Github className="w-5 h-5" />
                    Tüm Repoları GitHub'da İncele
                </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;