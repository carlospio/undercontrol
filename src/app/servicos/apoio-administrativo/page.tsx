import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { getServiceBySlug } from "@/data/services";
import { createMetadata } from "@/lib/seo";

const slug = "apoio-administrativo";

export function generateMetadata(): Metadata {
  const service = getServiceBySlug(slug)!;
  return createMetadata({
    title: service.seo.title,
    description: service.seo.description,
    path: `/servicos/${slug}`,
  });
}

export default function Page() {
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
