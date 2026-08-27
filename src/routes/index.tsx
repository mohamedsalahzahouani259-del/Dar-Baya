import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  MapPin,
  Clock,
  Star,
  CreditCard,
  Car,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { menu, avis, atouts } from "@/data/menu";
import facadeImg from "@/assets/dar-baya-facade.jpg";
import terrasseAsset from "@/assets/dar-baya-terrasse.jpg";
import photoPates from "@/assets/photo-6.jpg";
import photoRiz from "@/assets/photo-7.jpg";
import photoComptoir from "@/assets/photo-8.jpg";
import photoPlafond from "@/assets/photo-9.jpg";
import photoCouscous from "@/assets/photo-10.jpg";
import photoMijote from "@/assets/photo-11.jpg";
import photoGrillades from "@/assets/photo-12.jpg";
import photoSalle from "@/assets/photo-13.jpg";

const TEL = "tel:+21653664040";
const WA = "https://wa.me/21653664040";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dar Baya | Restaurant Tunisien à Sousse – Cuisine Traditionnelle" },
      {
        name: "description",
        content: "Dar Baya est un restaurant tunisien traditionnel à Sousse. Découvrez couscous, poissons grillés, fruits de mer, grillades et spécialités tunisiennes faites maison.",
      },
      { property: "og:title", content: "Dar Baya | Restaurant Tunisien à Sousse – Cuisine Traditionnelle" },
      {
        property: "og:description",
        content: "Dar Baya est un restaurant tunisien traditionnel à Sousse. Découvrez couscous, poissons grillés, fruits de mer, grillades et spécialités tunisiennes faites maison.",
      },
      { property: "og:url", content: "https://dar-baya.netlify.app/" },
      { property: "og:image", content: "/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Dar Baya | Restaurant Tunisien à Sousse – Cuisine Traditionnelle" },
      { name: "twitter:title", content: "Dar Baya | Restaurant Tunisien à Sousse – Cuisine Traditionnelle" },
      {
        name: "twitter:description",
        content: "Dar Baya est un restaurant tunisien traditionnel à Sousse. Découvrez couscous, poissons grillés, fruits de mer, grillades et spécialités tunisiennes faites maison.",
      },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://dar-baya.netlify.app/" }],
  }),
  component: Index,
});

const links = [
  { href: "#accueil", label: "Accueil" },
  { href: "#histoire", label: "Notre histoire" },
  { href: "#menu", label: "Menu" },
  { href: "#galerie", label: "Galerie" },
  { href: "#avis", label: "Avis" },
  { href: "#infos", label: "Infos pratiques" },
];

const gallery = [
  {
    src: photoCouscous,
    alt: "Couscous tunisien traditionnel au restaurant Dar Baya à Sousse",
    label: "Couscous agneau",
  },
  {
    src: photoPates,
    alt: "Spaghetti aux fruits de mer au restaurant Dar Baya Sousse",
    label: "Pâtes fruits de mer",
  },
  {
    src: photoRiz,
    alt: "Riz jaune aux amandes, agneau et salade tunisienne",
    label: "Riz djerbien",
  },
  {
    src: photoMijote,
    alt: "Osbane et pieds d'agneau aux pois chiches en sauce",
    label: "Plats mijotés",
  },
  {
    src: photoGrillades,
    alt: "Plat de grillades tunisiennes au restaurant Dar Baya Sousse",
    label: "Grillades",
  },
  {
    src: photoComptoir,
    alt: "Comptoir du restaurant avec motifs bleus et suspensions en paille",
    label: "Le comptoir",
  },
  {
    src: photoSalle,
    alt: "Salle du restaurant avec assiettes en céramique et paniers muraux",
    label: "Notre salle",
  },
  {
    src: photoPlafond,
    alt: "Décor du plafond avec luminaires en paille et vaisselle tunisienne",
    label: "Le décor",
  },
];

function Stars({ note }: { note: number }) {
  return (
    <span className="flex gap-0.5 text-accent" aria-label={`${note} sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4"
          fill={i < note ? "currentColor" : "none"}
          strokeWidth={1.5}
        />
      ))}
    </span>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">{eyebrow}</p>
      <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">{title}</h2>
      <div className="zellige-rule mx-auto mt-5 w-28 rounded-full" />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a
          href="#accueil"
          className="min-w-0 truncate font-display text-2xl tracking-wide text-foreground"
        >
          Dar <span className="text-primary">Baya</span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-border p-2 text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-4 pb-4 lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border/60 py-3 text-sm text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <img
        src={facadeImg}
        alt="Façade du restaurant Dar Baya à Sousse, bleu turquoise et terrasse"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="relative mx-auto max-w-3xl px-5 pt-24 pb-16 text-center">
        <h1 className="sr-only">Dar Baya – Restaurant tunisien traditionnel à Sousse</h1>
        <p className="mx-auto mt-6 max-w-xl text-base text-primary-foreground/85 sm:text-lg">
          Cuisine tunisienne authentique au cœur de Sousse : généreuse, familiale, préparée chaque
          jour avec des produits frais.
        </p>
        <div className="mt-7 flex flex-col flex-wrap items-center justify-center gap-3 sm:flex-row">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/50 bg-background/10 px-4 py-1.5 text-xs tracking-[0.25em] text-accent uppercase backdrop-blur">
            Sousse • Depuis toujours
          </span>
          <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-accent/40 bg-background/10 px-5 py-2 backdrop-blur">
            <Stars note={4.5} />
            <span className="text-sm font-semibold text-primary-foreground">4,5★</span>
            <span className="text-sm text-primary-foreground/70">125 avis Google</span>
          </div>
        </div>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#menu"
            className="w-full rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-warm)] transition-transform hover:scale-[1.03] sm:w-auto"
          >
            Voir le menu
          </a>
          <a
            href={TEL}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-accent px-8 py-3.5 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-accent-foreground sm:w-auto"
          >
            <Phone className="h-4 w-4" /> 53 664 040
          </a>
        </div>
      </div>
    </section>
  );
}

function Histoire() {
  return (
    <section id="histoire" className="relative overflow-hidden py-20 sm:py-28">
      <div className="zellige pointer-events-none absolute inset-x-0 top-0 h-40 opacity-40" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">
            Notre histoire
          </p>
          <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">
            La cuisine tunisienne authentique à Sousse
          </h2>
          <div className="zellige-rule mt-5 w-24 rounded-full" />
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Chez Dar Baya, on cuisine comme à la maison : le couscous roulé le matin, les légumes du
            marché de Sousse, les épices dosées à la main. Rien de compliqué, tout est fait le jour
            même.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            On vous accueille comme un proche, autour de plats généreux et d'un thé à la menthe
            brûlant. Tous nos plats sont{" "}
            <span className="font-semibold text-foreground">halal</span>.
          </p>
        </div>
        <div className="relative">
          <img
            src={terrasseAsset}
            alt="Terrasse extérieure du restaurant tunisien Dar Baya à Sousse"
            width={1200}
            height={900}
            loading="lazy"
            className="aspect-4/3 w-full rounded-[2rem] object-cover shadow-[var(--shadow-warm)]"
          />
          <div className="absolute -bottom-5 -left-3 rounded-2xl border border-accent/40 bg-card px-5 py-4 shadow-[var(--shadow-warm)] sm:left-6">
            <p className="font-display text-2xl text-primary">125+</p>
            <p className="text-xs tracking-wide text-muted-foreground uppercase">clients ravis</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Atouts() {
  return (
    <section className="bg-secondary py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-5 sm:px-6 md:grid-cols-3 lg:grid-cols-6">
        {atouts.map((a) => (
          <div
            key={a}
            className="rounded-2xl border border-accent/25 bg-secondary-foreground/5 px-4 py-5 text-center text-sm font-medium text-secondary-foreground"
          >
            <span className="mx-auto mb-3 block h-2 w-2 rotate-45 bg-accent" />
            {a}
          </div>
        ))}
      </div>
    </section>
  );
}

function MenuSection() {
  return (
    <section id="menu" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionTitle eyebrow="Notre carte" title="Le menu de Dar Baya" />
        <p className="mx-auto mt-4 max-w-xl text-center text-sm text-muted-foreground">
          Prix en dinars tunisiens. La carte évolue selon le marché et la saison.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {menu.map((cat) => (
            <div
              key={cat.name}
              className="rounded-[1.75rem] border border-border bg-card p-6 shadow-[var(--shadow-warm)]"
            >
              <h2 className="flex items-center gap-3 text-xl text-foreground">
                <span className="h-2 w-2 rotate-45 bg-primary" />
                {cat.name}
              </h2>
              <ul className="mt-5 space-y-4">
                {cat.dishes.map((d) => (
                  <li
                    key={d.ar + d.fr}
                    className="border-b border-dashed border-border pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <p className="font-arabic text-lg text-secondary" dir="rtl">
                        {d.ar}
                      </p>
                      <span className="shrink-0 text-sm font-semibold whitespace-nowrap text-primary">
                        {d.price}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{d.fr}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Galerie() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i === null || i <= 0 ? i : i - 1));
      if (e.key === "ArrowRight")
        setOpenIndex((i) => (i === null || i >= gallery.length - 1 ? i : i + 1));
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [openIndex]);

  return (
    <section id="galerie" className="bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionTitle eyebrow="Galerie" title="Quelques images de la maison" />
        <p className="mx-auto mt-4 max-w-lg text-center text-xs text-muted-foreground">
          Cliquez sur une photo pour l’afficher en plein écran.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {gallery.map((g, i) => (
            <figure
              key={g.label}
              onClick={() => setOpenIndex(i)}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl ${i === 0 ? "col-span-2 lg:col-span-1" : ""}`}
            >
              <img
                src={g.src}
                alt={g.alt}
                width={1200}
                height={900}
                loading="lazy"
                className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
                <span className="grid h-10 w-10 scale-75 place-items-center rounded-full bg-background/90 text-foreground opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                </span>
              </span>
            </figure>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          onClick={() => setOpenIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Visionneuse de photos"
        >
          <button
            type="button"
            aria-label="Fermer"
            onClick={() => setOpenIndex(null)}
            className="absolute top-4 right-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-background/10 text-primary-foreground transition-colors hover:bg-background/20"
          >
            <X className="h-6 w-6" />
          </button>

          {openIndex > 0 && (
            <button
              type="button"
              aria-label="Photo précédente"
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex(openIndex - 1);
              }}
              className="absolute left-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-background/10 text-primary-foreground transition-colors hover:bg-background/20 sm:left-6"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          {openIndex < gallery.length - 1 && (
            <button
              type="button"
              aria-label="Photo suivante"
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex(openIndex + 1);
              }}
              className="absolute right-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-background/10 text-primary-foreground transition-colors hover:bg-background/20 sm:right-6"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}

          <img
            src={gallery[openIndex]!.src}
            alt={gallery[openIndex]!.alt}
            className="max-h-[90vh] max-w-full rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

function Avis() {
  const GOOGLE_LISTING_URL = "https://maps.google.com/?cid=15814998565458336219";
  const REVIEW_URL =
    "https://search.google.com/local/writereview?placeid=ChIJJZcqKQB1AhMR29l0YWcpets";
  return (
    <section id="avis" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionTitle eyebrow="Avis clients" title="Ils ont mangé chez nous" />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {avis.map((a) => (
            <blockquote key={a.name} className="rounded-[1.75rem] border border-border bg-card p-6">
              <Stars note={a.note} />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">« {a.text} »</p>
              <footer className="mt-5 flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-secondary font-display text-sm text-secondary-foreground">
                  {a.name[0]}
                </span>
                <cite className="text-sm font-semibold not-italic text-foreground">{a.name}</cite>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="relative mt-14 overflow-hidden rounded-[2rem] border border-accent/40 bg-secondary px-6 py-10 text-center sm:px-12 sm:py-12">
          <div
            className="pointer-events-none absolute inset-0 zellige opacity-[0.12]"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-2xl">
            <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-accent/50 bg-secondary-foreground/5 px-4 py-1.5">
              <Stars note={5} />
              <span className="font-display text-lg text-accent">4,5 / 5</span>
              <span className="text-sm text-secondary-foreground/70">· 125 avis</span>
            </div>
            <h3 className="mt-6 font-display text-2xl leading-snug text-secondary-foreground sm:text-3xl">
              Vous avez aimé votre repas&nbsp;? Partagez-le
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-secondary-foreground/75 sm:text-base">
              Votre avis sur Google aide les familles de Sousse et les voyageurs à découvrir la
              vraie cuisine tunisienne. Cela nous prend une minute et nous fait très plaisir.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-accent-foreground transition hover:brightness-110 sm:w-auto"
              >
                <Star className="h-4 w-4" fill="currentColor" strokeWidth={0} />
                Laisser un avis Google
              </a>
              <a
                href={GOOGLE_LISTING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full border border-secondary-foreground/30 px-7 py-3.5 font-semibold text-secondary-foreground transition hover:bg-secondary-foreground/10 sm:w-auto"
              >
                Lire les 125 avis
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Infos() {
  return (
    <section id="infos" className="bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionTitle eyebrow="Infos pratiques" title="Où trouver le restaurant Dar Baya à Sousse ?" />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-5">
            {[
              {
                icon: MapPin,
                title: "Adresse",
                body: "Rue de l'Indépendance, Sousse 4000, Tunisie",
                href: "https://maps.google.com/maps?vet=10CAAQoqAOahcKEwjYibe7yKWWAxUAAAAAHQAAAAAQDQ..i&client=safari&pvq=Cg0vZy8xMXZ6MHY0OGt2Ig4KCGRhciBiYXlhEAIYAw&lqi=CghkYXIgYmF5YUi6xIiN-LqAgAhaEhAAEAEYABgBIghkYXIgYmF5YZIBCnJlc3RhdXJhbnSaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMnRyZUU1V1VuZFZNMUpJWkdwT1RWcFlWVE5rVkZGNFpVVTFORmRJWXhBQvoBBAgAED0&fvr=1&cs=0&um=1&ie=UTF-8&fb=1&gl=tn&sa=X&ftid=0x13027500292a9725:0xdb7a29676174d9db",
              },
              { icon: Clock, title: "Horaires", body: "Tous les jours, de 12h à 17h" },
              { icon: Phone, title: "Téléphone", body: "53 664 040" },
              { icon: CreditCard, title: "Paiement", body: "Carte bancaire et espèces acceptées" },
              { icon: Car, title: "Stationnement", body: "Parking gratuit à proximité" },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-border bg-card p-5"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 block text-sm text-muted-foreground underline-offset-2 hover:text-primary hover:underline"
                    >
                      {item.body}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm text-muted-foreground">{item.body}</p>
                  )}
                </div>
              </div>
            ))}
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={TEL}
                className="flex-1 rounded-full bg-primary px-6 py-3.5 text-center text-sm font-semibold text-primary-foreground"
              >
                Appeler pour réserver
              </a>
              <a
                href={WA}
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-full border border-secondary px-6 py-3.5 text-center text-sm font-semibold text-secondary transition-colors hover:bg-secondary hover:text-secondary-foreground"
              >
                WhatsApp
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-[1.75rem] border border-border shadow-[var(--shadow-warm)]">
            <iframe
              title="Carte Google Maps — Restaurant Dar Baya, Rue de l'Indépendance, Sousse"
              src="https://www.google.com/maps?q=Restaurant+Dar+Baya%2C+Rue+de+l'Ind%C3%A9pendance%2C+Sousse+4000%2C+Tunisie&z=16&output=embed"
              loading="lazy"
              className="h-[320px] w-full border-0 lg:h-full lg:min-h-[520px]"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-secondary py-14 text-secondary-foreground">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="font-display text-2xl">
              Dar <span className="text-accent">Baya</span>
            </p>
            <p className="mt-3 text-sm text-secondary-foreground/70">
              Cuisine tunisienne traditionnelle, généreuse et familiale, à Sousse.
            </p>
          </div>
          <div className="text-sm text-secondary-foreground/80">
            <p className="mb-3 text-xs tracking-[0.25em] uppercase">Contact</p>
            <p>Rue de l'Indépendance, Sousse 4000</p>
            <p className="mt-1">
              <a href={TEL} className="hover:text-accent">
                53 664 040
              </a>
            </p>
            <p className="mt-1">Tous les jours 12h – 17h</p>
          </div>
          <div className="text-sm text-secondary-foreground/80">
            <p className="mb-3 text-xs tracking-[0.25em] uppercase">Suivez-nous</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.facebook.com/p/Restaurant-Dar-Baya-61557485592608/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-accent/40 px-3 py-1.5 text-xs transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/restaurant.dar.baya/?hl=fr"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-accent/40 px-3 py-1.5 text-xs transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="zellige-rule mt-10 rounded-full" />
        <p className="mt-6 text-center text-xs text-secondary-foreground/60">Dar Baya © 2026</p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Histoire />
        <Atouts />
        <MenuSection />
        <Galerie />
        <Avis />
        <Infos />
      </main>
      <Footer />
    </div>
  );
}
