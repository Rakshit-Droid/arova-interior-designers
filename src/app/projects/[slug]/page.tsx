import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PROJECTS } from "@/lib/content";
import ProjectDetail from "@/components/projects/ProjectDetail";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const p = PROJECTS.find((x) => x.slug === params.slug);
  if (!p) return { title: "Project" };
  return {
    title: p.title,
    description: p.lead,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const idx = PROJECTS.findIndex((p) => p.slug === project.slug);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  return <ProjectDetail project={project} next={next} />;
}
