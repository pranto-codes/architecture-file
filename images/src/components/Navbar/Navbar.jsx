import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#features" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-6 lg:px-8">
      <a
        href="#home"
        className="text-2xl font-extrabold tracking-tight sm:text-3xl"
      >
        G3 <span className="text-orange-500">Architect</span>
      </a>

      <div className="hidden items-center gap-9 md:flex">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-slate-700 transition hover:text-orange-500"
          >
            {link.name}
          </a>
        ))}
      </div>

      <a
        href="#contact"
        className="hidden rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-orange-600 md:inline-block"
      >
        Let's Talk
      </a>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="rounded-lg bg-white p-2 md:hidden"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={25} /> : <Menu size={25} />}
      </button>

      {menuOpen && (
        <div className="absolute left-0 top-[76px] z-50 flex w-full flex-col gap-5 border-t border-orange-100 bg-white px-6 py-7 shadow-xl md:hidden">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-medium text-slate-700 hover:text-orange-500"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
