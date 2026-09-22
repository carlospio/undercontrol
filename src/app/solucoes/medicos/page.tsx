import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SolutionPageTemplate } from "@/components/templates/SolutionPageTemplate";
import { getSolutionBySlug } from "@/data/solutions";
import { createMetadata } from "@/lib/seo";

const slug = "medicos";

export function generateMetadata(): Metadata {
  const solution = getSolutionBySlug(slug)!;
  return createMetadata({
    title: solution.seo.title,
    description: solution.seo.description,
    path: `/solucoes/${slug}`,
  });
}

export default function Page() {
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();
  return <SolutionPageTemplate solution={solution} />;
}
