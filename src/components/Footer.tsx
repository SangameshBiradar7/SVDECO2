"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  Recycle,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

const footerLinks = {
  Company: [
    { name: "About", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Contact", href: "#contact" },
  ],
  Solutions: [
    { name: "How It Works", href: "#process" },
    { name: "Technology", href: "#technology" },
    { name: "Impact", href: "#impact" },
    { name: "Traceability", href: "#traceability" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Compliance", href: "#" },
  ],
};

  const socialLinks = [
    { icon: ExternalLink, href: "#", label: "LinkedIn" },
    { icon: ExternalLink, href: "#", label: "Twitter" },
    { icon: ExternalLink, href: "#", label: "GitHub" },
  ];

export default function Footer() {
  return (
    <footer className="relative bg-charcoal border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-green/50 to-charcoal pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="#" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-lime to-lime-light flex items-center justify-center shadow-lg shadow-lime/20">
                <Leaf className="w-6 h-6 text-deep-green" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-off-white leading-none">
                  SVD
                </span>
                <span className="text-xs font-semibold tracking-[0.2em] text-lime uppercase">
                  Eco Services
                </span>
              </div>
            </Link>
            <p className="text-muted-light text-sm leading-relaxed max-w-sm mb-6">
              Turning hazardous waste into clean industrial energy. We bridge the gap
              between waste generators and cement plants through innovative
              stabilization and pelletization technology.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-light hover:text-lime hover:border-lime/30 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-off-white uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-light hover:text-lime transition-colors duration-300 flex items-center gap-1 group"
                    >
                      {link.name}
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 text-muted-light">
              <div className="w-10 h-10 rounded-lg glass flex items-center justify-center text-lime">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-muted-light/60 uppercase tracking-wider mb-0.5">
                  Location
                </p>
                <p className="text-sm text-off-white">
                  Bidar, Kalaburagi, Karnataka
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-muted-light">
              <div className="w-10 h-10 rounded-lg glass flex items-center justify-center text-lime">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-muted-light/60 uppercase tracking-wider mb-0.5">
                  Email
                </p>
                <p className="text-sm text-off-white">contact@svdecoservices.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-muted-light">
              <div className="w-10 h-10 rounded-lg glass flex items-center justify-center text-lime">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-muted-light/60 uppercase tracking-wider mb-0.5">
                  Phone
                </p>
                <p className="text-sm text-off-white">+91 98765 43210</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-light">
            {" "}
            SVD Eco Services. All rights reserved.
          </p>
          <p className="text-xs text-muted-light/60">
            Built with passion for a cleaner, greener India.
          </p>
        </div>
      </div>
    </footer>
  );
}
