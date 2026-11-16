import { useEffect, useRef, useState } from 'react';
import { useLang } from '../LangContext.jsx';
import { SHOP, SERVICES, DELIVERY_AREAS, PRICES, PRICES_UPDATED, TEXT } from '../data/shopData.js';

const OPTIONS = ['services', 'prices', 'location', 'delivery', 'owner'];

// Messages are stored as keys (not text), so switching language re-renders
// the whole conversation in the other language.
let nextId = 1;
const msg = (role, kind) => ({ id: nextId++, role, kind });

export default function Chatbot() {
  const { lang } = useLang();
  const c = TEXT[lang];
  const [messages, setMessages] = useState(() => [msg('bot', 'greeting')]);
  const endRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages]);

  const choose = (key) => {
    setMessages((m) => [...m, msg('user', key), msg('bot', key)]);
  };

  const reset = () => setMessages([msg('bot', 'greeting')]);

  const phoneHref = 'tel:' + SHOP.phone.replace(/\s/g, '');
  const waHref = 'https://wa.me/' + SHOP.whatsapp;

  const renderBot = (kind) => {
    switch (kind) {
      case 'greeting':
        return <p>{c.greeting}</p>;
      case 'services':
        return <p>{SERVICES[lang]}</p>;
      case 'prices':
        return (
          <>
            <p>{c.pricesIntro.replace('{date}', PRICES_UPDATED)}</p>
            {PRICES.map((group) => (
              <div className="price-group" key={group.title.en}>
                <strong>{group.title[lang]}</strong>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.name.en}>
                      <span>{item.name[lang]}</span>
                      {item.price && (
                        <span className="price-val">
                          {item.price}
                          {item.unit ? ` ${item.unit[lang]}` : ''}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <p className="muted-note">{c.pricesNote}</p>
          </>
        );
      case 'location':
        return (
          <>
            <p>{c.locationIntro}</p>
            <p>
              <strong>{SHOP.address[lang]}</strong>
            </p>
            <a className="btn btn-primary btn-small" href={SHOP.mapLink} target="_blank" rel="noreferrer">
              {c.openMap}
            </a>
          </>
        );
      case 'delivery':
        return (
          <>
            <p>{c.deliveryIntro}</p>
            <p>{DELIVERY_AREAS[lang]}</p>
          </>
        );
      case 'owner':
        return (
          <>
            <p>{c.ownerIntro}</p>
            <p>
              <strong>{SHOP.phone}</strong>
            </p>
            <div className="bubble-actions">
              <a className="btn btn-primary btn-small" href={phoneHref}>
                {c.call}
              </a>
              <a className="btn btn-green btn-small" href={waHref} target="_blank" rel="noreferrer">
                {c.whatsapp}
              </a>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <section className="chatbot" aria-label={c.title}>
      <div className="chatbot-head">
        <div>
          <div className="chatbot-title">{c.title}</div>
          <div className="chatbot-sub">{SHOP.name[lang]}</div>
        </div>
        <span className="online-dot" aria-hidden="true" />
      </div>

      <div className="chatbot-body" ref={listRef} aria-live="polite">
        {messages.map((m) =>
          m.role === 'user' ? (
            <div className="bubble-row user" key={m.id}>
              <div className="bubble bubble-user">{c.menu[m.kind]}</div>
            </div>
          ) : (
            <div className="bubble-row bot" key={m.id}>
              <div className="bubble bubble-bot">{renderBot(m.kind)}</div>
            </div>
          )
        )}
        <div ref={endRef} />
      </div>

      <div className="chatbot-foot">
        <div className="choose-label">{c.choose}</div>
        <div className="chip-row">
          {OPTIONS.map((key) => (
            <button type="button" key={key} className="chip-btn" onClick={() => choose(key)}>
              {c.menu[key]}
            </button>
          ))}
        </div>
        {messages.length > 1 && (
          <button type="button" className="reset-btn" onClick={reset}>
            ↺ {c.title}
          </button>
        )}
      </div>
    </section>
  );
}
