import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import ProjectsSection from './sections/ProjectsSection';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';

function App() {

  return (
    <>
      <Navbar logoText="Thommie Wallin" />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </>
  )
}

export default App
