import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
        <div>
          <span className="mb-5 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-white/80">
            Assistência executiva remota
          </span>
          <h1 className="font-display text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
            Sua assistente remota <em className="italic text-gold">especializada</em>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/76 sm:text-lg">
            Tenha mais tempo para cuidar do que realmente importa. A Under Control cuida das suas
            tarefas administrativas e pessoais de forma eficiente, personalizada e profissional.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contato" variant="outline-dark" className="bg-white">
              Quero uma assistente
            </Button>
            <Button href={siteConfig.whatsapp.url} external variant="outline-light">
              Falar pelo WhatsApp
            </Button>
          </div>
          <p className="mt-5 text-xs uppercase tracking-[0.14em] text-white/50">
            Teste grátis · sem compromisso · atendimento humano
          </p>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl ring-1 ring-white/10">
            <Image
              src="/images/about-juliana.jpg"
              alt={`${siteConfig.ceo.name}, ${siteConfig.ceo.role.toLowerCase()} da Under Control`}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="absolute -bottom-6 left-1/2 w-[calc(100%-2rem)] -translate-x-1/2 rounded-2xl bg-surface p-5 shadow-[0_20px_40px_rgba(0,0,0,0.25)] sm:w-72">
            <p className="font-display text-base font-semibold text-ink">
              Sua rotina, finalmente, com espaço para respirar.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
