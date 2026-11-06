import { useEffect, useState } from 'react';
import {
  about, contacts, education, experience, languages, profile, projects, skills, stats, ui,
  type Lang, type T,
} from './content';

const LANGS: Lang[] = ['ru', 'uz', 'en'];

function initialLang(): Lang {
  const q = new URLSearchParams(location.search).get('lang');
  if (q && LANGS.includes(q as Lang)) return q as Lang;
  try {
    const saved = localStorage.getItem('lang');
    if (saved && LANGS.includes(saved as Lang)) return saved as Lang;
  } catch { /* storage недоступен — не страшно */ }
  return 'ru';
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('in')); return; }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }),
      { threshold: 0.12 },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
}

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path d="M4 12L12 4M12 4H5.5M12 4V10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function App() {
  const [lang, setLang] = useState<Lang>(initialLang);
  const t = (x: T) => x[lang];
  useReveal();

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = `${profile.name[lang]} — ${profile.role[lang]}`;
    try { localStorage.setItem('lang', lang); } catch { /* ignore */ }
  }, [lang]);

  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const tg = `https://t.me/${contacts.telegram}`;

  return (
    <>
      <header className="nav">
        <div className="wrap nav-inner">
          <a href="#top" className="logo" aria-label="Home">MZ<span>.</span></a>
          <nav className="links">
            {(['about', 'experience', 'projects', 'skills', 'contact'] as const).map((k) => (
              <a key={k} href={`#${k}`}>{t(ui.nav[k])}</a>
            ))}
          </nav>
          <div className="nav-right">
            <div className="lang" role="group" aria-label="Language">
              {LANGS.map((l) => (
                <button key={l} className={l === lang ? 'on' : ''} onClick={() => setLang(l)}>{l.toUpperCase()}</button>
              ))}
            </div>
            <a className="btn btn-ghost sm hide-sm" href={`/resume-${lang}.pdf`} target="_blank" rel="noreferrer">{t(ui.cta.resume)}</a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero wrap">
          <div className="hero-text reveal">
            <p className="status"><i /> {t(profile.available)} · {t(profile.location)}</p>
            <h1>{t(profile.name)}</h1>
            <p className="role">{t(profile.role)} <span>{profile.stack}</span></p>
            <p className="print-contacts">
              {contacts.phone} · {contacts.email} · t.me/{contacts.telegram} · github.com/{contacts.github}
            </p>
            <p className="pitch">{t(profile.pitch)}</p>
            <div className="actions">
              <a className="btn btn-primary" href="#projects">{t(ui.cta.projects)}</a>
              <a className="btn btn-ghost" href={tg} target="_blank" rel="noreferrer">{t(ui.cta.write)}</a>
              <a className="btn btn-ghost show-sm" href={`/resume-${lang}.pdf`} target="_blank" rel="noreferrer">{t(ui.cta.resume)}</a>
            </div>
            <dl className="stats">
              {stats.map((s) => (
                <div key={s.value + s.label.en}>
                  <dt>{s.value}</dt>
                  <dd>{t(s.label)}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="hero-photo reveal">
            <div className="frame">
              <img src="/img/portrait.webp" alt={t(profile.name)} width={960} height={1040} />
            </div>
            <div className="chip-float">
              <code>{'const dev = { stack: "TS", focus: "backend" }'}</code>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section wrap">
          <Heading n="01" title={t(ui.titles.about)} />
          <div className="about-grid">
            <p className="lead reveal">{t(about)}</p>
            <div className="reveal">
              <h3 className="sub">{t(ui.titles.languages)}</h3>
              <ul className="langs">
                {languages.map((l) => (
                  <li key={l.name.en}><span>{t(l.name)}</span><b>{t(l.level)}</b></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section wrap">
          <Heading n="02" title={t(ui.titles.experience)} />
          <div className="timeline">
            {experience.map((job) => (
              <article key={job.company} className="job reveal">
                <div className="job-meta">
                  <h3>{job.company}</h3>
                  <p className="job-role">{t(job.role)}</p>
                  <p className="muted">{t(job.period)}</p>
                  <p className="badge">{t(job.duration)}</p>
                </div>
                <div className="job-body">
                  <ul>
                    {job.points.map((p, i) => <li key={i}>{t(p)}</li>)}
                  </ul>
                  <div className="tags">{job.tags.map((x) => <span key={x}>{x}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section wrap">
          <Heading n="03" title={t(ui.titles.projects)} />
          {featured && (
            <article className="featured reveal">
              <div>
                <p className="eyebrow">★ {t(ui.featured)}</p>
                <h3>{featured.name}</h3>
                <p className="lead">{t(featured.description)}</p>
                <div className="tags">{featured.tags.map((x) => <span key={x}>{x}</span>)}</div>
              </div>
              <div className="featured-cta">
                {featured.url && (
                  <a className="btn btn-primary" href={featured.url} target="_blank" rel="noreferrer">
                    {t(ui.cta.open)} <Arrow />
                  </a>
                )}
                {featured.url && <span className="muted mono">{featured.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>}
              </div>
            </article>
          )}
          <div className="grid">
            {rest.map((p) => {
              const href = p.url ?? p.repo;
              return (
                <a key={p.name} className="card reveal" href={href} target="_blank" rel="noreferrer">
                  <div className="card-top">
                    <h3>{p.name}</h3>
                    <span className="go"><Arrow /></span>
                  </div>
                  <p>{t(p.description)}</p>
                  <div className="tags">{p.tags.map((x) => <span key={x}>{x}</span>)}</div>
                  <p className="muted mono small">
                    {p.url ? p.url.replace(/^https?:\/\//, '').replace(/\/$/, '') : t(ui.cta.code)}
                  </p>
                </a>
              );
            })}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section wrap">
          <Heading n="04" title={t(ui.titles.skills)} />
          <div className="skills">
            {skills.map((g) => (
              <div key={g.group.en} className="skill-group reveal">
                <h3 className="sub">{t(g.group)}</h3>
                <div className="chips">
                  {g.items.map((s, i) => <span key={s} className={i < 3 ? 'strong' : ''}>{s}</span>)}
                </div>
              </div>
            ))}
          </div>

          <h3 className="sub edu-title reveal">{t(ui.titles.education)}</h3>
          <div className="edu">
            {education.map((e) => (
              <div key={e.title.en} className="edu-item reveal">
                <b>{t(e.title)}</b>
                <span className="muted">{t(e.detail)}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section wrap">
          <div className="contact reveal">
            <div>
              <p className="eyebrow">05</p>
              <h2>{t(ui.titles.contact)}</h2>
              <p className="lead">{t(ui.contactText)}</p>
              <a className="btn btn-primary lg" href={tg} target="_blank" rel="noreferrer">
                @{contacts.telegram} <Arrow />
              </a>
            </div>
            <ul className="contact-list">
              <li><span>Telegram</span><a href={tg} target="_blank" rel="noreferrer">@{contacts.telegram}</a></li>
              <li><span>Email</span><a href={`mailto:${contacts.email}`}>{contacts.email}</a></li>
              <li><span>{lang === 'en' ? 'Phone' : lang === 'uz' ? 'Telefon' : 'Телефон'}</span><a href={`tel:${contacts.phone.replace(/\s/g, '')}`}>{contacts.phone}</a></li>
              <li><span>GitHub</span><a href={`https://github.com/${contacts.github}`} target="_blank" rel="noreferrer">github.com/{contacts.github}</a></li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="wrap footer">
        <span>© {new Date().getFullYear()} {t(profile.name)}</span>
        <span className="muted">{t(ui.footer)}</span>
      </footer>
    </>
  );
}

function Heading({ n, title }: { n: string; title: string }) {
  return (
    <div className="heading reveal">
      <span className="num">{n}</span>
      <h2>{title}</h2>
      <span className="line" />
    </div>
  );
}
