import type { Metadata } from "next";
import AboutPage from "@/components/about/AboutPage";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "The Arova studio — its principal, method, atelier and twelve-year archive.",
};

export default function Page() {
  return <AboutPage />;
}
