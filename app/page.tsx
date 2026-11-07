'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  ArrowDownTrayIcon,
  ArrowTopRightOnSquareIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
  EnvelopeIcon,
  MapPinIcon,
  CodeBracketIcon,
  AcademicCapIcon,
  CheckBadgeIcon,
  PhoneIcon,
  ChevronDownIcon,
  CalendarDaysIcon,
  GiftIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import Chat from '../components/Chat';
import {
  profile,
  skills,
  experience,
  projects,
  certificates,
} from '../data/portfolio';

const gmailCompose =
  'https://mail.google.com/mail/?view=cm&fs=1&to=quisadozymur%40gmail.com&su=Portfolio%20Inquiry';

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

const nav = [
  ['Home', 'home'],
  ['Experience', 'experience'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Certificates', 'certificates'],
  ['Education', 'education'],
  ['Leadership', 'leadership'],
  ['Contact', 'contact'],
];

export default function Page() {
  const [dark, setDark] = useState(false);
  const [menu, setMenu] = useState(false);
  const [showAllCerts, setShowAllCerts] = useState(false);
  const [educationView, setEducationView] = useState<'College' | 'High School' | 'Elementary' | 'All'>('College');

  // Featured is selected by default.
  const [filter, setFilter] = useState('Featured');

  const [active, setActive] = useState('home');

  useEffect(() => {
    const saved = localStorage.getItem('zq-theme');
    const initial = saved === 'dark';

    setDark(initial);
    document.documentElement.dataset.theme = initial
      ? 'dark'
      : 'light';
  }, []);

  function toggleTheme() {
    const next = !dark;

    setDark(next);
    document.documentElement.dataset.theme = next
      ? 'dark'
      : 'light';

    localStorage.setItem('zq-theme', next ? 'dark' : 'light');
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          )[0];

        if (visible) {
          setActive(visible.target.id);
        }
      },
      {
        rootMargin: '-18% 0px -60% 0px',
      }
    );

    nav.forEach(([, id]) => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Featured projects appear first, even in All projects.
  const orderedProjects = [...projects].sort(
    (a, b) =>
      Number(Boolean(b.featured)) -
      Number(Boolean(a.featured))
  );

  const visibleProjects =
    filter === 'Featured'
      ? orderedProjects.filter((project) => project.featured)
      : orderedProjects;

  return (
    <>
      <header className="topbar">
        <div className="nav-inner">
          <a
            className="brand"
            href="#home"
            aria-label="Go to home"
          >
            ZQ<span className="brand-dot">.</span>
          </a>

          <nav
            className={'nav-links ' + (menu ? 'open' : '')}
            aria-label="Main navigation"
          >
            {nav.map(([label, id]) => (
              <a
                key={id}
                className={active === id ? 'active' : ''}
                href={'#' + id}
                onClick={() => setMenu(false)}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <button
              type="button"
              className="icon-btn"
              onClick={toggleTheme}
              aria-label={
                dark
                  ? 'Switch to light mode'
                  : 'Switch to dark mode'
              }
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>

            <a
              className="nav-cta"
              href={gmailCompose}
              target="_blank"
              rel="noopener noreferrer"
            >
              Let&apos;s talk <ArrowUpRightIcon />
            </a>

            <button
              type="button"
              className="icon-btn mobile-menu"
              onClick={() => setMenu(!menu)}
              aria-label="Toggle navigation"
              aria-expanded={menu}
            >
              {menu ? <XMarkIcon /> : <Bars3Icon />}
            </button>
          </div>
        </div>
      </header>

      <main className="shell">
        {/* HOME */}
        <section id="home" className="paper hero-paper">
          <div className="hero-copy">
            <p className="hero-kicker">HELLO, I&apos;M</p>

            <h1 className="hero-name">Zymur C. <span>Quisado</span></h1>

            <p className="hero-role">
              Software Developer <span>/</span> Project Manager
            </p>

            <p className="hero-desc">
              {profile.summary} I&apos;m currently pursuing my BS in
              Information Technology, with a strong interest in
              software development and other technology roles.
            </p>

            <details
              style={{
                marginTop: '15px',
                marginBottom: '17px',
              }}
            >
              <summary
                style={{
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '7px',
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 800,
                  fontSize: '14px',
                  color: 'var(--ink)',
                  listStyle: 'none',
                }}
              >
                More about me
                <ChevronDownIcon
                  aria-hidden="true"
                  style={{
                    width: '15px',
                    height: '15px',
                    opacity: 0.35,
                  }}
                />
              </summary>

              <div
                style={{
                  marginTop: '12px',
                  padding: '13px 15px',
                  border: '1px solid var(--line)',
                  borderRadius: '3px',
                  background: 'var(--subtle)',
                  display: 'grid',
                  gap: '12px',
                  fontSize: '12px',
                  lineHeight: 1.65,
                  color: 'var(--muted)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                  }}
                >
                  <CalendarDaysIcon
                    style={{
                      width: '17px',
                      height: '17px',
                      flexShrink: 0,
                      color: 'var(--ink)',
                    }}
                  />
                  <span>
                    <strong style={{ color: 'var(--ink)' }}>
                      Birthdate:
                    </strong>{' '}
                    July 1, 2004
                  </span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                  }}
                >
                  <GiftIcon
                    style={{
                      width: '17px',
                      height: '17px',
                      flexShrink: 0,
                      color: 'var(--ink)',
                    }}
                  />
                  <span>
                    <strong style={{ color: 'var(--ink)' }}>
                      Age:
                    </strong>{' '}
                    22
                  </span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                  }}
                >
                  <MapPinIcon
                    style={{
                      width: '17px',
                      height: '17px',
                      flexShrink: 0,
                      color: 'var(--ink)',
                    }}
                  />
                  <span>
                    <strong style={{ color: 'var(--ink)' }}>
                      Birthplace:
                    </strong>{' '}
                    Ponong, Tomas Oppus, Southern Leyte, Philippines
                  </span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                  }}
                >
                  <SparklesIcon
                    style={{
                      width: '17px',
                      height: '17px',
                      flexShrink: 0,
                      color: 'var(--ink)',
                    }}
                  />
                  <span>
                    <strong style={{ color: 'var(--ink)' }}>
                      Hobbies &amp; interests:
                    </strong>{' '}
                    Watching TV series, movies, anime, and
                    historical documentaries; reading history,
                    trivia, and geography; playing chess and
                    video games.
                  </span>
                </div>
              </div>
            </details>

            <div className="button-row">
              <a className="btn primary" href="#projects">
                Explore my work <ArrowRightIcon />
              </a>

              <a
                className="btn secondary"
                href="/Zymur_Quisado_Resume.docx"
                download
              >
                Download resume <ArrowDownTrayIcon />
              </a>
            </div>

            <div className="hero-meta">
              <span>
                <MapPinIcon /> {profile.location}, Philippines
              </span>
              <span>
                <EnvelopeIcon />
                <a href={'mailto:' + profile.email}>
                  {profile.email}
                </a>
              </span>
            </div>
          </div>

          <div className="portrait-panel">
            <div className="portrait-grid" />

            <Image
              src="/profile.png"
              alt="Professional portrait of Zymur Quisado"
              fill
              priority
              sizes="(max-width: 800px) 100vw, 430px"
              className="portrait"
            />

            <div className="portrait-label">
              <span>01 / PROFILE</span>
              <strong>BUILD. LEAD. DELIVER.</strong>
            </div>
          </div>
        </section>

        {/* STATISTICS */}
        <section
          className="stat-row"
          aria-label="Professional highlights"
        >
          <div>
            <strong>04</strong>
            <span>Paid client projects</span>
          </div>

          <div>
            <strong>
              {projects.length.toString().padStart(2, '0')}
            </strong>
            <span>Portfolio projects</span>
          </div>

          <div>
            <strong>{certificates.length}</strong>
            <span>Certifications</span>
          </div>

          <div>
            <strong>03</strong>
            <span>Previous leadership experiences</span>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section
          id="experience"
          className="paper section-paper"
        >
          <SectionHead
            num="01"
            title="Experience"
            kicker="WHERE I'VE PUT SKILLS TO WORK"
          />

          <div className="timeline">
            {experience.map((item, index) => (
              <div className="timeline-item" key={item.role}>
                <span className="timeline-no">
                  0{index + 1}
                </span>

                <div>
                  <h3>{item.role}</h3>
                  <p>{item.desc}</p>
                </div>

                <span className="date">{item.date}</span>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="paper section-paper">
          <SectionHead
            num="02"
            title="Technical toolkit"
            kicker="TOOLS I BUILD WITH"
          />

          <div className="skill-grid">
            {skills.map((skill, index) => (
              <div className="skill-box" key={skill.group}>
                <div className="skill-head">
                  <CodeBracketIcon />
                  <span>
                    0{index + 1} / {skill.group}
                  </span>
                </div>

                <div className="chips">
                  {skill.items.map((technology) => (
                    <span className="chip" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="paper section-paper"
        >
          <SectionHead
            num="03"
            title="Selected work & projects"
            kicker="BUILT WITH PURPOSE"
          />

          <div className="section-intro">
            <p>
              A collection of projects I&apos;ve built or
              contributed to, from production-style web systems
              to mobile applications and academic collaborations.
            </p>

            {/* Featured button comes FIRST */}
            <div className="filter-buttons">
              <button
                type="button"
                onClick={() => setFilter('Featured')}
                className={
                  filter === 'Featured' ? 'selected' : ''
                }
                aria-pressed={filter === 'Featured'}
              >
                Featured
              </button>

              <button
                type="button"
                onClick={() => setFilter('All')}
                className={
                  filter === 'All' ? 'selected' : ''
                }
                aria-pressed={filter === 'All'}
              >
                All projects
              </button>
            </div>
          </div>

          <div className="project-grid">
            {visibleProjects.map((project, index) => (
              <article
                className="project-card"
                key={project.title}
              >
                <div className="project-content">
                  <div className="project-top">
                    <span className="project-year">
                      PROJECT /{' '}
                      {String(index + 1).padStart(2, '0')}
                      {' · '}
                      {project.year}
                      {project.label
                        ? ' · ' + project.label
                        : ''}
                    </span>
                  </div>

                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="chips">
                    {project.stack.map((technology) => (
                      <span
                        className="chip"
                        key={technology}
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS — UNCHANGED */}
        <section
          id="certificates"
          className="paper section-paper"
        >
          <SectionHead
            num="04"
            title="Certifications"
            kicker="CONTINUOUS LEARNING"
          />

          <div className="section-intro cert-intro">
            <p>
              Professional learning and verified coursework
              across development, analytics, and technology.
            </p>

            <div
              className="filter-buttons"
              role="group"
              aria-label="Certificate display"
            >
              <button
                type="button"
                onClick={() => setShowAllCerts(false)}
                className={
                  !showAllCerts ? 'selected' : ''
                }
                aria-pressed={!showAllCerts}
              >
                Featured
              </button>

              <button
                type="button"
                onClick={() => setShowAllCerts(true)}
                className={
                  showAllCerts ? 'selected' : ''
                }
                aria-pressed={showAllCerts}
              >
                All certificates ({certificates.length})
              </button>
            </div>
          </div>

          <div className="cert-grid">
            {(showAllCerts
              ? certificates
              : certificates.slice(0, 6)
            ).map((certificate, index) => (
              <a
                key={certificate.name}
                className="cert-card"
                href={certificate.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="cert-index">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div>
                  <h3>{certificate.name}</h3>
                  <p>
                    {certificate.issuer}
                  </p>
                </div>

                <ArrowTopRightOnSquareIcon />
              </a>
            ))}
          </div>


        </section>

        {/* EDUCATION */}
        <section
          id="education"
          className="paper section-paper"
        >
          <SectionHead
            num="05"
            title="Education"
            kicker="ACADEMIC FOUNDATION"
          />

          <div className="section-intro education-intro">
            <p>My academic journey, from elementary school to my current studies in information technology.</p>
            <div className="education-controls" aria-label="Filter education by level">
              <div className="education-select-wrap">
                <select
                  className={'education-select ' + (educationView !== 'All' ? 'selected' : '')}
                  aria-label="Education level"
                  value={educationView === 'All' ? 'College' : educationView}
                  onChange={(event) => setEducationView(event.target.value as 'College' | 'High School' | 'Elementary')}
                >
                  <option value="College">College</option>
                  <option value="High School">High School</option>
                  <option value="Elementary">Elementary</option>
                </select>
                <ChevronDownIcon aria-hidden="true" />
              </div>
              <button
                type="button"
                className={'education-all-btn ' + (educationView === 'All' ? 'selected' : '')}
                aria-pressed={educationView === 'All'}
                onClick={() => setEducationView('All')}
              >
                All
              </button>
            </div>
          </div>

          <div className="education-list">
            {[
              {
                level: 'College',
                period: '2023 — PRESENT · EXPECTED JUNE 2027',
                title: 'Bachelor of Science in Information Technology',
                detail: 'Major in Programming',
                school: 'Southern Leyte State University — Tomas Oppus Campus',
                location: 'Tomas Oppus, Southern Leyte, Philippines',
                distinction: "Consistent Dean's Lister",
              },
              {
                level: 'High School',
                period: '2021 — 2023',
                title: 'Senior High School',
                detail: 'Technical-Vocational-Livelihood (TVL) · Information and Communications Technology (ICT) · Computer Systems Servicing (CSS)',
                school: 'Santo Niño Academy Inc.',
                location: 'Taliwa, Malitbog, Southern Leyte, Philippines',
                distinction: 'Graduated with High Honors',
              },
              {
                level: 'High School',
                period: '2017 — 2021',
                title: 'Junior High School',
                detail: '',
                school: 'Santo Niño Academy Inc.',
                location: 'Taliwa, Malitbog, Southern Leyte, Philippines',
                distinction: 'Honor Student',
              },
              {
                level: 'Elementary',
                period: '2011 — 2016',
                title: 'Elementary Education',
                detail: '',
                school: 'Canlupao Elementary School',
                location: 'Canlupao, Tomas Oppus, Southern Leyte, Philippines',
                distinction: 'Top of the Class',
              },
              {
                level: 'Elementary',
                period: '',
                title: 'Elementary Education',
                detail: '',
                school: 'Easter Faith Christian School',
                location: 'San Isidro, Tomas Oppus, Southern Leyte, Philippines',
                distinction: 'Graduated with Honors',
              },
            ]
              .filter((school) => educationView === 'All' || school.level === educationView)
              .map((school) => (
                <article className="education-block" key={school.school + school.title + school.period}>
                  <AcademicCapIcon aria-hidden="true" />
                  <div className="education-content">
                    <p className="small-kicker">
                      {school.level.toUpperCase()}{school.period ? ' · ' + school.period : ''}
                    </p>
                    <h3>{school.title}</h3>
                    {school.detail && <p className="education-detail">{school.detail}</p>}
                    <p className="education-school">{school.school}</p>
                    <p className="education-location"><MapPinIcon aria-hidden="true" /> {school.location}</p>
                    <span className="edu-pill"><CheckBadgeIcon aria-hidden="true" /> {school.distinction}</span>
                  </div>
                </article>
              ))}
          </div>
        </section>

        {/* LEADERSHIP */}
        <section
          id="leadership"
          className="paper section-paper"
        >
          <SectionHead
            num="06"
            title="Leadership & recognition"
            kicker="BEYOND THE CODE"
          />

          <div className="achievement-grid">
            {profile.achievements.map(
              (achievement, index) => (
                <div
                  className="achievement"
                  key={achievement}
                >
                  <span>
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <h3>{achievement}</h3>
                  <CheckBadgeIcon />
                </div>
              )
            )}
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="paper contact-paper"
        >
          <div>
            <p className="small-kicker">
              07 / LET&apos;S CONNECT
            </p>

            <h2>
              Let&apos;s build
              <br />
              something<span>.</span>
            </h2>

            <p>
              I&apos;m open to software development internships,
              technology opportunities, and project conversations.
              Every contact option below is clickable.
            </p>

            <div className="button-row">
              <a
                className="btn primary"
                href={gmailCompose}
                target="_blank"
                rel="noopener noreferrer"
              >
                Send an email <ArrowUpRightIcon />
              </a>

              <a
                className="btn secondary"
                href="/Zymur_Quisado_Resume.docx"
                download
              >
                Download resume <ArrowDownTrayIcon />
              </a>
            </div>
          </div>

          <div className="contact-detail">
            <a
              className="contact-method"
              href={gmailCompose}
              target="_blank"
              rel="noopener noreferrer"
            >
              <EnvelopeIcon />
              <span>EMAIL</span>
              <strong>quisadozymur@gmail.com</strong>
            </a>

            <a
              className="contact-method"
              href="https://www.facebook.com/zymur.quisado.9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
              <span>FACEBOOK</span>
              <strong>Zymur C. Quisado</strong>
            </a>

            <a
              className="contact-method"
              href="tel:+639461996726"
            >
              <PhoneIcon />
              <span>PHONE</span>
              <strong>+63 946 199 6726</strong>
            </a>

            <a
              className="contact-method"
              href="https://www.google.com/maps/search/?api=1&query=Ponong%2C%20Tomas%20Oppus%2C%20Southern%20Leyte"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPinIcon />
              <span>LOCATION · OPEN MAPS</span>
              <strong>
                Ponong, Tomas Oppus, Southern Leyte, Philippines
              </strong>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>
          © {new Date().getFullYear()} Zymur C. Quisado
        </span>

        <span>Designed with intent. Built with code.</span>

        <a href="#home">Back to top ↑</a>
      </footer>

      <Chat />
    </>
  );
}

function SectionHead({
  num,
  title,
  kicker,
}: {
  num: string;
  title: string;
  kicker: string;
}) {
  return (
    <div className="section-head">
      <div className="section-index">
        {num} <span>/</span> {kicker}
      </div>

      <h2>
        {title}
        <span className="title-dot">.</span>
      </h2>
    </div>
  );
}
