import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#05060b] text-white">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#05060b]/60 backdrop-blur">
        <div className="container mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
          <a href="#" className="font-extrabold tracking-wider text-cyan-300">
            <span className="drop-shadow-[0_0_12px_rgba(34,211,238,0.65)]">CYBER</span>
            <span className="text-fuchsia-400 drop-shadow-[0_0_12px_rgba(217,70,239,0.55)]">PORT</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a className="hover:text-cyan-300 transition" href="#about">About</a>
            <a className="hover:text-cyan-300 transition" href="#projects">Projects</a>
            <a className="hover:text-cyan-300 transition" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main className="pt-14">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
