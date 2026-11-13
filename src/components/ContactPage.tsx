"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Leaf, Mail, MapPin, Menu, Phone, X } from "lucide-react";

const mapUrl =
  "https://www.google.com/maps?q=Bidar,+Kalaburagi,+Karnataka&output=embed";

export default function ContactPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="corporate-site corporate-contact-page">
      <header className="corporate-header">
        <Link href="/" className="corporate-logo" aria-label="SVD Eco Services home">
          <span className="corporate-logo-mark"><Leaf size={22} /></span>
          <span><strong>SVD ECO</strong><small>Eco Services</small></span>
        </Link>
        <nav className="corporate-nav" aria-label="Main navigation">
          <Link href="/solutions">Solutions</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/#process">Process</Link>
          <Link href="/about">About</Link>
          <Link className="active" href="/contact">Contact</Link>
          <Link className="corporate-nav-cta" href="mailto:svdeco963@gmail.com">
            Get In Touch <ArrowUpRight size={14} />
          </Link>
        </nav>
        <button
          className="corporate-menu"
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
        {mobileOpen && (
          <nav id="mobile-navigation" className="corporate-mobile-nav" aria-label="Mobile navigation">
            <Link href="/solutions" onClick={() => setMobileOpen(false)}>Solutions</Link>
            <Link href="/industries" onClick={() => setMobileOpen(false)}>Industries</Link>
            <Link href="/#process" onClick={() => setMobileOpen(false)}>Process</Link>
            <Link href="/about" onClick={() => setMobileOpen(false)}>About</Link>
            <Link className="active" href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
            <Link href="mailto:svdeco963@gmail.com" onClick={() => setMobileOpen(false)}>
              Get In Touch <ArrowUpRight size={14} />
            </Link>
          </nav>
        )}
      </header>

      <main>
        <section className="corporate-contact-hero">
          <Image
            src="/images/cta-industrial.jpg"
            alt="Industrial facility at dusk"
            fill
            priority
            sizes="100vw"
          />
          <div className="corporate-contact-hero-overlay" />
          <div className="corporate-contact-hero-copy">
            <p className="corporate-eyebrow">Home / Contact Us</p>
            <h1>Contact Us</h1>
            <span className="corporate-yellow-rule" />
            <p>
              Talk to our team about compliant waste recovery, alternative fuel,
              partnerships, or a more responsible industrial future.
            </p>
          </div>
        </section>

        <section className="corporate-contact-content">
          <div className="corporate-contact-intro">
            <div className="corporate-section-label">Start a conversation</div>
            <h2>Let&apos;s discuss your requirements.</h2>
            <p>
              Share your waste stream, processing needs, or partnership goals.
              We&apos;ll help identify a practical next step.
            </p>

            <div className="corporate-contact-detail-card">
              <h3>SVD Eco Services</h3>
              <p>Hazardous waste recovery and alternative industrial fuel.</p>
              <div className="corporate-contact-detail">
                <MapPin size={18} />
                <span>Bidar, Kalaburagi, Karnataka, India</span>
              </div>
              <div className="corporate-contact-detail">
                <Mail size={18} />
                <a href="mailto:svdeco963@gmail.com">svdeco963@gmail.com</a>
              </div>
              <div className="corporate-contact-detail">
                <Phone size={18} />
                <a href="tel:9449579555">9449579555</a>
              </div>
            </div>
          </div>

          <div className="corporate-contact-map">
            <iframe
              title="SVD Eco Services location"
              src={mapUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              className="corporate-map-link"
              href="https://www.google.com/maps/search/?api=1&query=Bidar%2C%20Kalaburagi%2C%20Karnataka"
              target="_blank"
              rel="noreferrer"
            >
              Open location in Maps <ArrowUpRight size={15} />
            </a>
          </div>
        </section>
      </main>

      <footer className="corporate-footer">
        <div className="corporate-footer-brand">
          <span className="corporate-logo-mark"><Leaf size={22} /></span>
          <h3>SVD Eco Services</h3>
          <p>Turning hazardous waste into clean industrial energy through responsible recovery.</p>
        </div>
        <div><b>Company</b><Link href="/about">About</Link><Link href="/industries">Industries</Link><Link href="/contact">Contact</Link></div>
        <div><b>Solutions</b><Link href="/solutions">Waste recovery</Link><Link href="/#process">Our process</Link><Link href="/#technology">Assurance</Link></div>
        <div><b>Contact</b><span>Bidar, Kalaburagi, Karnataka</span><a href="mailto:svdeco963@gmail.com">svdeco963@gmail.com</a><a href="tel:9449579555">9449579555</a></div>
        <div className="corporate-footer-bottom">© {new Date().getFullYear()} SVD Eco Services. All rights reserved.</div>
      </footer>
    </div>
  );
}
