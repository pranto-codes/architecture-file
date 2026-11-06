import { ArrowRight, MoveUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="bg-[#FFF4E7] px-5 pb-16 pt-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl py-12 text-center sm:py-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-orange-600">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            Architecture & Design
          </span>

          <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-[#131313] sm:text-6xl lg:text-7xl">
            Brand New Group
            <br />
            of <span className="text-orange-500">Architects.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#727272] sm:text-base sm:leading-8">
            We transform ideas into remarkable spaces. Discover thoughtful
            architecture, creative solutions, and designs built to stand the
            test of time.
          </p>

          <a
            href="#features"
            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-orange-500 px-7 py-4 font-semibold text-white shadow-lg shadow-orange-200 transition duration-300 hover:-translate-y-1 hover:bg-orange-600"
          >
            Explore More
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="group relative overflow-hidden rounded-2xl">
          <img
            src="/images/banner.png"
            alt="Modern architectural building designed by G3 Architect"
            className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.02]"
          />

          <div className="absolute bottom-5 right-5 hidden items-center gap-2 rounded-xl bg-white/90 px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg backdrop-blur sm:flex">
            Discover our work
            <MoveUpRight size={17} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
