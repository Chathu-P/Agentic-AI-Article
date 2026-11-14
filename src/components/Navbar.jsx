import { useEffect, useState } from "react";
import { Menu, X, ArrowLeft, ArrowUpRight } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assests/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isArticlePage = pathname === "/article";

  useEffect(() => {
    let previousScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 10 || currentScrollY < previousScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }

      previousScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Overview", href: "#overview" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Applications", href: "#applications" },
    { name: "Challenges", href: "#challenges" },
  ];

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl transition-transform duration-700 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a
          href={isArticlePage ? "/" : "#home"}
          className="flex items-center gap-2"
        >
          <img
            src={logo}
            alt="Agentic AI"
            className="h-15 w-auto max-w-[350px] object-contain"
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={isArticlePage ? `/${link.href}` : link.href}
              className="text-sm text-slate-400 transition hover:text-cyan-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => navigate(isArticlePage ? "/" : "/article")}
          className="hidden items-center gap-2 rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 md:flex"
        >
          {isArticlePage ? <ArrowLeft size={16} /> : <ArrowUpRight size={16} />}
          {isArticlePage ? "Back to Home" : "Read Article"}
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={isArticlePage ? `/${link.href}` : link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm text-slate-300 transition hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
