import Hero from '../components/Hero';
import ProjectsSection from '../components/ProjectsSection';
import SocialsSection from '../components/SocialsSection';
import  ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import TechStack from '../components/TechStack';
import ServicesSection from '../components/ServicesSection';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <div className="bg-brand-dark min-h-screen flex flex-col">
      <SEO title="Anasayfa" />
      <Hero />
      <TechStack />
      <ServicesSection />
      <ProjectsSection limit={6} />
      <section className="py-20 bg-[#0B1120] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Sıkça <span className="text-brand-primary">Sorulan </span> <span className="text-3xl font-bold text-white mb-8">Sorular?</span> </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <a href="#" className="block p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-all border border-white/10">
                    <span className="text-brand-primary text-xs font-bold uppercase">Python</span>
                    <h3 className="text-lg font-bold text-white mt-2 mb-2">Python  İle Neler Yapabilirsiniz?</h3>
                    <p className="text-slate-400 text-sm">BOT, otomasyon gibi python ile istenilen çoğu şeyi yapabiliriz.</p>
                </a>
                <a href="#" className="block p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-all border border-white/10">
                    <span className="text-blue-400 text-xs font-bold uppercase">Web development</span>
                    <h3 className="text-lg font-bold text-white mt-2 mb-2">Web Sitenleriniz Modern mi?</h3>
                    <p className="text-slate-400 text-sm">Web sitelerimizi react ile kuruyor olup hem modern hemde hızlı olmasına dikkat ederiz. Bu sayede modern ve kaliteli web sitelerimizi yaparız.</p>
                </a>
                <a href="#" className="block p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-all border border-white/10">
                    <span className="text-green-400 text-xs font-bold uppercase">Destek</span>
                    <h3 className="text-lg font-bold text-white mt-2 mb-2">Destek ve Bilgi Almak İçin Ne Yapmalıyız?</h3>
                    <p className="text-slate-400 text-sm">İletişim kısmındaki seçeneklerden bize ulaşabilirsiniz.</p>
                </a>
            </div>
        </div>
      </section>
      <SocialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;