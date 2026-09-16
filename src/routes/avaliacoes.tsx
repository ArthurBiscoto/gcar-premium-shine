import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell, SectionHeading, Stars } from "@/components/site/chrome";
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT, GOOGLE_REVIEWS_URL, googleReviews } from "@/lib/site";

export const Route = createFileRoute("/avaliacoes")({
  head: () => ({
    meta: [
      { title: "Avaliações | G Car Estética Automotiva" },
      { name: "description", content: "Veja as avaliações reais dos clientes da G Car Estética Automotiva no Google: nota 5,0 e comentários de quem confia." },
      { property: "og:title", content: "Avaliações | G Car Estética Automotiva" },
      { property: "og:description", content: "O que nossos clientes dizem no Google." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/avaliacoes" }],
  }),
  component: Avaliacoes,
});

function Avaliacoes() {
  return (
    <PageShell>
      <section className="py-20 sm:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Avaliações reais no Google" title="O que nossos clientes dizem" description="Avaliações publicadas por clientes no perfil oficial da GCAR no Google." />
        <div className="mb-8 flex flex-col items-start gap-5 rounded-md border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-center gap-5"><span className="font-display text-6xl font-extrabold leading-none text-primary">{GOOGLE_RATING.toFixed(1)}</span><div><Stars rating={GOOGLE_RATING} /><p className="mt-2 text-sm text-muted-foreground">{GOOGLE_REVIEW_COUNT} avaliações no Google</p></div></div>
          <Button asChild size="xl" variant="premiumOutline" className="w-full sm:w-auto"><a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer">Ver todas no Google <ArrowRight /></a></Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2">{googleReviews.map((review) => <article key={review.author} className="rounded-md border border-border bg-card p-7 transition-colors hover:bg-surface-elevated"><div className="flex items-center justify-between"><Stars rating={review.rating} /><span className="text-xs text-muted-foreground">{review.when}</span></div><p className="mt-5 text-sm leading-relaxed text-muted-foreground">“{review.text}”</p><p className="mt-6 font-display text-lg font-semibold uppercase">{review.author}</p><span className="text-xs text-muted-foreground">Avaliação publicada no Google</span></article>)}</div>
      </div></section>
    </PageShell>
  );
}
