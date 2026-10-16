import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { siteConfig, navigation } from "@/lib/constants";
import { services } from "@/data/services";
import { solutions } from "@/data/solutions";

const footerServices = services.slice(0, 6);
const footerSolutions = solutions.slice(0, 6);

export function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <Image
              src="/brand/logo-icon-white.png"
              alt=""
              width={163}
              height={150}
              className="h-9 w-auto"
            />
            <span className="whitespace-nowrap font-display text-lg font-bold text-white">UNDER CONTROL</span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
            {siteConfig.tagline}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
            {siteConfig.description}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white">Navegação</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navigation.footer.navegacao.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white">Serviços</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {footerServices.map((service) => (
              <li key={service.slug}>
                <Link href={`/servicos/${service.slug}`} className="hover:text-gold">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white">Soluções</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {footerSolutions.map((solution) => (
              <li key={solution.slug}>
                <Link href={`/solucoes/${solution.slug}`} className="hover:text-gold">
                  {solution.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-4 py-8 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p>{siteConfig.phone.display} · {siteConfig.email}</p>
            <p>
              <a
                href={siteConfig.address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                {siteConfig.address.street}, {siteConfig.address.neighborhood} · {siteConfig.address.city}/{siteConfig.address.state}
              </a>
            </p>
            <p>{siteConfig.businessHours}</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            {navigation.footer.legal.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-gold">
                {item.label}
              </Link>
            ))}
            <span>© {new Date().getFullYear()} Under Control. Todos os direitos reservados.</span>
          </div>
        </Container>
      </div>
    </footer>
  );
}
