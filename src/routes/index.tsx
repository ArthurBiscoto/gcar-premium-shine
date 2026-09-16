import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell, SectionHeading, WhatsAppLink } from "@/components/site/chrome";
import { advantages, heroImage, INSTAGRAM_URL, whatsappUrl, GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "G Car Estética Automotiva | Estética Automotiva Premium" },
      { name: "description", content: "Estética automotiva especializada. Cuide do seu veículo com quem entende de acabamento, proteção e detalhes." },
      { property: "og:title", content: "G Car Estética Automotiva | Estética Automotiva Premium" },
      { property: "og:description", content: "Cuidado, proteção e acabamento impecável para o seu veículo." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "AutoWash", name: "GCAR Estética Automotiva", sameAs: [INSTAGRAM_URL], telephone: "+55 41 98510-6370", address: { "@type": "PostalAddress", streetAddress: "R. Mario Straioto, 481", addressLocality: "Almirante Tamandaré", addressRegion: "PR", postalCode: "83511-535", addressCountry: "BR" }, geo: { "@type": "GeoCoordinates", latitude: -25.348639, longitude: -49.3018283 }, openingHours: ["Mo-Fr 07:00-19:00", "Sa 08:00-16:00"], aggregateRating: { "@type": "AggregateRating", ratingValue: GOOGLE_RATING, reviewCount: GOOGLE_REVIEW_COUNT } }) }],
  }),
  component: Index,
});

function Index() {
  return (
    <PageShell>
      <section className="relative flex min-h-[94svh] items-end overflow-hidden -mt-18 pt-18">
        <img src={heroImage} alt="Profissional realizando polimento em veículo preto" width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover object-[64%_center]" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/15" /><div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/25" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8"><div className="max-w-3xl">
          <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase text-primary"><span className="h-px w-8 bg-primary" />Estética automotiva de alto padrão</p>
          <h1 className="font-display text-6xl font-extrabold uppercase leading-[0.86] sm:text-8xl lg:text-9xl">Seu carro<br/><span className="text-primary">merece mais.</span></h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg">Estética automotiva especializada para quem busca cuidado, proteção e acabamento impecável.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><WhatsAppLink>Agendar pelo WhatsApp</WhatsAppLink><Button asChild size="xl" variant="premiumOutline"><Link to="/servicos">Conhecer nossos serviços <ArrowRight /></Link></Button></div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">{["Atendimento especializado", "Produtos de alta qualidade", "Acabamento premium"].map(item => <span key={item} className="flex items-center gap-2 text-xs text-foreground/75"><Check className="h-4 w-4 text-primary" />{item}</span>)}</div>
        </div></div>
      </section>

      <section className="border-y border-border bg-card/50 py-20 sm:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading eyebrow="O padrão G Car" title={<>Mais que estética.<br/><span className="text-primary">Cuidado em cada detalhe.</span></>} description="Não se trata apenas de limpar. Cada etapa é pensada para valorizar o veículo, preservar seus materiais e entregar um resultado que você percebe no primeiro olhar." />
        <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">{advantages.map(({ number, name, text, icon: Icon }) => <article key={number} className="group bg-card p-7 transition-colors hover:bg-surface-elevated"><div className="flex items-start justify-between"><span className="font-display text-sm font-bold text-primary">{number}</span><Icon className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-primary" /></div><h2 className="mt-12 font-display text-3xl font-bold uppercase">{name}</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p></article>)}</div>
      </div></section>

      <section className="relative overflow-hidden border-y border-primary/20 bg-primary py-16 text-primary-foreground sm:py-20"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8"><div><h2 className="max-w-3xl font-display text-4xl font-extrabold uppercase leading-none sm:text-6xl">Pronto para deixar seu carro em outro nível?</h2><p className="mt-4 max-w-2xl font-medium">Fale com nossa equipe e descubra o tratamento ideal para o seu veículo.</p></div><Button asChild size="xl" variant="secondary" className="w-full shrink-0 sm:w-auto"><a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle />Falar no WhatsApp</a></Button></div></section>
    </PageShell>
  );
}
