import { ExternalLink, Github } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Holographic Dashboard',
    desc: 'A real-time analytics cockpit with neon-glow UI and fluid motion.',
    tech: ['React', 'WebGL', 'Framer'],
    href: '#',
    repo: '#',
  },
  {
    title: 'Neon City Explorer',
    desc: 'Interactive 3D city walkthrough with cinematic lighting and SFX.',
    tech: ['Three.js', 'Spline', 'GSAP'],
    href: '#',
    repo: '#',
  },
  {
    title: 'Cyber Terminal',
    desc: 'Retro-futuristic command palette with type-ahead and shaders.',
    tech: ['React', 'WebGL', 'Tailwind'],
    href: '#',
    repo: '#',
  },
];

function Projects() {
  return (
    <section id="projects" className="relative w-full py-20 bg-[#06070d] text-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold">Featured Projects</h2>
          <span className="text-sm text-white/60">3 selected works</span>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <article key={p.title} className="group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur hover:border-cyan-400/40 transition overflow-hidden">
              <div className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition" style={{ background: 'linear-gradient(135deg, rgba(34,211,238,0.35), rgba(217,70,239,0.35))' }} />
              <div className="relative p-6 flex flex-col gap-4">
                <header>
                  <h3 className="text-xl font-bold tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-white/70 text-sm leading-relaxed">{p.desc}</p>
                </header>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-white/10">{t}</span>
                  ))}
                </div>
                <div className="mt-2 flex items-center gap-3">
                  <a href={p.href} className="inline-flex items-center gap-1 text-cyan-300 hover:text-cyan-200 transition">
                    <ExternalLink size={16} />
                    Live
                  </a>
                  <a href={p.repo} className="inline-flex items-center gap-1 text-white/70 hover:text-white transition">
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
