import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import AutoMAXEvent from "../components/AutoMAXEvent";
import PastEvents from "../components/PastEvents";
import Achievements from "../components/Achievements";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingActionButton from "../components/FloatingActionButton";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0F1B35]">
      <Navigation />
      <Hero />
      <div id="about">
        <AboutUs />
      </div>
      <AutoMAXEvent />
      <PastEvents />
      <div id="achievements">
        <Achievements />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <Testimonials />
      <Gallery />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
