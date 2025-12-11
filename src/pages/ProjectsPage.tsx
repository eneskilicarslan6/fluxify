import ProjectsSection from '../components/ProjectsSection';
import { useEffect } from 'react';

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-brand-dark">
      <ProjectsSection title="Tüm Projelerimiz" />
    </div>
  );
};

export default ProjectsPage;