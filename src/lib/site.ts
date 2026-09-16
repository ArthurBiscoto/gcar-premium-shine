import type { ComponentType } from "react";
import { ShieldCheck, Sparkles, Target, Zap } from "lucide-react";
import heroImage from "@/assets/gcar-hero.jpg";
import polishingImage from "@/assets/service-polimento.jpg";
import interiorImage from "@/assets/service-higienizacao.jpg";
import protectionImage from "@/assets/service-protecao.jpg";
import washImage from "@/assets/service-lavagem.jpg";

export const WHATSAPP_NUMBER = "5541985106370";
export const INSTAGRAM_URL = "https://www.instagram.com/gcaresteticaautomotivaa/";

export const PLACE_ID = "ChIJz2m3RCXh3JQRr9SijGZm4Vc";
export const ADDRESS = "R. Mario Straioto, 481 — Lamenha Grande, Almirante Tamandaré - PR, 83511-535";
export const GOOGLE_REVIEWS_URL = "https://search.google.com/local/reviews?placeid=" + PLACE_ID;
export const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination_place_id=${PLACE_ID}&destination=${encodeURIComponent("GCAR ESTÉTICA AUTOMOTIVA, " + ADDRESS)}`;
export const MAP_EMBED_URL = `https://www.google.com/maps/embed/v1/place?key=${import.meta.env["VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY"]}&q=place_id:${PLACE_ID}&language=pt-BR`;
export const GOOGLE_RATING = 5.0;
export const GOOGLE_REVIEW_COUNT = 4;

export const googleReviews = [
  { author: "Juliano Brito", when: "um mês atrás", rating: 5, text: "Serviço sensacional, superou as expectativas, eu sou muito chato pra limpeza do carro, em 3 anos é a primeira vez que mando lavar fora e ficou espetacular, vidro mais cristalino que já vi, tudo feito no capricho, recomendo sem medo!!!" },
  { author: "Lucas Lima", when: "3 meses atrás", rating: 5, text: "Já levei meu carro em vários Lava car da região mas sempre deixavam a desejar em algo, eu que sou chato com o carro foi o único lugar que me surpreendeu, detalhista mesmo, super indico 👏🏻" },
  { author: "Marcelo Bahl", when: "3 meses atrás", rating: 5, text: "Atendimento top, e serviço realizado foi sensacional. Preço compatível com o mercado, quer da um UP no carro? O cara é diferenciado." },
  { author: "Rafael Freitas", when: "2 meses atrás", rating: 5, text: "Fez a limpeza completa interna e externa no capricho, recomendo para todos aqui do Lamenha grande 🤝" },
];

export const whatsappUrl = (message = "Olá! Gostaria de agendar uma avaliação para o meu veículo.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const services = [
  { name: "Polimento automotivo", image: polishingImage, description: "Correção de imperfeições e recuperação do brilho da pintura.", benefit: "Mais profundidade, reflexo e presença." },
  { name: "Higienização interna", image: interiorImage, description: "Limpeza minuciosa dos principais revestimentos internos.", benefit: "Interior renovado e mais agradável." },
  { name: "Proteção de pintura", image: protectionImage, description: "Tratamento para reforçar o brilho e ajudar na conservação.", benefit: "Beleza protegida por mais tempo." },
  { name: "Lavagem detalhada", image: washImage, description: "Cuidado criterioso em áreas que uma lavagem comum não alcança.", benefit: "Limpeza uniforme em cada detalhe." },
];

export const navItems: Array<[string, string]> = [
  ["Início", "/"], ["Serviços", "/servicos"], ["Sobre nós", "/sobre"],
  ["Galeria", "/galeria"], ["Avaliações", "/avaliacoes"], ["FAQ", "/faq"], ["Contato", "/contato"],
];

export const advantages: Array<{ number: string; name: string; text: string; icon: ComponentType<{ className?: string }> }> = [
  { number: "01", name: "Cuidado", text: "Cada veículo recebe atenção individual.", icon: Sparkles },
  { number: "02", name: "Qualidade", text: "Técnicas adequadas para cada acabamento.", icon: Target },
  { number: "03", name: "Proteção", text: "Tratamentos pensados para preservar.", icon: ShieldCheck },
  { number: "04", name: "Resultado", text: "Acabamento visual impecável.", icon: Zap },
];

export const galleryItems = [
  { src: heroImage, alt: "Polimento profissional", span: "col-span-2 row-span-2" },
  { src: interiorImage, alt: "Detalhamento interno", span: "row-span-1" },
  { src: protectionImage, alt: "Proteção da pintura", span: "row-span-2" },
  { src: washImage, alt: "Lavagem detalhada", span: "row-span-2" },
  { src: polishingImage, alt: "Correção de pintura", span: "row-span-1" },
];

export const faqItems: Array<[string, string]> = [
  ["Quanto tempo demora o serviço?", "O prazo varia conforme o serviço e as condições do veículo. Nossa equipe confirma a estimativa durante o atendimento."],
  ["Preciso agendar?", "Recomendamos o agendamento para garantir disponibilidade e o tempo necessário para cuidar do seu veículo."],
  ["Quais veículos vocês atendem?", "Fale com a equipe e informe o modelo do seu veículo para confirmarmos o atendimento."],
  ["Quais são as formas de pagamento?", "Consulte as opções disponíveis diretamente com a equipe no momento do orçamento."],
  ["Vocês fazem serviços personalizados?", "A recomendação é feita conforme a necessidade observada em cada veículo."],
  ["Como faço para agendar?", "Clique em qualquer botão de WhatsApp do site e envie sua mensagem. A equipe dará sequência ao atendimento."],
];

export { heroImage };
