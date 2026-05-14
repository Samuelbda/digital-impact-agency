import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Megaphone,
  Target,
  Palette,
  Mail,
  MessageCircle,
  Instagram,
  Linkedin,
  Sparkles,
} from "lucide-react";
import { SplineRobot } from "@/components/SplineRobot";
import { Button } from "@/components/ui/button";

import matheus from "@/assets/team/matheus.png";
import gustavo from "@/assets/team/gustavo.png";
import camila from "@/assets/team/camila.png";
import samuel from "@/assets/team/samuel.png";
import tulio from "@/assets/team/tulio.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "SC Agency — Tecnologia & Marketing Digital de Alto Impacto" },
      {
        name: "description",
        content:
          "Agência SC: desenvolvimento web, tráfego pago, marketing digital e design UI/UX para escalar o seu negócio.",
      },
      { property: "og:title", content: "SC Agency — Presença digital de impacto" },
      {
        property: "og:description",
        content: "Soluções inteligentes em Tecnologia e Marketing Digital.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
});

const team = [
  { name: "Samuel Lenício", role: "Desenvolvedor Full Stack", img: samuel },
  { name: "Gustavo Matioli", role: "Desenvolvedor Full Stack", img: gustavo },
  { name: "Matheus Fernandes", role: "Desenvolvedor Full Stack", img: matheus },
  { name: "Túlio Mattos", role: "Tráfego Pago & Marketing Digital", img: tulio },
  { name: "Camila Carvalho", role: "Gestão & Administração", img: camila },
];

const services = [
  {
    icon: Code2,
    title: "Desenvolvimento Web",
    desc: "Sites institucionais, landing pages e e-commerces com tecnologia de ponta.",
  },
  {
    icon: Megaphone,
    title: "Marketing Digital",
    desc: "Estratégias completas para aumentar alcance e autoridade da sua marca.",
  },
  {
    icon: Target,
    title: "Tráfego Pago",
    desc: "Gestão de Google Ads e Meta Ads focada em conversão e ROI real.",
  },
  {
    icon: Palette,
    title: "Design & UI/UX",
    desc: "Interfaces modernas, intuitivas e centradas na experiência do usuário.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
        <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="w-8 h-8 rounded-lg bg-gradient-primary shadow-glow grid place-items-center">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </span>
            SC <span className="text-gradient">Agency</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#sobre" className="hover:text-foreground transition">Sobre</a>
            <a href="#equipe" className="hover:text-foreground transition">Equipe</a>
            <a href="#servicos" className="hover:text-foreground transition">Serviços</a>
            <a href="#contato" className="hover:text-foreground transition">Contato</a>
          </div>
          <Button asChild size="sm" className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow">
            <a href="https://wa.me/5533999285190" target="_blank" rel="noreferrer">
              Fale conosco
            </a>
          </Button>
        </nav>
      </header>

      {/* HERO — robô 3D só nesta seção */}
      <section id="top" className="relative pt-16 min-h-screen flex items-center overflow-hidden">
        <SplineRobot />
        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-24 w-full pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-2xl pointer-events-auto"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/70 backdrop-blur text-xs text-muted-foreground mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Tecnologia + Marketing de Performance
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] [text-shadow:0_4px_30px_oklch(0.1_0.05_260/0.6)]">
              Transformando grandes ideias em{" "}
              <span className="text-gradient">presença digital de impacto</span>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Soluções inteligentes em Tecnologia e Marketing Digital para escalar o seu negócio com agilidade, design de vanguarda e resultados mensuráveis.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90">
                <a href="#contato">
                  Começar agora <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border bg-card/60 backdrop-blur hover:bg-card">
                <a href="#servicos">Ver serviços</a>
              </Button>
            </div>
          </motion.div>
        </div>
        {/* fade para a próxima seção */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background pointer-events-none" />
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-28 relative">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">A Agência</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Inovação tecnológica e marketing de <span className="text-gradient">alta performance</span>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            Somos uma agência focada em impulsionar empresas com agilidade, resultados mensuráveis e design de vanguarda. Cada projeto é pensado para gerar autoridade, conversão e crescimento real.
          </p>
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              { k: "+50", v: "Projetos entregues" },
              { k: "5x", v: "ROI médio" },
              { k: "100%", v: "Foco em resultado" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl border border-border bg-card/50 p-6 shadow-card">
                <div className="text-3xl font-bold text-gradient">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-28 bg-card/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">O que fazemos</p>
            <h2 className="text-4xl md:text-5xl font-bold">Serviços de ponta a ponta.</h2>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group rounded-2xl border border-border bg-background/60 p-7 shadow-card hover:border-primary/60 transition"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary grid place-items-center shadow-glow mb-5 group-hover:scale-110 transition">
                  <s.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPE */}
      <section id="equipe" className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Meet the team</p>
            <h2 className="text-4xl md:text-5xl font-bold">Pessoas por trás dos resultados.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group rounded-2xl overflow-hidden border border-border bg-card shadow-card hover:shadow-glow transition"
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold">{m.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{m.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO / FOOTER */}
      <footer id="contato" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-60" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Pronto para levar sua empresa para a{" "}
            <span className="text-gradient">próxima era do seu negócio</span>?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">Vamos conversar sobre o seu próximo projeto.</p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90">
              <a href="https://wa.me/5533999285190" target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 w-4 h-4" /> WhatsApp (33) 99928-5190
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border bg-card/40">
              <a href="https://wa.me/5533999031690" target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 w-4 h-4" /> WhatsApp (33) 99903-1690
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border bg-card/40">
              <a href="mailto:contato@scagency.com.br">
                <Mail className="mr-2 w-4 h-4" /> E-mail
              </a>
            </Button>
          </div>

          <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div>© {new Date().getFullYear()} SC Agency. Todos os direitos reservados.</div>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="hover:text-foreground transition"><Instagram className="w-4 h-4" /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-foreground transition"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
