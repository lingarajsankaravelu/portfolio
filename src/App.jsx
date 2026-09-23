import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
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
        <Education />
      </main>
      <Contact />
    </div>
  );
}

export default App;
