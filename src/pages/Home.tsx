import Hero from '../components/Hero';
import ProjectsSection from '../components/ProjectsSection';
import SocialsSection from '../components/SocialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-brand-dark min-h-screen flex flex-col">
      <Hero />
      <ProjectsSection limit={6} />
      <SocialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;