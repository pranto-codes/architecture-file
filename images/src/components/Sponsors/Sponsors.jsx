const sponsors = [
  { name: "Spotify", image: "/images/sponsors/spotify.png" },
  { name: "Amazon", image: "/images/sponsors/amazon.png" },
  { name: "Google", image: "/images/sponsors/google.png" },
  { name: "Telerama", image: "/images/sponsors/telerama.png" },
  { name: "Figma", image: "/images/sponsors/figma.png" },
];

const Sponsors = () => {
  return (
    <section className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <span className="font-bold uppercase tracking-[0.2em] text-orange-500">
          Trusted partnerships
        </span>

        <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Our Sponsors</h2>

        <p className="mx-auto mt-5 max-w-xl leading-8 text-[#727272]">
          We value the relationships that support our work and help us move
          forward.
        </p>

        <div className="mt-14 grid grid-cols-2 items-center gap-10 sm:grid-cols-3 lg:grid-cols-5">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex min-h-20 items-center justify-center grayscale transition duration-300 hover:grayscale-0"
            >
              <img
                src={sponsor.image}
                alt={`${sponsor.name} logo`}
                className="max-h-12 max-w-36 object-contain opacity-60 transition hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
