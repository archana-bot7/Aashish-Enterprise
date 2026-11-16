import { useLang } from '../LangContext.jsx';
import { SERVICES } from '../data/shopData.js';
import { PRODUCT_GROUPS } from '../data/siteData.js';
import Img from '../components/Img.jsx';

export default function Services() {
  const { lang, t } = useLang();

  return (
    <div className="services-page">
      <div className="page-wrap section services-content">
        <div className="products-panel">
          <div className="services-header-box">
            <h1 className="services-title">{t.services.title}</h1>
            <p className="lead">{SERVICES[lang]}</p>
          </div>

          {PRODUCT_GROUPS.map((group) => (
            <section key={group.id} className={`group group-${group.id}`}>
              <h2 className="h2 group-title">{group.title[lang]}</h2>
              {group.banner && (
                <Img
                  src={group.banner}
                  alt={group.title[lang]}
                  label={group.title[lang]}
                  className="group-banner"
                />
              )}
              <div className="card-grid three">
                {group.items.map((item) => (
                  <article className="card product" key={item.name.en}>
                    {item.video ? (
                      <video
                        className="product-img equipment-video"
                        src={item.video}
                        controls
                        playsInline
                        preload="metadata"
                        aria-label={item.name[lang]}
                      >
                        {lang === 'ne' ? 'तपाईंको ब्राउजरले भिडियो चलाउन सक्दैन।' : 'Your browser does not support video.'}
                      </video>
                    ) : (
                      <Img src={item.image} alt={item.name[lang]} label={item.name[lang]} className="product-img" />
                    )}
                    <div className="product-head">
                      <h3 className="h3">{item.name[lang]}</h3>
                      {item.stage && <span className="stage">{item.stage[lang]}</span>}
                    </div>
                    {item.note && <p>{item.note[lang]}</p>}
                    {group.id !== 'equipment' && (
                      <details className="ingredients">
                        <summary>{t.services.ingredients}</summary>
                        <p>{item.ingredients || t.services.ingredientsMissing}</p>
                      </details>
                    )}
                  </article>
                ))}
              </div>
            </section>
          ))}

          <p className="price-note">{t.services.priceNote}</p>
        </div>
      </div>
    </div>
  );
}
