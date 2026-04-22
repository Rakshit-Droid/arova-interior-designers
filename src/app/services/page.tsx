import type { Metadata } from "next";
import ServicesPage from "@/components/services/ServicesPage";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Arova offers interior architecture, turnkey residences, hospitality, corporate interiors, bespoke furniture and art curation.",
};

export default function Page() {
  return <ServicesPage />;
}
