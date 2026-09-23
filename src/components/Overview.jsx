import { highlights, profile } from "../data/resume";
import SpotlightCard from "./SpotlightCard";
import { StaggerGroup, StaggerItem } from "./Stagger";

export default function Overview() {
  return (
    <section className="relative mx-auto max-w-4xl px-6 pb-24">
      <div className="bento-grid-bg pointer-events-none absolute inset-x-0 -top-10 -z-10 h-80" />

      <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[130px]">
        <StaggerItem className="sm:col-span-2 lg:col-span-2 lg:row-span-2">
          <SpotlightCard className="flex h-full flex-col justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">Focus</span>
              <p className="mt-3 bg-gradient-to-br from-[var(--text-h)] to-[var(--text)] bg-clip-text text-xl font-semibold leading-snug text-transparent md:text-2xl">
                {highlights.headline}
              </p>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[var(--text)]">{highlights.blurb}</p>
          </SpotlightCard>
        </StaggerItem>

        {highlights.stats.map((stat) => (
          <StaggerItem key={stat.value}>
            <SpotlightCard className="flex h-full flex-col justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <p className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] bg-clip-text text-3xl font-bold text-transparent">
                {stat.value}
              </p>
              <p className="mt-1 text-xs leading-snug text-[var(--text)]">{stat.label}</p>
            </SpotlightCard>
          </StaggerItem>
        ))}

        <StaggerItem>
          <SpotlightCard className="flex h-full flex-col justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <p className="text-sm font-semibold text-[var(--text-h)]">{profile.location}</p>
            <p className="mt-1 text-xs text-[var(--text)]">Open to relocation</p>
          </SpotlightCard>
        </StaggerItem>

        <StaggerItem>
          <SpotlightCard className="flex h-full flex-col justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <p className="text-xs font-medium uppercase tracking-wide text-[var(--text)]">Exploring now</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {highlights.exploring.slice(0, 3).map((s) => (
                <span
                  key={s}
                  className="rounded-md bg-[var(--accent-soft)] px-1.5 py-0.5 text-[10px] font-medium text-[var(--accent)]"
                >
                  {s}
                </span>
              ))}
            </div>
          </SpotlightCard>
        </StaggerItem>

        <StaggerItem className="sm:col-span-2 lg:col-span-4">
          <SpotlightCard className="flex h-full flex-col items-center justify-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:flex-row sm:justify-between">
            <p className="text-sm text-[var(--text)]">Want the full story? Reach out directly.</p>
            <div className="flex gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full bg-[var(--text-h)] px-4 py-2 text-xs font-medium text-[var(--bg)] transition-transform hover:scale-105"
              >
                Email
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[var(--border)] px-4 py-2 text-xs font-medium text-[var(--text-h)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                GitHub
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[var(--border)] px-4 py-2 text-xs font-medium text-[var(--text-h)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                LinkedIn
              </a>
              <a
                href={profile.links.goodreads}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[var(--border)] px-4 py-2 text-xs font-medium text-[var(--text-h)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                Goodreads
              </a>
            </div>
          </SpotlightCard>
        </StaggerItem>
      </StaggerGroup>
    </section>
  );
}
