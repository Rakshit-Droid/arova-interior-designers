import type { Metadata } from "next";
import JournalIndex from "@/components/journal/JournalIndex";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Essays, field notes and material studies from the Arova studio in Hyderabad.",
};

export default function Page() {
  return <JournalIndex />;
}
