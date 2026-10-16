import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";
import { services } from "@/data/services";
import { solutions } from "@/data/solutions";

const featuredServices = services.slice(0, 6);
const featuredSolutions = solutions.slice(0, 6);

function NavDropdown({
  label,
  href,
  items,
  viewAllHref,
  viewAllLabel,
}: {
  label: string;
  href: string;
  items: { name: string; slug: string }[];
  viewAllHref: string;
  viewAllLabel: string;
}) {
  return (
    <div className="group relative">
      <Link
        href={href}
        className="flex items-center gap-1 py-2 text-sm font-semibold text-ink transition-colors hover:text-gold-dark"
      >
        {label}
        <span aria-hidden="true" className="text-xs">▾</span>
      </Link>
      <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 translate-y-1 rounded-2xl border border-border-soft/60 bg-surface p-2 opacity-0 shadow-[0_20px_40px_rgba(33,17,46,0.12)] transition-all duration-150 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        <ul>
          {items.map((item) => (
            <li key={item.slug}>
              <Link
                href={`${href}/${item.slug}`}
                className="block rounded-lg px-3 py-2 text-sm text-ink hover:bg-surface-alt"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={viewAllHref}
          className="mt-1 block rounded-lg px-3 py-2 text-sm font-bold text-gold-dark hover:bg-surface-alt"
        >
          {viewAllLabel}
        </Link>
      </div>
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border-soft/60 bg-cream/95 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/logo-icon-ink.png"
            alt=""
            width={163}
            height={150}
            className="h-10 w-auto"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="whitespace-nowrap font-display text-lg font-bold tracking-wide text-ink">
              UNDER CONTROL
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-dark">
              Assistente Remota
            </span>
          </span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
          <Link href="/sobre" className="text-sm font-semibold text-ink hover:text-gold-dark">
            Sobre
          </Link>
          <NavDropdown
            label="Serviços"
            href="/servicos"
            items={featuredServices}
            viewAllHref="/servicos"
            viewAllLabel="Ver todos os serviços"
          />
          <NavDropdown
            label="Soluções"
            href="/solucoes"
            items={featuredSolutions}
            viewAllHref="/solucoes"
            viewAllLabel="Ver todas as soluções"
          />
          <Link href="/como-funciona" className="text-sm font-semibold text-ink hover:text-gold-dark">
            Como funciona
          </Link>
          <Link href="/faq" className="text-sm font-semibold text-ink hover:text-gold-dark">
            FAQ
          </Link>
          <Link href="/blog" className="text-sm font-semibold text-ink hover:text-gold-dark">
            Blog
          </Link>
          <Link href="/contato" className="text-sm font-semibold text-ink hover:text-gold-dark">
            Contato
          </Link>
        </nav>

        <div className="hidden lg:block">
          <Button href="/contato" variant="primary">
            Falar com a equipe
          </Button>
        </div>

        <MobileMenu />
      </Container>
    </header>
  );
}
