import { ArrowUpRight } from "lucide-react";

const teamImages = [
  "/images/team1.png",
  "/images/team2.png",
  "/images/team3.png",
  "/images/team4.png",
];

const Teams = () => {
  return (
    <section id="about" className="px-5 py-20 sm:py-28 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="grid grid-cols-2 gap-3 sm:gap-5">
          {teamImages.map((image, index) => (
            <div
              key={image}
              className={`group overflow-hidden rounded-2xl ${
                index === 1 || index === 2 ? "translate-y-6" : ""
              }`}
            >
              <img
                src={image}
                alt={`G3 Architect team member ${index + 1}`}
                className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="pt-8 lg:pt-0">
          <span className="font-bold uppercase tracking-[0.2em] text-orange-500">
            About our team
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
            Great designs begin with
            <span className="text-orange-500"> great people.</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-[#727272]">
            Our team brings together creativity, experience, and technical
            expertise to turn ambitious ideas into beautiful architectural
            spaces.
          </p>

          <p className="mt-4 text-sm leading-7 text-[#727272]">
            From initial concepts to the smallest details, we believe thoughtful
            collaboration is the foundation of exceptional architecture.
          </p>

          <a
            href="#features"
            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-orange-500 px-7 py-4 font-semibold text-white transition hover:bg-orange-600"
          >
            Discover More
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Teams;
