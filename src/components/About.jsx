function About() {
  return (
    <section id="about" className="relative w-full py-20 bg-[#0a0c14] text-white">
      <div className="absolute inset-0 pointer-events-none opacity-30"
           style={{ backgroundImage: 'radial-gradient(600px 200px at 10% 10%, rgba(0,255,200,0.15), transparent), radial-gradient(400px 180px at 90% 20%, rgba(180,0,255,0.12), transparent)' }} />

      <div className="container mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-2">
            <div className="relative w-40 h-40 rounded-xl bg-gradient-to-br from-cyan-500 to-fuchsia-500 p-[2px] shadow-[0_0_40px_rgba(34,211,238,0.35)]">
              <div className="w-full h-full rounded-xl bg-[#0b0e18] flex items-center justify-center text-4xl font-bold">
                <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-300 bg-clip-text text-transparent">AK</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-3">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">About Me</h2>
            <p className="text-white/80 leading-relaxed">
              I craft high-performance web apps with a focus on visuals and interaction. My toolkit spans WebGL, React, and motion design. When I’m not pushing pixels, I explore generative art and synthwave soundscapes.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-sm">
              {['React', 'Three.js', 'Spline', 'Framer Motion', 'Tailwind'].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
