import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useLang } from '../LangContext.jsx';
import { SHOP } from '../data/shopData.js';

export default function Header() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const [sectionToScroll, setSectionToScroll] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== '/' || !sectionToScroll) return;
    document.getElementById(sectionToScroll)?.scrollIntoView({ behavior: 'smooth' });
    setSectionToScroll(null);
  }, [location.pathname, sectionToScroll]);

  const scrollToSection = (event, id) => {
    event.preventDefault();
    setOpen(false);

    if (id === 'contact' || location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    setSectionToScroll(id);
    navigate('/');
  };

  const links = [
    { label: t.nav.about, section: 'about' },
    { label: t.nav.services, to: '/services' },
    { label: t.nav.location, section: 'location' },
    { label: t.nav.gallery, to: '/gallery' },
    { label: t.nav.guidelines, to: '/guidelines' },
    { label: t.nav.chat, to: '/chat' },
    { label: t.nav.contact, section: 'contact' },
  ];

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-name">{SHOP.name[lang]}</span>
          <span className="brand-tag">{t.tagline}</span>
        </Link>

        <nav className={`nav${open ? ' open' : ''}`} aria-label="Main">
          {links.map((item) => item.section ? (
            <a
              key={item.section}
              href={`#${item.section}`}
              className="nav-link"
              onClick={(event) => scrollToSection(event, item.section)}
            >
              {item.label}
            </a>
          ) : (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <div className="lang-toggle" role="group" aria-label="Language">
            <button type="button" aria-pressed={lang === 'en'} className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>
              English
            </button>
            <button type="button" aria-pressed={lang === 'ne'} className={lang === 'ne' ? 'on' : ''} onClick={() => setLang('ne')}>
              नेपाली
            </button>
          </div>
          <button
            type="button"
            className="menu-btn"
            aria-label={t.menu}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
