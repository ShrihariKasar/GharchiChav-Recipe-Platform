import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Youtube, Instagram } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Recipes", path: "/recipes" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
  ];

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
  isScrolled
    ? "bg-white/90 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] border-b border-black/5"
    : "bg-gradient-to-b from-black/70 via-black/40 to-transparent backdrop-blur-sm"
}`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            isScrolled ? "h-16" : "h-20"
          }`}
        >
          {/* Logo */}
          <Link to="/">
            <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col">
              <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#D84315] bg-clip-text text-transparent">
                Gharchi Chav
              </span>
              <span className="text-xs text-[#6D4C41] tracking-wide">
                घरची चव
              </span>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;

              return (
                <Link key={link.path} to={link.path}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      active
                        ? "text-white bg-gradient-to-r from-[#FF6B35] to-[#D84315] shadow-lg"
                        : "text-[#6D4C41] hover:text-[#FF6B35]"
                    }`}
                  >
                    {link.name}

                    {/* glowing underline for hover */}
                    {!active && (
                      <motion.span
                        className="absolute left-3 right-3 -bottom-1 h-[2px] bg-gradient-to-r from-[#FF6B35] to-[#D84315] opacity-0"
                        whileHover={{ opacity: 1 }}
                      />
                    )}
                  </motion.div>
                </Link>
              );
            })}
          </nav>

          {/* Social Icons */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.a
              href="https://www.youtube.com/@hinaligaikwad"
              target="_blank"
              whileHover={{ scale: 1.12, rotate: 6 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white transition-all duration-300 shadow-sm"
            >
              <Youtube className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="https://www.instagram.com/heenali2025/"
              target="_blank"
              whileHover={{ scale: 1.12, rotate: -6 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white transition-all duration-300 shadow-sm"
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#6D4C41]"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-black/5 shadow-xl"
          >
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => {
                const active = location.pathname === link.path;

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg font-medium transition ${
                      active ? "text-[#FF6B35]" : "text-[#6D4C41]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="flex gap-4 pt-4 border-t">
                <a
                  href="https://www.youtube.com/@hinaligaikwad"
                  target="_blank"
                  className="p-2 rounded-full bg-[#FF6B35]/10 text-[#FF6B35]"
                >
                  <Youtube />
                </a>
                <a
                  href="https://www.instagram.com/heenali2025/"
                  target="_blank"
                  className="p-2 rounded-full bg-[#FF6B35]/10 text-[#FF6B35]"
                >
                  <Instagram />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}