import Link from "next/link";
import { BreadcrumbSchema, type BreadcrumbEntry } from "@/components/seo/BreadcrumbSchema";
import { Container } from "./Container";

export function Breadcrumb({ items }: { items: BreadcrumbEntry[] }) {
  const withHome: BreadcrumbEntry[] = [{ label: "Início", href: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="border-b border-border-soft/60 bg-cream py-4">
      <BreadcrumbSchema items={withHome} />
      <Container>
        <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
          {withHome.map((item, index) => {
            const isLast = index === withHome.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-2">
                {isLast ? (
                  <span aria-current="page" className="font-semibold text-ink">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="hover:text-ink">
                    {item.label}
                  </Link>
                )}
                {!isLast ? <span aria-hidden="true">/</span> : null}
              </li>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
}
