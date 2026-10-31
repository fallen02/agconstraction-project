import { NavLink, Link } from "react-router";
import { Menu, X, Building2 } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "./ui";

interface NavbarProps {
  isSticky?: boolean;
  isHome?: boolean;
  isMobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
  onCloseMobileMenu: () => void;
}

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about" },
  { name: "Services", to: "/services" },
  { name: "Projects", to: "/projects" },
  { name: "Contact Us", to: "/contact" },
];

export default function Navbar({
  isSticky = false,
  isMobileMenuOpen,
  onToggleMobileMenu,
  onCloseMobileMenu,
}: NavbarProps) {
  const isTransparent = !isSticky;

  return (
    <motion.header
      key={isTransparent ? "transparent" : "solid"}
      initial={!isTransparent ? { y: -80, opacity: 0 } : false}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full z-40 transition-colors duration-300 ${
        isTransparent
          ? "absolute top-0 left-0 right-0 bg-transparent border-b border-white/10 py-5"
          : "fixed top-0 left-0 right-0 bg-secondary/95 backdrop-blur-md shadow-2xl border-b border-white/10 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={onCloseMobileMenu}
          className="flex items-center gap-2.5 group cursor-pointer text-white font-heading font-extrabold text-2xl tracking-tight"
        >
          <span className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-secondary shadow-md group-hover:scale-105 transition-transform">
            <Building2 className="w-5 h-5 stroke-[2.5]" />
          </span>
          <span className="flex items-center">
            Built<span className="text-primary">Up</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-heading font-semibold">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `transition-colors py-1 ${
                  isActive
                    ? "text-primary font-bold"
                    : "text-slate-200 hover:text-primary"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right CTA and Mobile Hamburger */}
        <div className="flex items-center gap-4">
          <Button
            to="/contact"
            onClick={onCloseMobileMenu}
            size="sm"
            className="hidden sm:inline-flex"
          >
            Get a Quote
          </Button>

          {/* Mobile Menu Hamburger / Close Toggle Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onToggleMobileMenu();
            }}
            className="lg:hidden p-2.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer relative z-50"
            aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            title={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 stroke-[2.5]" />
            ) : (
              <Menu className="w-6 h-6 stroke-[2]" />
            )}
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}
