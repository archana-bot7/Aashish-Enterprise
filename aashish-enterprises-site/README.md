# Aashish Enterprises website

React + Vite site with an orange header and footer, English/Nepali toggle, and these pages:

| Page | Route | What it has |
|---|---|---|
| Home | `/#/` | Hero, about, location, delivery areas, link to chat |
| Services | `/#/services` | Feed and equipment cards with feeding stage and ingredients |
| Gallery | `/#/gallery` | Gallery with two photos |
| Chat with us | `/#/chat` | Opens the chatbot |

## Run it

```powershell
# Run these commands from the downloaded project folder
npm install
npm run dev      # opens a local preview
npm run build    # makes the dist/ folder to upload
```

Needs Node.js 18 or newer.

## Images

The home-page chicks photo, broiler/layer/Giriraj and pig feed bags, feeder/drinker images, feeder video, QR codes, and two gallery photos are imported from `assets/` and bundled with the site. Replace the corresponding files there to update them.

## Where to edit things

- `src/data/shopData.js` : the chatbot data (phone, WhatsApp number, map link, address, services, delivery areas, prices, chatbot wording). Change a price here and the chatbot updates. Remember to update `PRICES_UPDATED` too.
- `src/data/siteData.js` : product cards, ingredients, second phone, email.
- `src/i18n.js` : all website text in English and Nepali.
- `src/styles.css` : colors are at the top (`--header-orange` is the header and footer color).

## Put it online

Upload the `dist/` folder to Netlify, Vercel, or any static host. Links use `#` routes, so no special server setup is needed.
