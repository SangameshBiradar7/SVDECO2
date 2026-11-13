import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Leaf } from "lucide-react";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about SVD Eco Services and our mission to turn hazardous industrial waste into clean alternative fuel.",
};

export default function AboutPage() {
  return (
    <div className="corporate-site">
      <header className="corporate-header">
        <Link href="/" className="corporate-logo" aria-label="SVD Eco Services home">
          <span className="corporate-logo-mark"><Leaf size={22} /></span>
          <span><strong>SVD ECO</strong><small>Eco Services</small></span>
        </Link>
        <nav className="corporate-nav" aria-label="Main navigation">
          <Link href="/solutions">Solutions</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/#process">Process</Link>
          <Link className="active" href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link className="corporate-nav-cta" href="/contact">
            Get In Touch <ArrowUpRight size={14} />
          </Link>
        </nav>
      </header>
      <main>
        <About />
        <section className="corporate-interior-cta">
          <div>
            <p className="corporate-section-label">Work with us</p>
            <h2>Build a more responsible industrial future.</h2>
          </div>
          <Link className="corporate-button" href="/contact">
            Start a conversation <ArrowUpRight size={16} />
          </Link>
        </section>
      </main>
    </div>
  );
}
