import { Link } from 'react-router-dom';
import { useLang } from '../LangContext.jsx';
import { SHOP, DELIVERY_AREAS } from '../data/shopData.js';
import heroImage from '../../assets/hero.jpg';

export default function Home() {
  const { lang, t } = useLang();
  const tel = 'tel:' + SHOP.phone.replace(/\s/g, '');
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(SHOP.address.en)}&output=embed`;
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <section className="hero" style={{ '--hero-image': `url("${heroImage}")` }}>
        <div className="hero-text">
          <span className="eyebrow">{t.hero.eyebrow}</span>
          <h1 className="display">{t.hero.title}</h1>
          <p className="lead">{t.hero.sub}</p>
          <div className="btn-row">
            <button type="button" className="btn btn-primary" onClick={scrollToContact}>
              {t.hero.call}
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>

      <section className="section page-wrap" id="about">
        <span className="eyebrow">{t.about.eyebrow}</span>
        <h2 className="h2">{t.about.title}</h2>
        <p className="lead narrow">{t.about.body}</p>
        <div className="card-grid three">
          {t.about.cards.map((card) => (
            <div className="card" key={card.title}>
              <h3 className="h3">{card.title}</h3>
              <p>{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="band" id="location">
        <div className="page-wrap band-inner">
          <div className="band-layout">
            <div className="band-text">
              <h2 className="h2">{t.find.title}</h2>
              <p className="lead">{SHOP.address[lang]}</p>
              <p>
                <strong>{t.find.delivery}:</strong> {DELIVERY_AREAS[lang]}
              </p>
              <div className="btn-row">
                <a className="btn btn-primary" href={SHOP.mapLink} target="_blank" rel="noreferrer">
                  {lang === 'ne' ? 'Google Maps मा हेर्नुहोस्' : 'Open in Google Maps'}
                </a>
                <a className="btn btn-outline" href={tel}>
                  {SHOP.phone}
                </a>
              </div>
            </div>
            <iframe
              className="location-map"
              title="Aashish Enterprises location on Google Maps"
              src={mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="section page-wrap">
        <div className="cta">
          <div>
            <h2 className="h2">{t.cta.title}</h2>
            <p className="lead">{t.cta.body}</p>
          </div>
          <Link to="/chat" className="btn btn-primary">
            {t.cta.button}
          </Link>
        </div>
      </section>
    </>
  );
}
