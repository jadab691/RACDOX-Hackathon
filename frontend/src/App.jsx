import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeavenStudio from './components/HeavenStudio';
import AboutSection from './components/AboutSection';
import Collections from './components/Collections';
import DesignYourSpace from './components/DesignYourSpace';
import CraftSection from './components/CraftSection';
import BespokeJourney from './components/BespokeJourney';
import WhyHeaven from './components/WhyHeaven';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full overflow-x-hidden bg-white">
      <Navbar />
      <Hero />
      <div id="studio"><HeavenStudio /></div>
      <AboutSection />
      <div id="collections"><Collections /></div>
      <div id="design-your-space"><DesignYourSpace /></div>
      <div id="craft"><CraftSection /></div>
      <div id="bespoke-journey"><BespokeJourney /></div>
      <div id="why-heaven"><WhyHeaven /></div>
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
