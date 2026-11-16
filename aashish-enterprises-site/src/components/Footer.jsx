import { useLang } from '../LangContext.jsx';
import { SHOP } from '../data/shopData.js';
import { CONTACT } from '../data/siteData.js';
import Img from './Img.jsx';
import esewaQr from '../../assets/esewa-qr.jpg';
import nepalpayQr from '../../assets/nepalpay-qr.jpg';

// Facebook SVG logo (official colour)
function FacebookIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="24" height="24" rx="6" fill="#1877F2"/>
      <path d="M16.5 8H14.5C13.948 8 13.5 8.448 13.5 9V11H16.5L16 14H13.5V22H10.5V14H8.5V11H10.5V9C10.5 7.343 11.843 6 13.5 6H16.5V8Z" fill="white"/>
    </svg>
  );
}

// WhatsApp SVG icon
function WhatsAppIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#25D366"/>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="white"/>
    </svg>
  );
}

export default function Footer() {
  const { lang, t } = useLang();
  const tel = (n) => 'tel:' + n.replace(/\s/g, '');

  return (
    <footer className="footer" id="contact">
      <div className="footer-inner">
        <div className="footer-col">
          <h2 className="footer-title">{t.footer.contact}</h2>

          {/* Owner / Proprietor name at the top */}
          <span className="footer-proprietor">
            {t.footer.proprietor}: {CONTACT.proprietor}
          </span>

          {/* Rest of information */}
          <a href={tel(SHOP.phone)}>{SHOP.phone}</a>
          <a href={tel(CONTACT.phone2)}>{CONTACT.phone2}</a>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <span>{SHOP.address[lang]}</span>

          {/* WhatsApp and Facebook at the last */}
          <a
            className="footer-wa-link"
            href="https://wa.me/9779851192091"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon size={22} />
            WhatsApp
          </a>

          <a
            className="footer-fb-link"
            href="https://www.facebook.com/bednath.gautam.94"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FacebookIcon size={24} />
            Facebook
          </a>
        </div>

        <div className="footer-col">
          <h2 className="footer-title">{t.footer.payment}</h2>
          <div className="pay-row">
            <figure className="pay-card">
              <Img src={esewaQr} alt="eSewa QR" label="eSewa QR" className="pay-qr" />
              <figcaption>eSewa: {t.footer.scan}</figcaption>
            </figure>
            <figure className="pay-card">
              <Img src={nepalpayQr} alt="NepalPay QR" label="NepalPay QR" className="pay-qr" />
              <figcaption>NepalPay: {t.footer.scan}</figcaption>
            </figure>
          </div>
          <span className="cod-pill">{t.footer.cod}</span>
        </div>
      </div>
      <div className="footer-bottom">
        © 2026 {SHOP.name[lang]}. {t.footer.rights}
      </div>
    </footer>
  );
}
