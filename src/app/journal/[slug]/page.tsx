import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { JOURNAL } from "@/lib/content";
import JournalArticle from "@/components/journal/JournalArticle";

export function generateStaticParams() {
  return JOURNAL.map((j) => ({ slug: j.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const j = JOURNAL.find((x) => x.slug === params.slug);
  if (!j) return { title: "Journal" };
  return { title: j.title, description: j.dek };
}

export default function Page({ params }: { params: { slug: string } }) {
  const article = JOURNAL.find((j) => j.slug === params.slug);
  if (!article) notFound();
  const idx = JOURNAL.findIndex((j) => j.slug === article.slug);
  const next = JOURNAL[(idx + 1) % JOURNAL.length];
  return <JournalArticle article={article} next={next} />;
}
