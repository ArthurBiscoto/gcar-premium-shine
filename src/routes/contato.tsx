import { createFileRoute } from "@tanstack/react-router";
import { Clock3, MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell, SectionHeading, WhatsAppLink } from "@/components/site/chrome";
import { ADDRESS, DIRECTIONS_URL, MAP_EMBED_URL } from "@/lib/site";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato e localização | G Car Estética Automotiva" },
      { name: "description", content: "Encontre a G Car Estética Automotiva em Almirante Tamandaré - PR. Veja o mapa, horários de atendimento e fale pelo WhatsApp." },
      { property: "og:title", content: "Contato e localização | G Car Estética Automotiva" },
      { property: "og:description", content: "Onde estamos e como falar com a G Car." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: Contato,
});

function Contato() {
  return (
    <PageShell>
      <section className="py-20 sm:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Contato" title="Onde estamos" description="Atendimento na unidade GCAR em Almirante Tamandaré. Veja o mapa, trace sua rota ou fale direto pelo WhatsApp." />
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-md border border-border bg-card p-6"><Clock3 className="text-primary"/><h2 className="mt-8 font-display text-2xl font-bold uppercase">Atendimento</h2><p className="mt-3 text-sm text-muted-foreground">Segunda a sexta<br/>07:00 — 19:00<br/>Sábado 08:00 — 16:00<br/><span className="text-foreground">Domingo fechado</span></p></div>
            <div className="rounded-md border border-border bg-card p-6"><MapPin className="text-primary"/><h2 className="mt-8 font-display text-2xl font-bold uppercase">Endereço</h2><address className="mt-3 text-sm not-italic leading-relaxed text-muted-foreground">{ADDRESS}</address><Button asChild size="xl" variant="premiumOutline" className="mt-5 h-11 w-full px-4"><a href={DIRECTIONS_URL} target="_blank" rel="noreferrer"><Navigation />Como chegar</a></Button><WhatsAppLink className="mt-3 h-11 w-full px-4">Falar no WhatsApp</WhatsAppLink></div>
          </div>
          <div className="overflow-hidden rounded-md border border-border bg-card"><iframe title="Mapa da localização da GCAR Estética Automotiva" src={MAP_EMBED_URL} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen className="h-full min-h-72 w-full" /></div>
        </div>
      </div></section>
    </PageShell>
  );
}
