import { Outlet, useLocation, useNavigation } from "react-router";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import MobileMenu from "../../components/MobileMenu";
import Footer from "../../components/Footer";
import MagicCursor from "../../components/magicCursor";



export default function MainLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  const navigation = useNavigation()

  const isLoading = navigation.state != 'idle'

  // Scroll to top automatically when navigating between pages
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setMobileMenuOpen(false);
    setIsSticky(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      // Header sits over top hero on all pages; becomes sticky navy after scrolling 80px
      setIsSticky(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <div className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-white text-secondary font-sans selection:bg-primary selection:text-secondary flex flex-col">

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />


      <Navbar
        isSticky={isSticky}
        isMobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={() => setMobileMenuOpen((prev) => !prev)}
        onCloseMobileMenu={() => setMobileMenuOpen(false)}
      />

      {/* Main Outlet */}
      <main className="flex-1 w-full">
        <MagicCursor />
        <Outlet />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
