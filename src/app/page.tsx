"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import BigIdea from "@/components/BigIdea";
import HowItWorks from "@/components/HowItWorks";
import Technology from "@/components/Technology";
import BusinessModel from "@/components/BusinessModel";
import Traceability from "@/components/Traceability";
import CircularEconomy from "@/components/CircularEconomy";
import Impact from "@/components/Impact";
import RegionalFocus from "@/components/RegionalFocus";
import CustomerSegments from "@/components/CustomerSegments";
import WhySVD from "@/components/WhySVD";
import About from "@/components/About";
import Team from "@/components/Team";
import Roadmap from "@/components/Roadmap";
import Funding from "@/components/Funding";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-green">
      <Navbar />
      <Hero />
      <Problem />
      <BigIdea />
      <HowItWorks />
      <Technology />
      <BusinessModel />
      <Traceability />
      <CircularEconomy />
      <Impact />
      <RegionalFocus />
      <CustomerSegments />
      <WhySVD />
      <About />
      <Team />
      <Roadmap />
      <Funding />
      <Contact />
      <Footer />
    </main>
  );
}
