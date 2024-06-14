import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/about/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import About from "./components/about/About";
import Projects from "./components/projects/projects";
import ContactForm from "./components/contactform/ContactForm";

const App = () => {
  
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
      <section id="About"><Parallax type="about"/></section>
      <section>
        <About/>
      </section>
      <section id="Projects"><Parallax type="projects"/></section>
      <section>
        <Projects/>
      </section>
    <section id="Contact"> 
        <ContactForm />
    </section>
  </div>;
};

export default App;
