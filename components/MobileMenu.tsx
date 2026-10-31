import { useEffect } from "react";
import { NavLink, Link } from "react-router";
import { X, Building2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about" },
  { name: "Services", to: "/services" },
  { name: "Projects", to: "/projects" },
  { name: "Contact Us", to: "/contact" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Close when pressing Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -25, scale: 0.98 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col bg-primary text-white overflow-y-auto"
          aria-label="Mobile Navigation Drawer"
        >
          {/* Top Bar with Prominent Close Button */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/20 relative z-20">
            {/* Brand Logo in Drawer */}
            <Link
              to="/"
              onClick={onClose}
              className="font-heading font-extrabold text-2xl tracking-tight text-white flex items-center gap-2"
            >
              <span className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-primary text-sm font-heading font-black">
                <Building2 className="w-5 h-5 stroke-[2.5]" />
              </span>
              <span>
                Built<span className="text-secondary">Up</span>
              </span>
            </Link>

            {/* Close Button matching reference (dark navy box with white X) */}
            <motion.button
              type="button"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onClose();
              }}
              className="flex items-center justify-center w-11 h-11 rounded-lg bg-secondary text-white hover:bg-secondary-dark transition-colors shadow-lg cursor-pointer"
              aria-label="Close navigation menu"
              title="Close menu"
            >
              <X className="w-6 h-6 stroke-[2.5]" />
            </motion.button>
          </div>

          {/* Navigation Links - Clean single links, no submenus, no blog */}
          <nav className="flex-1 px-8 py-8 flex flex-col gap-6 text-xl font-heading font-semibold tracking-tight">
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + idx * 0.04, duration: 0.2 }}
              >
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `block py-1 transition-colors ${
                      isActive
                        ? "text-secondary font-black underline underline-offset-8"
                        : "text-white hover:text-secondary"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </motion.div>
            ))}
          </nav>

          {/* Bottom Action Area (without the Buy Now sticky button or banner) */}
          <div className="px-8 pb-10 pt-4 mt-auto relative z-20">
            <Button
              to="/contact"
              onClick={onClose}
              variant="secondary"
              size="lg"
              className="w-full text-center"
            >
              Get a Free Quote
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
