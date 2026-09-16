import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell, SectionHeading } from "@/components/site/chrome";
import { services, whatsappUrl } from "@/lib/site";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços | G Car Estética Automotiva" },
      { name: "description", content: "Polimento automotivo, higienização interna, proteção de pintura e lavagem detalhada. Conheça os serviços da G Car Estética Automotiva." },
      { property: "og:title", content: "Serviços | G Car Estética Automotiva" },
      { property: "og:description", content: "Tratamentos de estética automotiva com acabamento premium." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/servicos" }],
  }),
  component: Servicos,
});

function Servicos() {
  return (
    <PageShell>
      <section className="py-20 sm:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading eyebrow="Tratamentos" title="Nossos serviços" description="Uma seleção inicial de cuidados automotivos. A indicação ideal é definida após entendermos o estado e a necessidade do seu veículo." />
        <div className="grid gap-5 md:grid-cols-2">{services.map((service) => <article key={service.name} className="group overflow-hidden rounded-md border border-border bg-card"><div className="aspect-[4/3] overflow-hidden"><img src={service.image} alt={service.name} width={1200} height={912} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" /></div><div className="p-6 sm:p-8"><h2 className="font-display text-3xl font-bold uppercase">{service.name}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p><p className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary"><Check className="h-4 w-4" />{service.benefit}</p><Button asChild variant="premiumOutline" size="xl" className="mt-6 w-full sm:w-auto"><a href={whatsappUrl(`Olá! Gostaria de saber mais sobre o serviço de ${service.name}.`)} target="_blank" rel="noreferrer">Quero esse serviço <ArrowRight /></a></Button></div></article>)}</div>
        <p className="mt-5 text-center text-xs text-muted-foreground">Serviços e imagens apresentados como base inicial; confirme o tratamento ideal pelo WhatsApp.</p>
      </div></section>
    </PageShell>
  );
}
