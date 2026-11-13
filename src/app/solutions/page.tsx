import type { Metadata } from "next";
import CorporateInteriorPage from "@/components/CorporateInteriorPage";

export const metadata: Metadata = {
  title: "Solutions",
  description: "SVD Eco Services solutions for hazardous waste recovery and alternative industrial fuel.",
};

export default function SolutionsPage() {
  return <CorporateInteriorPage type="solutions" />;
}
