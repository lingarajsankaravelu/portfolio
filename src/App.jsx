import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme, toggle } = useTheme();

  return (
    <div className="min-h-screen">
      <Nav theme={theme} toggle={toggle} />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Certifications />
        <Education />
      </main>
      <Contact />
    </div>
  );
}

export default App;
