import type { Metadata } from "next";
import ProjectsIndex from "@/components/projects/ProjectsIndex";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "An archive of penthouses, villas, hospitality rooms and corporate interiors delivered by Arova in Telangana and beyond.",
};

export default function Page() {
  return <ProjectsIndex />;
}
