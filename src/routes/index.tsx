import { createFileRoute } from "@tanstack/react-router";
import * as Accordion from "@radix-ui/react-accordion";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";
import type { ComponentType } from "react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/gcar-logo.jpg.asset.json";
import heroImage from "@/assets/gcar-hero.jpg";
import polishingImage from "@/assets/service-polimento.jpg";
import interiorImage from "@/assets/service-higienizacao.jpg";
import protectionImage from "@/assets/service-protecao.jpg";
import washImage from "@/assets/service-lavagem.jpg";

const WHATSAPP_NUMBER = "5541985106370";
const INSTAGRAM_URL = "https://www.instagram.com/gcaresteticaautomotivaa/";

const PLACE_ID = "ChIJz2m3RCXh3JQRr9SijGZm4Vc";
const ADDRESS = "R. Mario Straioto, 481 — Lamenha Grande, Almirante Tamandaré - PR, 83511-535";
const GOOGLE_REVIEWS_URL = "https://search.google.com/local/reviews?placeid=" + PLACE_ID;
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination_place_id=${PLACE_ID}&destination=${encodeURIComponent("GCAR ESTÉTICA AUTOMOTIVA, " + ADDRESS)}`;
const MAP_EMBED_URL = `https://www.google.com/maps/embed/v1/place?key=${import.meta.env["VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY"]}&q=place_id:${PLACE_ID}&language=pt-BR`;
const GOOGLE_RATING = 5.0;
const GOOGLE_REVIEW_COUNT = 4;

const googleReviews = [
  { author: "Juliano Brito", when: "um mês atrás", rating: 5, text: "Serviço sensacional, superou as expectativas, eu sou muito chato pra limpeza do carro, em 3 anos é a primeira vez que mando lavar fora e ficou espetacular, vidro mais cristalino que já vi, tudo feito no capricho, recomendo sem medo!!!" },
  { author: "Lucas Lima", when: "3 meses atrás", rating: 5, text: "Já levei meu carro em vários Lava car da região mas sempre deixavam a desejar em algo, eu que sou chato com o carro foi o único lugar que me surpreendeu, detalhista mesmo, super indico 👏🏻" },
  { author: "Marcelo Bahl", when: "3 meses atrás", rating: 5, text: "Atendimento top, e serviço realizado foi sensacional. Preço compatível com o mercado, quer da um UP no carro? O cara é diferenciado." },
  { author: "Rafael Freitas", when: "2 meses atrás", rating: 5, text: "Fez a limpeza completa interna e externa no capricho, recomendo para todos aqui do Lamenha grande 🤝" },
];

const whatsappUrl = (message = "Olá! Gostaria de agendar uma avaliação para o meu veículo.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const services = [
  { name: "Polimento automotivo", image: polishingImage, description: "Correção de imperfeições e recuperação do brilho da pintura.", benefit: "Mais profundidade, reflexo e presença." },
  { name: "Higienização interna", image: interiorImage, description: "Limpeza minuciosa dos principais revestimentos internos.", benefit: "Interior renovado e mais agradável." },
  { name: "Proteção de pintura", image: protectionImage, description: "Tratamento para reforçar o brilho e ajudar na conservação.", benefit: "Beleza protegida por mais tempo." },
  { name: "Lavagem detalhada", image: washImage, description: "Cuidado criterioso em áreas que uma lavagem comum não alcança.", benefit: "Limpeza uniforme em cada detalhe." },
];

const navItems = [
  ["Início", "#inicio"], ["Serviços", "#servicos"], ["Sobre nós", "#sobre"],
  ["Galeria", "#galeria"], ["Avaliações", "#avaliacoes"], ["FAQ", "#faq"], ["Contato", "#contato"],
];

const advantages: Array<{ number: string; name: string; text: string; icon: ComponentType<{ className?: string }> }> = [
  { number: "01", name: "Cuidado", text: "Cada veículo recebe atenção individual.", icon: Sparkles },
  { number: "02", name: "Qualidade", text: "Técnicas adequadas para cada acabamento.", icon: Target },
  { number: "03", name: "Proteção", text: "Tratamentos pensados para preservar.", icon: ShieldCheck },
  { number: "04", name: "Resultado", text: "Acabamento visual impecável.", icon: Zap },
];

const galleryItems = [
  { src: heroImage, alt: "Polimento profissional", span: "col-span-2 row-span-2" },
  { src: interiorImage, alt: "Detalhamento interno", span: "row-span-1" },
  { src: protectionImage, alt: "Proteção da pintura", span: "row-span-2" },
  { src: washImage, alt: "Lavagem detalhada", span: "row-span-2" },
  { src: polishingImage, alt: "Correção de pintura", span: "row-span-1" },
];

const faqItems: Array<[string, string]> = [
  ["Quanto tempo demora o serviço?", "O prazo varia conforme o serviço e as condições do veículo. Nossa equipe confirma a estimativa durante o atendimento."],
  ["Preciso agendar?", "Recomendamos o agendamento para garantir disponibilidade e o tempo necessário para cuidar do seu veículo."],
  ["Quais veículos vocês atendem?", "Fale com a equipe e informe o modelo do seu veículo para confirmarmos o atendimento."],
  ["Quais são as formas de pagamento?", "Consulte as opções disponíveis diretamente com a equipe no momento do orçamento."],
  ["Vocês fazem serviços personalizados?", "A recomendação é feita conforme a necessidade observada em cada veículo."],
  ["Como faço para agendar?", "Clique em qualquer botão de WhatsApp do site e envie sua mensagem. A equipe dará sequência ao atendimento."],
];

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

function WhatsAppLink({ children, message, variant = "premium", className = "" }: { children: React.ReactNode; message?: string; variant?: "premium" | "premiumOutline"; className?: string }) {
  return <Button asChild size="xl" variant={variant} className={className}><a href={whatsappUrl(message)} target="_blank" rel="noreferrer"><MessageCircle />{children}</a></Button>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/88 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#inicio" aria-label="G Car — início" className="flex items-center gap-3">
          <img src={logoAsset.url} alt="G Car Estética Automotiva" className="h-12 w-12 rounded-full bg-black object-contain p-1 ring-1 ring-primary/30" />
          <span className="hidden font-display text-xl font-bold uppercase sm:block">G Car <span className="text-primary">Estética</span></span>
        </a>
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Navegação principal">
          {navItems.map(([label, href]) => <a key={href} href={href} className="text-xs font-semibold uppercase text-muted-foreground transition-colors hover:text-primary">{label}</a>)}
        </nav>
        <div className="hidden lg:block"><WhatsAppLink className="h-11 px-5">Agendar pelo WhatsApp</WhatsAppLink></div>
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open && <nav className="border-t border-border bg-background px-5 py-6 lg:hidden" aria-label="Menu mobile">{navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="block border-b border-border py-3 font-display text-xl font-semibold uppercase">{label}</a>)}<WhatsAppLink className="mt-6 w-full">Agendar pelo WhatsApp</WhatsAppLink></nav>}
    </header>
  );
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: React.ReactNode; description?: string }) {
  return <div className="mb-10 max-w-3xl"><p className="mb-3 text-xs font-bold uppercase text-primary">{eyebrow}</p><h2 className="font-display text-4xl font-bold uppercase leading-none sm:text-6xl">{title}</h2>{description && <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">{description}</p>}</div>;
}

function Stars({ rating, className = "" }: { rating: number; className?: string }) {
  return <div className={`flex items-center gap-0.5 ${className}`} aria-label={`${rating} de 5 estrelas`}>{[1,2,3,4,5].map(i => <Star key={i} className={`h-4 w-4 ${i <= Math.round(rating) ? "fill-primary text-primary" : "text-muted-foreground"}`} />)}</div>;
}

function Index() {
  return <div className="min-h-screen bg-background text-foreground"><Header />
    <main>
      <section id="inicio" className="relative flex min-h-[94svh] items-end overflow-hidden pt-18">
        <img src={heroImage} alt="Profissional realizando polimento em veículo preto" width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover object-[64%_center]" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/15" /><div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/25" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8"><div className="max-w-3xl">
          <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase text-primary"><span className="h-px w-8 bg-primary" />Estética automotiva de alto padrão</p>
          <h1 className="font-display text-6xl font-extrabold uppercase leading-[0.86] sm:text-8xl lg:text-9xl">Seu carro<br/><span className="text-primary">merece mais.</span></h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg">Estética automotiva especializada para quem busca cuidado, proteção e acabamento impecável.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><WhatsAppLink>Agendar pelo WhatsApp</WhatsAppLink><Button asChild size="xl" variant="premiumOutline"><a href="#servicos">Conhecer nossos serviços <ArrowDown /></a></Button></div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">{["Atendimento especializado", "Produtos de alta qualidade", "Acabamento premium"].map(item => <span key={item} className="flex items-center gap-2 text-xs text-foreground/75"><Check className="h-4 w-4 text-primary" />{item}</span>)}</div>
        </div></div>
      </section>

      <section className="border-y border-border bg-card/50 py-20 sm:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading eyebrow="O padrão G Car" title={<>Mais que estética.<br/><span className="text-primary">Cuidado em cada detalhe.</span></>} description="Não se trata apenas de limpar. Cada etapa é pensada para valorizar o veículo, preservar seus materiais e entregar um resultado que você percebe no primeiro olhar." />
        <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">{advantages.map(({ number, name, text, icon: Icon }) => <article key={number} className="group bg-card p-7 transition-colors hover:bg-surface-elevated"><div className="flex items-start justify-between"><span className="font-display text-sm font-bold text-primary">{number}</span><Icon className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-primary" /></div><h3 className="mt-12 font-display text-3xl font-bold uppercase">{name}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p></article>)}</div>
      </div></section>

      <section id="servicos" className="py-20 sm:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading eyebrow="Tratamentos" title="Nossos serviços" description="Uma seleção inicial de cuidados automotivos. A indicação ideal é definida após entendermos o estado e a necessidade do seu veículo." />
        <div className="grid gap-5 md:grid-cols-2">{services.map((service) => <article key={service.name} className="group overflow-hidden rounded-md border border-border bg-card"><div className="aspect-[4/3] overflow-hidden"><img src={service.image} alt={service.name} width={1200} height={912} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" /></div><div className="p-6 sm:p-8"><h3 className="font-display text-3xl font-bold uppercase">{service.name}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p><p className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary"><Check className="h-4 w-4" />{service.benefit}</p><Button asChild variant="premiumOutline" size="xl" className="mt-6 w-full sm:w-auto"><a href={whatsappUrl(`Olá! Gostaria de saber mais sobre o serviço de ${service.name}.`)} target="_blank" rel="noreferrer">Quero esse serviço <ArrowRight /></a></Button></div></article>)}</div>
        <p className="mt-5 text-center text-xs text-muted-foreground">Serviços e imagens apresentados como base inicial; confirme o tratamento ideal pelo WhatsApp.</p>
      </div></section>


      <section id="galeria" className="py-20 sm:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><SectionHeading eyebrow="Nosso universo" title="Cuidado que aparece" /><Button asChild variant="premiumOutline" size="xl"><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><Instagram />Ver mais no Instagram</a></Button></div>
        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[230px] md:grid-cols-4">{galleryItems.map(({ src, alt, span }) => <div key={alt} className={`group overflow-hidden rounded-sm ${span}`}><img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" /></div>)}</div>
        <p className="mt-4 text-xs text-muted-foreground">Imagens ilustrativas temporárias. Envie registros reais da G Car para substituição.</p>
      </div></section>

      <section id="sobre" className="border-y border-border bg-card/50 py-20 sm:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8"><div className="relative mx-auto aspect-square w-full max-w-md"><img src={logoAsset.url} alt="Logotipo G Car Estética Automotiva" className="h-full w-full rounded-full bg-black object-contain p-10 ring-1 ring-primary/35" /></div><div className="flex flex-col justify-center"><SectionHeading eyebrow="Sobre a G Car" title={<>Por trás de cada carro,<br/><span className="text-primary">existe um cuidado.</span></>} description="A G Car Estética Automotiva nasce de uma ideia simples: cada veículo merece ser tratado com critério, respeito aos materiais e atenção verdadeira aos detalhes." /><p className="max-w-2xl leading-relaxed text-muted-foreground">Antes de indicar qualquer tratamento, buscamos entender o que o seu carro realmente precisa. Assim, o atendimento se torna mais próximo, transparente e direcionado ao melhor resultado possível.</p><WhatsAppLink className="mt-8 w-full sm:w-fit">Falar com a G Car</WhatsAppLink></div></div></section>

      <section id="avaliacoes" className="py-20 sm:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Avaliações reais no Google" title="O que nossos clientes dizem" description="Avaliações publicadas por clientes no perfil oficial da GCAR no Google." />
        <div className="mb-8 flex flex-col items-start gap-5 rounded-md border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-center gap-5"><span className="font-display text-6xl font-extrabold leading-none text-primary">{GOOGLE_RATING.toFixed(1)}</span><div><Stars rating={GOOGLE_RATING} /><p className="mt-2 text-sm text-muted-foreground">{GOOGLE_REVIEW_COUNT} avaliações no Google</p></div></div>
          <Button asChild size="xl" variant="premiumOutline" className="w-full sm:w-auto"><a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer">Ver todas no Google <ArrowRight /></a></Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2">{googleReviews.map((review) => <article key={review.author} className="rounded-md border border-border bg-card p-7 transition-colors hover:bg-surface-elevated"><div className="flex items-center justify-between"><Stars rating={review.rating} /><span className="text-xs text-muted-foreground">{review.when}</span></div><p className="mt-5 text-sm leading-relaxed text-muted-foreground">“{review.text}”</p><p className="mt-6 font-display text-lg font-semibold uppercase">{review.author}</p><span className="text-xs text-muted-foreground">Avaliação publicada no Google</span></article>)}</div>
      </div></section>

      <section className="relative overflow-hidden border-y border-primary/20 bg-primary py-16 text-primary-foreground sm:py-20"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8"><div><h2 className="max-w-3xl font-display text-4xl font-extrabold uppercase leading-none sm:text-6xl">Pronto para deixar seu carro em outro nível?</h2><p className="mt-4 max-w-2xl font-medium">Fale com nossa equipe e descubra o tratamento ideal para o seu veículo.</p></div><Button asChild size="xl" variant="secondary" className="w-full shrink-0 sm:w-auto"><a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle />Falar no WhatsApp</a></Button></div></section>

      <section id="faq" className="py-20 sm:py-28"><div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8"><SectionHeading eyebrow="Dúvidas" title="Perguntas frequentes" description="Respostas gerais para facilitar seu primeiro contato. Prazos e recomendações são confirmados após a avaliação do veículo." /><Accordion.Root type="single" collapsible className="border-t border-border">{faqItems.map(([q,a]) => <Accordion.Item key={q} value={q} className="border-b border-border"><Accordion.Header><Accordion.Trigger className="group flex w-full items-center justify-between py-5 text-left font-display text-xl font-semibold uppercase"><span>{q}</span><ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform group-data-[state=open]:rotate-180" /></Accordion.Trigger></Accordion.Header><Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"><p className="pb-6 pr-10 text-sm leading-relaxed text-muted-foreground">{a}</p></Accordion.Content></Accordion.Item>)}</Accordion.Root></div></section>

      <section id="contato" className="border-t border-border bg-card/50 py-20 sm:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Contato" title="Onde estamos" description="Atendimento na unidade GCAR em Almirante Tamandaré. Veja o mapa, trace sua rota ou fale direto pelo WhatsApp." />
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-md border border-border bg-card p-6"><Clock3 className="text-primary"/><h3 className="mt-8 font-display text-2xl font-bold uppercase">Atendimento</h3><p className="mt-3 text-sm text-muted-foreground">Segunda a sexta<br/>07:00 — 19:00<br/>Sábado 08:00 — 16:00<br/><span className="text-foreground">Domingo fechado</span></p></div>
            <div className="rounded-md border border-border bg-card p-6"><MapPin className="text-primary"/><h3 className="mt-8 font-display text-2xl font-bold uppercase">Endereço</h3><address className="mt-3 text-sm not-italic leading-relaxed text-muted-foreground">{ADDRESS}</address><Button asChild size="xl" variant="premiumOutline" className="mt-5 h-11 w-full px-4"><a href={DIRECTIONS_URL} target="_blank" rel="noreferrer"><Navigation />Como chegar</a></Button><WhatsAppLink className="mt-3 h-11 w-full px-4">Falar no WhatsApp</WhatsAppLink></div>
          </div>
          <div className="overflow-hidden rounded-md border border-border bg-card"><iframe title="Mapa da localização da GCAR Estética Automotiva" src={MAP_EMBED_URL} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen className="h-full min-h-72 w-full" /></div>
        </div>
      </div></section>
    </main>
    <footer className="border-t border-border py-10"><div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-center"><div className="flex items-center gap-3"><img src={logoAsset.url} alt="G Car" className="h-14 w-14 rounded-full bg-black object-contain p-1"/><div><p className="font-display text-xl font-bold uppercase">G Car</p><p className="text-xs uppercase text-primary">Estética Automotiva</p></div></div><nav className="flex flex-wrap gap-x-6 gap-y-3">{navItems.slice(0,4).map(([label,href]) => <a key={href} href={href} className="text-xs font-semibold uppercase text-muted-foreground hover:text-primary">{label}</a>)}<a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="text-xs font-semibold uppercase text-muted-foreground hover:text-primary">Instagram</a><a href={whatsappUrl()} target="_blank" rel="noreferrer" className="text-xs font-semibold uppercase text-muted-foreground hover:text-primary">WhatsApp</a></nav></div><div className="border-t border-border pt-6 text-xs text-muted-foreground">© 2026 G Car Estética Automotiva. Todos os direitos reservados.</div></div></footer>
    <a href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="Agendar pelo WhatsApp" className="animate-subtle-pulse fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-premium transition-transform hover:scale-105 sm:h-16 sm:w-16"><MessageCircle className="h-7 w-7" /></a>
  </div>;
}