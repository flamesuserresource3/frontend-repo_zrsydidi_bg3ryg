import { Mail, Github, Linkedin } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="relative w-full py-20 bg-[#0a0c14] text-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold">Let’s Build Something</h2>
          <p className="mt-3 text-white/75">Open for freelance and collabs. Ping me for 3D, motion, or immersive frontends.</p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <a href="mailto:hello@yourdomain.dev" className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 hover:border-cyan-400/40 transition">
              <span className="rounded-md bg-cyan-500/20 p-2 text-cyan-300"><Mail size={18} /></span>
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-sm text-white/70">hello@yourdomain.dev</div>
              </div>
            </a>

            <a href="https://github.com/" target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 hover:border-cyan-400/40 transition">
              <span className="rounded-md bg-fuchsia-500/20 p-2 text-fuchsia-300"><Github size={18} /></span>
              <div>
                <div className="font-semibold">GitHub</div>
                <div className="text-sm text-white/70">@yourhandle</div>
              </div>
            </a>

            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 hover:border-cyan-400/40 transition">
              <span className="rounded-md bg-purple-500/20 p-2 text-purple-300"><Linkedin size={18} /></span>
              <div>
                <div className="font-semibold">LinkedIn</div>
                <div className="text-sm text-white/70">/in/yourhandle</div>
              </div>
            </a>

            <a href="#" className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 hover:border-cyan-400/40 transition">
              <span className="rounded-md bg-emerald-500/20 p-2 text-emerald-300">⚡</span>
              <div>
                <div className="font-semibold">Resume</div>
                <div className="text-sm text-white/70">Download PDF</div>
              </div>
            </a>
          </div>
        </div>

        <footer className="mt-14 text-xs text-white/50">
          © {new Date().getFullYear()} Your Name. Crafted with neon and caffeine.
        </footer>
      </div>
    </section>
  );
}

export default Contact;
