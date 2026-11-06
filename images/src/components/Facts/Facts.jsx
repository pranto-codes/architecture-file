import { Award, Building2, Users, Mail } from "lucide-react";

const facts = [
  {
    icon: Award,
    number: "54",
    label: "Awards Won",
  },
  {
    icon: Building2,
    number: "1,458",
    label: "Projects Finished",
  },
  {
    icon: Users,
    number: "590",
    label: "Clients Worked",
  },
  {
    icon: Mail,
    number: "22,578",
    label: "Emails Sent",
  },
];

const Facts = () => {
  return (
    <section className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-xl">
          <span className="font-bold uppercase tracking-[0.2em] text-orange-500">
            Our achievements
          </span>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Some Facts</h2>

          <p className="mt-5 leading-8 text-[#727272]">
            Our journey is built on creativity, strong relationships, and
            successful architectural projects.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => {
            const Icon = fact.icon;

            return (
              <div
                key={fact.label}
                className="group rounded-2xl border border-slate-200 bg-white p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
                  <Icon size={32} strokeWidth={1.7} />
                </div>

                <h3 className="mt-6 text-4xl font-extrabold text-slate-800">
                  {fact.number}
                </h3>

                <p className="mt-2 font-medium text-[#727272]">{fact.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Facts;
