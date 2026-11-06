import { ArrowUpRight, Check } from "lucide-react";

const features = [
  {
    title: "Desktop & Mobile Design",
    description:
      "We create architectural concepts that work beautifully across different environments and requirements.",
  },
  {
    title: "Creative Design Solutions",
    description:
      "Every project receives a thoughtful approach that balances creativity, practicality, and visual appeal.",
  },
  {
    title: "Modern Architecture",
    description:
      "Our designs combine contemporary aesthetics with functionality and attention to detail.",
  },
  {
    title: "Easy Project Collaboration",
    description:
      "We keep communication clear throughout the design and development process.",
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-[#FFF4E7] px-5 py-20 sm:py-28 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-start gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <span className="font-bold uppercase tracking-[0.2em] text-orange-500">
            Our expertise
          </span>

          <h2 className="mt-5 border-l-4 border-orange-500 pl-5 text-4xl font-bold leading-tight sm:text-5xl">
            Features you will
            <br />
            love & enjoy.
          </h2>

          <p className="mt-6 text-base leading-8 text-[#727272]">
            We bring together innovative thinking, modern design, and practical
            expertise to deliver architectural experiences that inspire.
          </p>

          <div className="mt-9 space-y-4">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-xl border border-orange-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="flex items-center gap-3 text-lg font-bold">
                  <span className="rounded-full bg-orange-100 p-1.5 text-orange-600">
                    <Check size={16} />
                  </span>
                  {feature.title}
                </h3>

                <p className="mt-3 pl-9 text-sm leading-7 text-[#727272]">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:sticky lg:top-28">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img
              src="/images/architect.png"
              alt="Architectural project by G3 Architect"
              className="w-full object-cover"
            />
          </div>

          <div className="relative mx-auto -mt-12 w-fit rounded-2xl bg-orange-500 px-8 py-6 text-center text-white shadow-2xl sm:absolute sm:-bottom-10 sm:-left-12 sm:mt-0 sm:px-10 sm:py-8">
            <h3 className="text-4xl font-extrabold sm:text-6xl">10+</h3>
            <p className="mt-1 font-semibold tracking-wide">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
