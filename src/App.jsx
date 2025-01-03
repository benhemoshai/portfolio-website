import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume/Resume';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Resume/>
      </main>
    </div>
  );
}

export default App;