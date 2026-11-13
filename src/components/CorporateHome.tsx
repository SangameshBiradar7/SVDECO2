"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Factory,
  FlaskConical,
  Leaf,
  Menu,
  Recycle,
  ShieldCheck,
  Truck,
  X,
} from "lucide-react";

const solutions = [
  {
    title: "Waste Collection",
    description:
      "Safe, documented collection and movement of hazardous industrial waste from generators to our processing network.",
    image: "/images/waste-collection.webp",
    icon: Truck,
  },
  {
    title: "Waste Stabilization",
    description:
      "Controlled treatment and stabilization that prepares complex waste streams for responsible recovery.",
    image: "/images/waste-stabilization.webp",
    icon: FlaskConical,
  },
  {
    title: "Alternative Fuel",
    description:
      "Blending and pelletization that converts stabilized material into a consistent, high-calorific industrial fuel.",
    image: "/images/alternative-fuel.webp",
    icon: Recycle,
  },
  {
    title: "Cement Kiln Fuel",
    description:
      "Reliable alternative fuel supply for cement kilns, supporting lower fossil-fuel dependence and resource recovery.",
    image: "/images/cement-kiln.webp",
    icon: Factory,
  },
  {
    title: "Digital Traceability",
    description:
      "Manifest-led visibility across collection, processing, quality verification, and delivery.",
    image: "/images/traceability-dashboard.jpg",
    icon: ShieldCheck,
  },
  {
    title: "Quality-led Recovery",
    description:
      "A practical waste-to-energy model designed around compliance, measurement, and long-term industrial partnerships.",
    image: "/images/impact-compliance.jpg",
    icon: Leaf,
  },
];

const industries = [
  {
    title: "Pharmaceutical",
    description: "ETP sludge, solvent residues, and complex manufacturing waste.",
    image: "/images/pharmaceutical-industry.webp",
  },
  {
    title: "Paint & Coatings",
    description: "Heavy-metal-bearing sludge, solvent waste, and resin residues.",
    image: "/images/challenge-waste.jpg",
  },
  {
    title: "Petrochemical",
    description: "Hydrocarbon waste, tank-bottom sludge, and spent catalysts.",
    image: "/images/petrochemical-industry.webp",
  },
  {
    title: "Agrochemical",
    description: "Pesticide formulation residues and related industrial waste streams.",
    image: "/images/impact-environment.jpg",
  },
];

const assuranceItems = [
  {
    title: "Compliance-led operations",
    description: "Documented handling and responsible processing at every stage.",
  },
  {
    title: "End-to-end traceability",
    description: "Every batch is identified, tracked, and verified through the journey.",
  },
  {
    title: "Measured fuel quality",
    description: "Blending and quality checks support consistent industrial use.",
  },
];

const processItems = [
  {
    title: "Collect & Track",
    description:
      "We coordinate compliant collection, documentation, and batch identification so each waste stream starts with a clear chain of custody.",
  },
  {
    title: "Stabilize",
    description:
      "Specialist treatment prepares complex industrial waste for safe handling and consistent downstream recovery.",
  },
  {
    title: "Blend & Pelletize",
    description:
      "Suitable materials are blended and processed into a more consistent alternative fuel specification for industrial use.",
  },
  {
    title: "Deliver Alternative Fuel",
    description:
      "Quality-verified fuel is dispatched to partner cement plants with the records and delivery visibility needed for responsible operations.",
  },
];

export default function CorporateHome() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openProcess, setOpenProcess] = useState(0);
  const links = [
    { label: "Solutions", href: "/solutions" },
    { label: "Industries", href: "/industries" },
    { label: "Process", href: "#process" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="corporate-site">
      <header className="corporate-header">
        <Link href="/" className="corporate-logo" aria-label="SVD Eco Services home">
          <span className="corporate-logo-mark"><Leaf size={22} /></span>
          <span>
            <strong>SVD ECO</strong>
            <small>Eco Services</small>
          </span>
        </Link>
        <nav className="corporate-nav" aria-label="Main navigation">
          {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
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
            {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>{link.label}</Link>)}
            <Link href="/contact" onClick={() => setMobileOpen(false)}>Get In Touch <ArrowUpRight size={14} /></Link>
          </nav>
        )}
      </header>

      <main>
        <section className="corporate-hero">
          <Image src="/images/svd-hero-industrial.webp" alt="Industrial waste processing facility" fill priority sizes="100vw" className="corporate-hero-image" />
          <div className="corporate-hero-overlay" />
          <div className="corporate-hero-copy">
            <p className="corporate-eyebrow">Sustainable industrial solutions</p>
            <h1>Turning Hazardous Waste<br /><span>Into Clean Industrial Energy.</span></h1>
            <p className="corporate-hero-text">
              We collect, stabilize, and transform hazardous industrial waste into high-quality
              alternative fuels for cement and other energy-consuming industries.
            </p>
            <Link className="corporate-button" href="#solutions">Explore Solutions <ArrowUpRight size={16} /></Link>
          </div>
        </section>

        <section className="corporate-trust-strip">
          <span>Bidar</span><i /> <span>Kalaburagi</span><i /> <span>Karnataka</span><i /> <span>Compliance-led recovery</span><i /> <span>Industrial fuel value</span>
        </section>

        <section id="about" className="corporate-section corporate-mission">
          <div className="corporate-section-label">Our Mission</div>
          <div className="corporate-two-column">
            <div>
              <h2>Built for the systems that move industry forward.</h2>
              <div className="corporate-bullets">
                <p><b>•</b> We partner with waste generators and energy-intensive industries to create safer, more valuable pathways for hazardous waste.</p>
                <p><b>•</b> Our mission is to deliver responsible recovery through stabilization, alternative fuel production, transparent operations, and continuous improvement.</p>
              </div>
              <Link className="corporate-text-link" href="/contact">Explore our company <ArrowUpRight size={16} /></Link>
            </div>
            <div className="corporate-image-card">
              <Image src="/images/transformation-sequence.jpg" alt="Waste material transformation process" fill sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
          </div>
          <div className="corporate-metrics">
            <div><strong>18.51M+</strong><span>tonnes hazardous waste generated annually in India</span></div>
            <div><strong>100%</strong><span>waste-to-resource vision</span></div>
            <div><strong>75%+</strong><span>resource recovery ambition</span></div>
          </div>
        </section>

        <section id="solutions" className="corporate-section corporate-solutions">
          <div className="corporate-section-heading">
            <div><div className="corporate-section-label">Solutions</div><h2>From waste to<br />industrial fuel.</h2></div>
            <p>Integrated recovery services for complex waste streams, built around safety, traceability, and industrial performance.</p>
          </div>
          <div className="corporate-card-grid">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return <article className="corporate-product-card" key={solution.title}>
                <div className={`corporate-card-image ${solution.title === "Digital Traceability" ? "corporate-card-image-traceability" : ""}`}>
                  <Image
                    src={solution.image}
                    alt={`${solution.title} overview`}
                    fill
                    priority={solution.title === "Digital Traceability"}
                    unoptimized={solution.title === "Digital Traceability"}
                    sizes="(max-width: 800px) 100vw, 33vw"
                  />
                  <span><Icon size={18} /></span>
                </div>
                <div className="corporate-card-body"><h3>{solution.title}</h3><p>{solution.description}</p><Link href="/contact">Learn more <ArrowUpRight size={15} /></Link></div>
              </article>;
            })}
          </div>
        </section>

        <section id="industries" className="corporate-section corporate-industries">
          <div className="corporate-section-label">Industries We Serve</div>
          <h2>Powering responsible recovery<br />across sectors that shape the future.</h2>
          <p className="corporate-lead">From pharmaceutical manufacturing to petrochemical operations, SVD Eco Services helps industrial partners turn complex waste into measurable value.</p>
          <div className="corporate-industry-grid">
            {industries.map((industry) => <article className="corporate-industry-card" key={industry.title}>
              <Image src={industry.image} alt="" fill sizes="(max-width: 800px) 100vw, 25vw" />
              <div><h3>{industry.title}</h3><p>{industry.description}</p></div>
            </article>)}
          </div>
        </section>

        <section id="process" className="corporate-blue-section">
          <div className="corporate-section-label">Our Process</div>
          <div className="corporate-blue-heading"><h2>Strategic partnership across every stage.</h2><p>From collection to kiln delivery, we create a clear, controlled path from waste liability to industrial energy.</p></div>
          <div className="corporate-process-layout">
            <div className="corporate-process-image"><Image src="/images/waste-stabilization.webp" alt="Waste stabilization equipment" fill sizes="(max-width: 900px) 100vw, 45vw" /></div>
            <div className="corporate-process-list">
              {processItems.map((item, index) => {
                const isOpen = openProcess === index;
                return (
                  <div key={item.title} className={isOpen ? "active" : ""}>
                    <button
                      type="button"
                      className="corporate-process-trigger"
                      aria-expanded={isOpen}
                      aria-controls={`process-description-${index}`}
                      onClick={() => setOpenProcess(isOpen ? -1 : index)}
                    >
                      <span>0{index + 1}</span>
                      <strong>{item.title}</strong>
                      <ChevronDown size={16} />
                    </button>
                    {isOpen && <p id={`process-description-${index}`}>{item.description}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="technology" className="corporate-section corporate-assurance">
          <div className="corporate-assurance-image"><Image src="/images/impact-compliance.jpg" alt="Industrial quality and compliance operations" fill sizes="(max-width: 900px) 100vw, 100vw" /></div>
          <div className="corporate-assurance-overlay" />
          <div className="corporate-assurance-content"><div className="corporate-section-label">Technology & Assurance</div><h2>Quality you can<br />measure.</h2><div className="corporate-assurance-grid">{assuranceItems.map((item) => <div key={item.title}><Check size={18} /><h3>{item.title}</h3><p>{item.description}</p></div>)}</div><Link className="corporate-outline-button" href="#traceability">View traceability <ArrowUpRight size={15} /></Link></div>
        </section>

        <section id="traceability" className="corporate-section corporate-traceability">
          <div><div className="corporate-section-label">Digital Traceability</div><h2>Every batch tracked.</h2></div>
          <div className="corporate-traceability-copy"><p>Illustrative workflow from generator pickup through stabilization, quality verification, and dispatch to a partner cement kiln.</p><Link className="corporate-text-link" href="/contact">Discuss a batch <ArrowUpRight size={16} /></Link></div>
        </section>

        <section id="contact" className="corporate-contact">
          <div><div className="corporate-section-label">Get In Touch</div><h2>Let&apos;s build a greener<br /><span>future together.</span></h2></div>
          <div className="corporate-contact-actions"><p>For waste generators, cement plants, and investors looking to build a more responsible industrial system.</p><Link className="corporate-button" href="/contact">Start a conversation <ArrowUpRight size={16} /></Link></div>
        </section>
      </main>

      <footer className="corporate-footer">
        <div className="corporate-footer-brand"><span className="corporate-logo-mark"><Leaf size={22} /></span><h3>SVD Eco Services</h3><p>Turning hazardous waste into clean industrial energy through responsible recovery and alternative fuel production.</p></div>
        <div><b>Company</b><Link href="/about">About</Link><Link href="#industries">Industries</Link><Link href="/contact">Contact</Link></div>
        <div><b>Solutions</b><Link href="#solutions">Waste recovery</Link><Link href="#process">Our process</Link><Link href="#technology">Assurance</Link></div>
        <div><b>Contact</b><span>Bidar, Kalaburagi, Karnataka</span><a href="mailto:svdeco963@gmail.com">svdeco963@gmail.com</a><a href="tel:9449579555">9449579555</a></div>
        <div className="corporate-footer-bottom">© {new Date().getFullYear()} SVD Eco Services. All rights reserved.</div>
      </footer>
    </div>
  );
}
