import type { Metadata } from "next";
import CorporateInteriorPage from "@/components/CorporateInteriorPage";

export const metadata: Metadata = {
  title: "Industries",
  description: "Industries served by SVD Eco Services through compliant waste recovery and alternative fuel pathways.",
};

export default function IndustriesPage() {
  return <CorporateInteriorPage type="industries" />;
}
