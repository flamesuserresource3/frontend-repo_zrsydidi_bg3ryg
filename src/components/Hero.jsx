import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[540px] overflow-hidden bg-[#06070d]">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient + noise overlays (don't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#06070d]/10 to-[#06070d]" />
      <div className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-40"
           style={{ backgroundImage: 'radial-gradient(circle at 20% 10%, rgba(0,255,255,0.15), transparent 40%), radial-gradient(circle at 80% 20%, rgba(255,0,255,0.12), transparent 45%)' }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-3xl">
            <p className="uppercase tracking-widest text-cyan-300/80 text-xs md:text-sm mb-3">Futuristic Portfolio</p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-[0_0_25px_rgba(59,130,246,0.45)]">
              Neon Cyberpunk Creations
            </h1>
            <p className="mt-4 md:mt-6 text-base md:text-lg text-white/80 max-w-xl">
              I build immersive web experiences that blend 3D, motion, and storytelling. Dive into a world of glowing interfaces and interactive visuals.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="group inline-flex items-center gap-2 rounded-md bg-cyan-500/90 hover:bg-cyan-400 text-black font-semibold px-5 py-3 transition">
                View Projects
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/20 text-white px-5 py-3 backdrop-blur transition">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
