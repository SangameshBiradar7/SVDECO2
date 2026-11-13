import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact SVD Eco Services about hazardous waste recovery, alternative fuel, and industrial partnerships.",
};

export default function ContactRoute() {
  return <ContactPage />;
}
