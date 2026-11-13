"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Leaf, Menu, X } from "lucide-react";

type InteriorPageType = "solutions" | "industries";

const pageData = {
  solutions: {
    eyebrow: "Solutions",
    title: "From hazardous waste to industrial value.",
    intro:
      "Integrated recovery solutions built to reduce waste liability, improve traceability, and create dependable alternative fuel for energy-intensive industries.",
    heroImage: "/images/alternative-fuel.webp",
    summary:
      "SVD Eco Services delivers a controlled path from collection and stabilization to fuel preparation and cement kiln co-processing.",
    items: [
      {
        title: "Waste Collection & Tracking",
        description:
          "Compliant collection, documentation, and batch identification create a clear chain of custody from the generator to recovery.",
        image: "/images/waste-collection.webp",
        bullets: ["Manifest-led movement", "Safe material handling", "Batch-level visibility"],
      },
      {
        title: "Waste Stabilization",
        description:
          "Controlled treatment prepares complex industrial waste streams for safe handling, consistent blending, and responsible recovery.",
        image: "/images/waste-stabilization.webp",
        bullets: ["Controlled treatment", "Safer downstream handling", "Stream compatibility review"],
      },
      {
        title: "Alternative Fuel Production",
        description:
          "Suitable materials are blended and pelletized into a consistent, high-calorific fuel specification for industrial use.",
        image: "/images/alternative-fuel.webp",
        bullets: ["Blend design", "Quality verification", "Cement kiln readiness"],
      },
      {
        title: "Cement Kiln Co-processing",
        description:
          "Quality-verified alternative fuel supports lower fossil-fuel dependence while giving cement plants a reliable recovery pathway.",
        image: "/images/cement-kiln.webp",
        bullets: ["Reliable dispatch", "Industrial fuel value", "Responsible resource recovery"],
      },
      {
        title: "Digital Traceability",
        description:
          "Manifest-led visibility across collection, processing, quality verification, and delivery.",
        image: "/images/traceability-dashboard.jpg",
        bullets: ["Batch-level tracking", "Documented chain of custody", "Delivery visibility"],
      },
      {
        title: "Quality-led Recovery",
        description:
          "A practical waste-to-energy model designed around compliance, measurement, and long-term industrial partnerships.",
        image: "/images/impact-compliance.jpg",
        bullets: ["Compliance-led operations", "Measured fuel quality", "Long-term partnerships"],
      },
    ],
  },
  industries: {
    eyebrow: "Industries",
    title: "Responsible recovery for complex industries.",
    intro:
      "We work with sectors that generate challenging waste streams and need practical, compliant, and measurable routes to recovery.",
    heroImage: "/images/petrochemical-industry.webp",
    summary:
      "Our model connects waste generators with a documented recovery process designed around safety, consistency, and long-term industrial partnerships.",
    items: [
      {
        title: "Pharmaceutical Manufacturing",
        description:
          "Responsible pathways for ETP sludge, solvent residues, and complex manufacturing waste that demand careful handling and traceability.",
        image: "/images/pharmaceutical-industry.webp",
        bullets: ["ETP sludge", "Solvent residues", "Manufacturing waste"],
      },
      {
        title: "Paint & Coatings",
        description:
          "Structured recovery for paint sludge, resin residues, and solvent-bearing waste from high-volume coatings operations.",
        image: "/images/challenge-waste.jpg",
        bullets: ["Paint sludge", "Resin residues", "Solvent waste"],
      },
      {
        title: "Petrochemical",
        description:
          "Documented handling of hydrocarbon waste, tank-bottom sludge, and related materials from complex processing environments.",
        image: "/images/petrochemical-industry.webp",
        bullets: ["Hydrocarbon waste", "Tank-bottom sludge", "Spent catalysts"],
      },
      {
        title: "Pesticides & Agrochemical",
        description:
          "Recovery planning for pesticide formulation residues and related industrial waste streams with demanding compliance needs.",
        image: "/images/impact-environment.jpg",
        bullets: ["Formulation residues", "Contaminated materials", "Traceable movement"],
      },
    ],
  },
} as const;

const navLinks = [
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function CorporateInteriorPage({ type }: { type: InteriorPageType }) {
  const data = pageData[type];
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="corporate-site corporate-interior">
      <header className="corporate-header">
        <Link href="/" className="corporate-logo" aria-label="SVD Eco Services home">
          <span className="corporate-logo-mark"><Leaf size={22} /></span>
          <span><strong>SVD ECO</strong><small>Eco Services</small></span>
        </Link>
        <nav className="corporate-nav" aria-label="Main navigation">
          {navLinks.map((link) => <Link className={link.href === `/${type}` ? "active" : ""} key={link.href} href={link.href}>{link.label}</Link>)}
          <Link className="corporate-nav-cta" href="/contact">Get In Touch <ArrowUpRight size={14} /></Link>
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
            {navLinks.map((link) => (
              <Link
                className={link.href === `/${type}` ? "active" : ""}
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMobileOpen(false)}>
              Get In Touch <ArrowUpRight size={14} />
            </Link>
          </nav>
        )}
      </header>

      <main>
        <section className="corporate-interior-hero">
          <Image src={data.heroImage} alt="" fill priority sizes="100vw" />
          <div className="corporate-interior-hero-overlay" />
          <div className="corporate-interior-hero-copy">
            <p className="corporate-eyebrow">Home / {data.eyebrow}</p>
            <h1>{data.title}</h1>
            <span className="corporate-yellow-rule" />
            <p>{data.intro}</p>
          </div>
        </section>

        <section className="corporate-interior-intro">
          <p>{data.summary}</p>
        </section>

        <section className="corporate-interior-content">
          {type === "industries" ? (
            <div className="corporate-industry-slides">
              <div className="corporate-interior-tabs" role="tablist" aria-label="Industries">
                {data.items.map((item, index) => (
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeIndustry === index}
                    className={activeIndustry === index ? "active" : ""}
                    key={item.title}
                    onClick={() => setActiveIndustry(index)}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
              {(() => {
                const item = data.items[activeIndustry];
                return (
                  <article key={item.title} className="corporate-industry-slide">
                    <div className="corporate-industry-slide-copy">
                      <p className="corporate-section-label">Industry pathway</p>
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                      <div className="corporate-industry-slide-image">
                        <Image src={item.image} alt="" fill sizes="(max-width: 850px) 100vw, 50vw" />
                      </div>
                    </div>
                    <div className="corporate-industry-detail-list">
                      {item.bullets.map((bullet) => (
                        <div key={bullet}>
                          <Check size={18} />
                          <div>
                            <h3>{bullet}</h3>
                            <p>Designed around safe handling, documentation, and responsible recovery for this waste stream.</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </article>
                );
              })()}
            </div>
          ) : data.items.map((item, index) => (
            <article id={`interior-item-${index}`} className={`corporate-interior-item ${index % 2 ? "reverse" : ""}`} key={item.title}>
              <div className="corporate-interior-item-image">
                <Image src={item.image} alt="" fill sizes="(max-width: 800px) 100vw, 50vw" />
              </div>
              <div className="corporate-interior-item-copy">
                <p className="corporate-section-label">{String(index + 1).padStart(2, "0")} / {data.eyebrow}</p>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <ul>{item.bullets.map((bullet) => <li key={bullet}><Check size={16} />{bullet}</li>)}</ul>
                <Link className="corporate-button corporate-interior-button" href="/contact">Discuss this pathway <ArrowUpRight size={15} /></Link>
              </div>
            </article>
          ))}
        </section>

        <section className="corporate-interior-cta">
          <div><p className="corporate-section-label">Build a better pathway</p><h2>Make your next waste stream more valuable.</h2></div>
          <Link className="corporate-button" href="/contact">Start a conversation <ArrowUpRight size={16} /></Link>
        </section>
      </main>
      <footer className="corporate-footer">
        <div className="corporate-footer-brand"><span className="corporate-logo-mark"><Leaf size={22} /></span><h3>SVD Eco Services</h3><p>Turning hazardous waste into clean industrial energy through responsible recovery and alternative fuel production.</p></div>
        <div><b>Company</b><Link href="/about">About</Link><Link href="/industries">Industries</Link><Link href="/contact">Contact</Link></div>
        <div><b>Solutions</b><Link href="/solutions">Waste recovery</Link><Link href="/#process">Our process</Link><Link href="/#technology">Assurance</Link></div>
        <div><b>Contact</b><span>Bidar, Kalaburagi, Karnataka</span><a href="mailto:svdeco963@gmail.com">svdeco963@gmail.com</a><a href="tel:9449579555">9449579555</a></div>
        <div className="corporate-footer-bottom">© {new Date().getFullYear()} SVD Eco Services. All rights reserved.</div>
      </footer>
    </div>
  );
}
