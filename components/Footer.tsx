import { Link } from "react-router";
import { Building2, ArrowUp, Phone, Mail, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { address, mail, phoneNo } from "../constant/contacts";
import { companyData, footerSocials, projectData } from "../constant/footer";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary-dark text-white border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="flex items-center gap-2.5 group cursor-pointer text-white font-heading font-extrabold text-2xl tracking-tight mb-4 inline-flex"
            >
              <span className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-secondary shadow-md group-hover:scale-105 transition-transform">
                <Building2 className="w-5 h-5 stroke-[2.5]" />
              </span>
              <span className="flex items-center">
                Built<span className="text-primary">Up</span>
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              Delivering structural, interior fit-out and MEP works across
              Andhra Pradesh. Trusted by developers, hospitals and schools for
              quality.
            </p>

            {/* Social Icons with Motion */}
            <div className="flex items-center gap-3">
              {footerSocials.map((s, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-primary hover:border-primary/50 hover:bg-white/10 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d={s.path} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider mb-5">
              Projects
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-400">
              {projectData.map((project, idx) => (
                <li key={idx}>
                  <Link
                    to={project.href}
                    className="hover:text-primary transition-colors"
                  >
                    {project.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider mb-5">
              Company
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-400">
              {
                companyData.map((data, idx) => (
                  <li key={idx}>
                    <Link
                      to={data.href}
                      className="hover:text-primary transition-colors"
                    >
                      {data.name}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider mb-5">
              Contact
            </h4>
            <div className="flex flex-col gap-3 text-sm text-slate-400">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{address}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>{phoneNo}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>{mail}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>Copyright © 2026 AG Constructions. All rights reserved.</div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-3">
            {/*<a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>*/}

            {/* Back to top button with Motion */}
            <motion.button
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.92 }}
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-primary hover:text-white transition-colors cursor-pointer ml-1 font-heading font-bold"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
