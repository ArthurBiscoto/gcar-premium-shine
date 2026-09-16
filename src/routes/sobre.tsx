import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionHeading, WhatsAppLink } from "@/components/site/chrome";
import logoAsset from "@/assets/gcar-logo.jpg.asset.json";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre nós | G Car Estética Automotiva" },
      { name: "description", content: "Conheça a G Car Estética Automotiva: cuidado, critério e atenção verdadeira aos detalhes do seu veículo." },
      { property: "og:title", content: "Sobre nós | G Car Estética Automotiva" },
      { property: "og:description", content: "Por trás de cada carro, existe um cuidado." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <PageShell>
      <section className="py-20 sm:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8"><div className="relative mx-auto aspect-square w-full max-w-md"><img src={logoAsset.url} alt="Logotipo G Car Estética Automotiva" className="h-full w-full rounded-full bg-black object-contain p-10 ring-1 ring-primary/35" /></div><div className="flex flex-col justify-center"><SectionHeading eyebrow="Sobre a G Car" title={<>Por trás de cada carro,<br/><span className="text-primary">existe um cuidado.</span></>} description="A G Car Estética Automotiva nasce de uma ideia simples: cada veículo merece ser tratado com critério, respeito aos materiais e atenção verdadeira aos detalhes." /><p className="max-w-2xl leading-relaxed text-muted-foreground">Antes de indicar qualquer tratamento, buscamos entender o que o seu carro realmente precisa. Assim, o atendimento se torna mais próximo, transparente e direcionado ao melhor resultado possível.</p><WhatsAppLink className="mt-8 w-full sm:w-fit">Falar com a G Car</WhatsAppLink></div></div></section>
    </PageShell>
  );
}
