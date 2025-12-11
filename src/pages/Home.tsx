import Hero from '../components/Hero';
import ProjectsSection from '../components/ProjectsSection';
import SocialsSection from '../components/SocialsSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-brand-dark min-h-screen flex flex-col">
      <Hero />
      <ProjectsSection limit={6} />
      <SocialsSection />
      <Footer />
    </div>
  );
};

export default Home;