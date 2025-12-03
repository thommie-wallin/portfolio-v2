import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import ProjectsSection from './sections/ProjectsSection';
import AboutSection from './sections/AboutSection';

function App() {

  return (
    <>
      <Navbar logoText="Thommie Wallin" />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
    </>
  )
}

export default App
