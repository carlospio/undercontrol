import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center bg-cream py-20">
      <Container className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-gold-dark">Erro 404</p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
          Esta página não foi encontrada.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
          O endereço acessado não existe ou foi movido. Volte para a página inicial ou explore
          nossos serviços.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/" variant="primary">
            Voltar para o início
          </Button>
          <Button href="/servicos" variant="light">
            Ver serviços
          </Button>
        </div>
      </Container>
    </section>
  );
}
