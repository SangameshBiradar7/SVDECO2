"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  Leaf,
  Recycle,
  FlaskConical,
  Truck,
  BarChart3,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Process", href: "#process" },
  { name: "Technology", href: "#technology" },
  { name: "Impact", href: "#impact" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const navBg = useTransform(scrollY, [0, 100], ["rgba(10, 31, 10, 0)", "rgba(10, 31, 10, 0.85)"]);
  const navBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(12px)"]);
  const navBorder = useTransform(scrollY, [0, 100], ["rgba(255,255,255,0)", "rgba(255,255,255,0.08)"]);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.nav
      style={{
        backgroundColor: navBg,
        backdropFilter: navBlur,
        WebkitBackdropFilter: navBlur,
        borderBottom: `1px solid ${navBorder}`,
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-lime to-lime-light flex items-center justify-center shadow-lg shadow-lime/20 group-hover:shadow-lime/40 transition-all duration-300">
            <Leaf className="w-5 h-5 text-deep-green" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-off-white leading-none">
              SVD
            </span>
            <span className="text-[10px] font-semibold tracking-[0.2em] text-lime uppercase">
              Eco Services
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-light hover:text-lime transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lime group-hover:w-full transition-all duration-300 rounded-full" />
            </Link>
          ))}
          <Link
            href="#contact"
            className="px-5 py-2.5 text-sm font-semibold bg-lime text-deep-green rounded-full hover:bg-lime-light transition-all duration-300 shadow-lg shadow-lime/20 hover:shadow-lime/40"
          >
            Get In Touch
          </Link>
        </div>

        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden p-2 text-off-white hover:text-lime transition-colors"
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass-strong mt-4 mx-4 rounded-2xl overflow-hidden"
        >
          <div className="p-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="text-base font-medium text-off-white hover:text-lime transition-colors py-2"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsMobileOpen(false)}
              className="px-5 py-3 text-base font-semibold bg-lime text-deep-green rounded-full text-center hover:bg-lime-light transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
