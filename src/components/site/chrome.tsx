import { Link } from "@tanstack/react-router";
import { Menu, MessageCircle, Star, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/gcar-logo.jpg.asset.json";
import { INSTAGRAM_URL, navItems, whatsappUrl } from "@/lib/site";

export function WhatsAppLink({ children, message, variant = "premium", className = "" }: { children: React.ReactNode; message?: string; variant?: "premium" | "premiumOutline"; className?: string }) {
  return <Button asChild size="xl" variant={variant} className={className}><a href={whatsappUrl(message)} target="_blank" rel="noreferrer"><MessageCircle />{children}</a></Button>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/88 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" aria-label="G Car — início" className="flex items-center gap-3">
          <img src={logoAsset.url} alt="G Car Estética Automotiva" className="h-11 w-auto rounded-md bg-black object-contain ring-1 ring-primary/30" />
          <span className="hidden font-display text-xl font-bold uppercase sm:block">G Car <span className="text-primary">Estética</span></span>
        </Link>
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Navegação principal">
          {navItems.map(([label, href]) => <Link key={href} to={href} className="text-xs font-semibold uppercase text-muted-foreground transition-colors hover:text-primary" activeProps={{ className: "text-xs font-semibold uppercase text-primary" }}>{label}</Link>)}
        </nav>
        <div className="hidden lg:block"><WhatsAppLink className="h-11 px-5">Agendar pelo WhatsApp</WhatsAppLink></div>
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open && <nav className="border-t border-border bg-background px-5 py-6 lg:hidden" aria-label="Menu mobile">{navItems.map(([label, href]) => <Link key={href} to={href} onClick={() => setOpen(false)} className="block border-b border-border py-3 font-display text-xl font-semibold uppercase">{label}</Link>)}<WhatsAppLink className="mt-6 w-full">Agendar pelo WhatsApp</WhatsAppLink></nav>}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10"><div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-center"><div className="flex items-center gap-3"><img src={logoAsset.url} alt="G Car" className="h-12 w-auto rounded-md bg-black object-contain ring-1 ring-primary/20"/><div><p className="font-display text-xl font-bold uppercase">G Car</p><p className="text-xs uppercase text-primary">Estética Automotiva</p></div></div><nav className="flex flex-wrap gap-x-6 gap-y-3">{navItems.map(([label, href]) => <Link key={href} to={href} className="text-xs font-semibold uppercase text-muted-foreground hover:text-primary">{label}</Link>)}<a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="text-xs font-semibold uppercase text-muted-foreground hover:text-primary">Instagram</a><a href={whatsappUrl()} target="_blank" rel="noreferrer" className="text-xs font-semibold uppercase text-muted-foreground hover:text-primary">WhatsApp</a></nav></div><div className="border-t border-border pt-6 text-xs text-muted-foreground">© 2026 G Car Estética Automotiva. Todos os direitos reservados.</div></div></footer>
  );
}

export function FloatingWhatsApp() {
  return <a href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="Agendar pelo WhatsApp" className="animate-subtle-pulse fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-premium transition-transform hover:scale-105 sm:h-16 sm:w-16"><MessageCircle className="h-7 w-7" /></a>;
}

export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: React.ReactNode; description?: string }) {
  return <div className="mb-10 max-w-3xl"><p className="mb-3 text-xs font-bold uppercase text-primary">{eyebrow}</p><h1 className="font-display text-4xl font-bold uppercase leading-none sm:text-6xl">{title}</h1>{description && <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">{description}</p>}</div>;
}

export function Stars({ rating, className = "" }: { rating: number; className?: string }) {
  return <div className={`flex items-center gap-0.5 ${className}`} aria-label={`${rating} de 5 estrelas`}>{[1,2,3,4,5].map(i => <Star key={i} className={`h-4 w-4 ${i <= Math.round(rating) ? "fill-primary text-primary" : "text-muted-foreground"}`} />)}</div>;
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-18">{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
