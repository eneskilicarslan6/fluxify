import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
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
}

interface ProjectCardProps {
  project: Project;
}


const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-brand-primary/50 transition-all flex flex-col h-full"
    >
      <Link to={`/project/${project.repoName}`} className="block relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors z-10" />
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 z-20 bg-brand-dark/80 backdrop-blur px-3 py-1 rounded-full border border-white/10">
            <span className="text-xs font-bold text-brand-primary uppercase">
                {project.category}
            </span>
        </div>
      </Link>

      <div className="p-6 flex flex-col flex-grow">
        <Link to={`/project/${project.repoName}`}>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-primary transition-colors">
            {project.title}
            </h3>
        </Link>
        
        <p className="text-slate-400 text-sm mb-4 line-clamp-3 flex-grow">
          {project.description}
        </p>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
            <Link 
                to={`/project/${project.repoName}`}
                className="text-sm font-medium text-white hover:text-brand-primary flex items-center gap-1"
            >
                Detayları Gör <ArrowRight size={16} />
            </Link>

            <div className="flex gap-3">
                {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-brand-primary hover:text-brand-dark transition-colors">
                        <Github size={18} />
                    </a>
                )}
                {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-brand-primary hover:text-brand-dark transition-colors">
                        <ExternalLink size={18} />
                    </a>
                )}
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;