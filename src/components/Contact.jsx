import { profile } from "../data/resume";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <footer id="contact" className="mx-auto max-w-4xl px-6 py-24">
      <Reveal className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] px-8 py-14 text-center">
        <h2 className="text-2xl font-semibold text-[var(--text-h)] md:text-3xl">Let's build something.</h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-[var(--text)]">
          Open to relocation. {profile.relocation.includes("Visa") ? "Visa sponsorship may be required." : ""}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-[var(--text-h)] px-5 py-2.5 font-medium text-[var(--bg)] transition-transform hover:scale-105"
          >
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="rounded-full border border-[var(--border)] px-5 py-2.5 font-medium text-[var(--text-h)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            {profile.phone}
          </a>
        </div>
      </Reveal>

      <p className="mt-10 text-center font-mono text-xs text-[var(--text)]">
        © {new Date().getFullYear()} {profile.name} · Built with React & Vite
      </p>
    </footer>
  );
}
