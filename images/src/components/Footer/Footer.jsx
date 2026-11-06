import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-[#131313] px-5 pb-8 pt-16 text-white lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="text-3xl font-extrabold">
              G3 <span className="text-orange-500">Architect</span>
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-8 text-slate-400">
              Creating meaningful architectural spaces through creativity,
              thoughtful planning, and modern design.
            </p>
          </div>

          <div>
            <h3 className="font-bold">Explore</h3>

            <div className="mt-5 flex flex-col gap-4 text-sm text-slate-400">
              <a href="#home" className="hover:text-orange-400">
                Home
              </a>
              <a href="#about" className="hover:text-orange-400">
                About
              </a>
              <a href="#features" className="hover:text-orange-400">
                Services
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Let's Work Together</h3>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              Have a project in mind? Let's discuss how we can bring your vision
              to life.
            </p>

            <a
              href="mailto:hello@g3architect.com"
              className="mt-5 inline-flex items-center gap-2 font-semibold text-orange-400 hover:text-orange-300"
            >
              Get in touch
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 pt-8 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} G3 Architect. All rights reserved.</p>
          <a href="#home" className="hover:text-white">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
