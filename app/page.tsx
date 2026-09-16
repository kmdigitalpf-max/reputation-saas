export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="bg-ink">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <span className="font-serif text-xl font-semibold text-ivory">
            Réputation
          </span>
          <a
            href="#essai"
            className="rounded-full bg-coral px-5 py-2 text-sm font-semibold text-ivory transition hover:bg-gold hover:text-ink"
          >
            Essai gratuit
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-ink pb-24 pt-16 text-center">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-coral/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-6">
          <h1 className="font-serif text-4xl font-semibold leading-tight text-ivory sm:text-6xl">
            Vos élèves sont ravis.
            <br />
            <span className="text-coral">Personne ne le sait encore.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ivory/80">
            9 clients satisfaits sur 10 ne laissent jamais d&apos;avis. Les
            mécontents, eux, ne se privent pas. Résultat : votre note en
            ligne ne reflète pas votre travail — et c&apos;est elle qui
            décide qui vous appelle.
          </p>
          <div id="essai" className="mt-10 flex flex-col items-center gap-3">
            <a
              href="#"
              className="rounded-full bg-coral px-8 py-4 text-base font-semibold text-ivory shadow-lg shadow-coral/30 transition hover:bg-gold hover:text-ink"
            >
              Démarrer l&apos;essai gratuit — 14 jours
            </a>
            <span className="text-sm text-ivory/50">
              Sans carte bancaire. Sans engagement.
            </span>
          </div>

          <div className="relative mx-auto mt-16 max-w-md rounded-2xl bg-ivory p-6 text-left shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-coral font-serif font-semibold text-ivory">
                SM
              </div>
              <div>
                <div className="font-semibold text-ink">Sophie M.</div>
                <div className="flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 1.5l2.6 5.9 6.4.6-4.8 4.3 1.4 6.3L10 15.4l-5.6 3.2 1.4-6.3L1 8l6.4-.6z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-3 text-sm text-ink/70">
              « Prof très pédagogue, ma fille a repris confiance en maths. Je
              recommande à 100%. »
            </p>
            <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-coral/10 px-3 py-1 text-xs font-semibold text-coral">
              Publié automatiquement 2 jours après le cours
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/60">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 sm:grid-cols-3">
          <div>
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-coral font-serif text-lg font-semibold text-ivory">
              01
            </div>
            <h3 className="font-serif text-lg font-semibold text-ink">
              Ça part tout seul
            </h3>
            <p className="mt-2 text-sm text-ink/70">
              Un lien ou un QR code envoyé automatiquement après chaque
              prestation. Vous n&apos;y pensez plus.
            </p>
          </div>
          <div>
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-coral font-serif text-lg font-semibold text-ivory">
              02
            </div>
            <h3 className="font-serif text-lg font-semibold text-ink">
              Le tri se fait avant Google
            </h3>
            <p className="mt-2 text-sm text-ink/70">
              Note haute → redirigé vers votre fiche publique. Note basse →
              un message privé, pas un avis en ligne.
            </p>
          </div>
          <div>
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-coral font-serif text-lg font-semibold text-ivory">
              03
            </div>
            <h3 className="font-serif text-lg font-semibold text-ink">
              Une relance qui n&apos;oublie jamais
            </h3>
            <p className="mt-2 text-sm text-ink/70">
              Deux jours après la prestation, un rappel automatique part par
              SMS ou email si personne n&apos;a répondu.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-ink/50">
          Déjà utilisé par des professeurs particuliers,
          <br className="hidden sm:block" /> centres de soutien scolaire et
          écoles de langues
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-8 opacity-40">
          <div className="h-8 w-28 rounded bg-ink/20" />
          <div className="h-8 w-28 rounded bg-ink/20" />
          <div className="h-8 w-28 rounded bg-ink/20" />
          <div className="h-8 w-28 rounded bg-ink/20" />
        </div>
      </section>

      <section className="bg-ink py-16 text-center">
        <h2 className="font-serif text-2xl font-semibold text-ivory sm:text-3xl">
          Votre prochaine prestation peut devenir votre prochain avis.
        </h2>
        <a
          href="#"
          className="mt-8 inline-block rounded-full bg-coral px-8 py-4 text-base font-semibold text-ivory transition hover:bg-white hover:text-ink"
        >
          Démarrer l&apos;essai gratuit
        </a>
      </section>

      <footer className="px-6 py-8 text-center text-xs text-ink/40">
        © {new Date().getFullYear()} Réputation. Tous droits réservés.
      </footer>
    </main>
  );
}
