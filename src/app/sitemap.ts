import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";
import { services } from "@/data/services";
import { solutions } from "@/data/solutions";
import { blogPosts, blogCategories } from "@/data/blog";

function url(path: string) {
  return `${siteConfig.url}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/sobre",
    "/servicos",
    "/solucoes",
    "/como-funciona",
    "/faq",
    "/blog",
    "/blog/categorias",
    "/contato",
  ].map((path) => ({
    url: url(path),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((service) => ({
    url: url(`/servicos/${service.slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const solutionRoutes = solutions.map((solution) => ({
    url: url(`/solucoes/${solution.slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const categoryRoutes = blogCategories.map((category) => ({
    url: url(`/blog/categorias/${category.slug}`),
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const postRoutes = blogPosts.map((post) => ({
    url: url(`/blog/${post.slug}`),
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...solutionRoutes,
    ...categoryRoutes,
    ...postRoutes,
  ];
}
