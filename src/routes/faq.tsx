import { createFileRoute } from "@tanstack/react-router";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { PageShell, SectionHeading, WhatsAppLink } from "@/components/site/chrome";
import { faqItems } from "@/lib/site";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Perguntas frequentes | G Car Estética Automotiva" },
      { name: "description", content: "Tire suas dúvidas sobre agendamento, prazos, veículos atendidos e formas de pagamento da G Car Estética Automotiva." },
      { property: "og:title", content: "Perguntas frequentes | G Car Estética Automotiva" },
      { property: "og:description", content: "Respostas para facilitar seu primeiro contato." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: Faq,
});

function Faq() {
  return (
    <PageShell>
      <section className="py-20 sm:py-28"><div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8"><div><SectionHeading eyebrow="Dúvidas" title="Perguntas frequentes" description="Respostas gerais para facilitar seu primeiro contato. Prazos e recomendações são confirmados após a avaliação do veículo." /><WhatsAppLink className="w-full sm:w-fit">Falar com a equipe</WhatsAppLink></div><Accordion.Root type="single" collapsible className="border-t border-border">{faqItems.map(([q,a]) => <Accordion.Item key={q} value={q} className="border-b border-border"><Accordion.Header><Accordion.Trigger className="group flex w-full items-center justify-between py-5 text-left font-display text-xl font-semibold uppercase"><span>{q}</span><ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform group-data-[state=open]:rotate-180" /></Accordion.Trigger></Accordion.Header><Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"><p className="pb-6 pr-10 text-sm leading-relaxed text-muted-foreground">{a}</p></Accordion.Content></Accordion.Item>)}</Accordion.Root></div></section>
    </PageShell>
  );
}
