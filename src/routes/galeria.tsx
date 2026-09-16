import { createFileRoute } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell, SectionHeading } from "@/components/site/chrome";
import { galleryItems, INSTAGRAM_URL } from "@/lib/site";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria | G Car Estética Automotiva" },
      { name: "description", content: "Veja o cuidado da G Car Estética Automotiva em cada detalhe: polimento, higienização, proteção e acabamento." },
      { property: "og:title", content: "Galeria | G Car Estética Automotiva" },
      { property: "og:description", content: "Cuidado que aparece em cada detalhe." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/galeria" }],
  }),
  component: Galeria,
});

function Galeria() {
  return (
    <PageShell>
      <section className="py-20 sm:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><SectionHeading eyebrow="Nosso universo" title="Cuidado que aparece" /><Button asChild variant="premiumOutline" size="xl"><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><Instagram />Ver mais no Instagram</a></Button></div>
        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[230px] md:grid-cols-4">{galleryItems.map(({ src, alt, span }) => <div key={alt} className={`group overflow-hidden rounded-sm ${span}`}><img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" /></div>)}</div>
        <p className="mt-4 text-xs text-muted-foreground">Imagens ilustrativas temporárias. Envie registros reais da G Car para substituição.</p>
      </div></section>
    </PageShell>
  );
}
