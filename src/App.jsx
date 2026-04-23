import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services.jsx';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import TestimonialCard from './components/Testimonials.jsx';
import Contact from './components/Contact';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Portfolio />
      <TestimonialCard />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;