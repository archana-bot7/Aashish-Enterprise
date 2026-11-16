export const SHOP = {
  name: { en: 'Aashish Enterprises', ne: 'आशिष इन्टरप्राइजेज' },
  phone: '+977 9851192091',
  whatsapp: '9779851192091',
  mapLink: 'https://maps.app.goo.gl/EKcd797xb441VvAK8',
  address: {
    en: 'Manebhanjyang Ward No. 7, Harkapur, Okhaldhunga, Nepal',
    ne: 'मानेभञ्ज्याङ वडा नं. ७, हर्कापुर, ओखलढुङ्गा, नेपाल',
  },
};

export const SERVICES = {
  en: 'We supply broiler, pig, Giriraj and cow feed, as well as feeders, drinkers and chicks. We also provide home delivery to farmers. To order, visit the shop or call us.',
  ne: 'हामी कुखुरा, सुँगुर, गिरिराज र गाईको दाना साथै दाना र पानीका भाँडा तथा चल्लाहरू आपूर्ति गर्छौं। किसानहरूलाई घरमै डेलिभरी सेवा पनि उपलब्ध छ। अर्डर गर्न पसलमा आउनुहोस् वा फोन गर्नुहोस्।',
};

export const DELIVERY_AREAS = {
  en: 'We currently provide home delivery to farmers in Okhaldhunga, Solukhumbu and Khotang districts.',
  ne: 'हाल हामी ओखलढुङ्गा, सोलुखुम्बु र खोटाङ जिल्लाका किसानहरूलाई घरमै डेलिभरी सेवा प्रदान गर्छौं।',
};

export const PRICES_UPDATED = '10/24/2026';

export const PRICES = [
  {
    title: { en: 'Broiler feed', ne: 'कुखुराको दाना' },
    items: [
      { name: { en: 'B0 Broiler Feed', ne: 'B0 कुखुराको दाना' }, price: 'NPR 4,400', unit: { en: 'per sack', ne: 'प्रति बोरा' } },
      { name: { en: 'B1 Broiler Feed', ne: 'B1 कुखुराको दाना' }, price: 'NPR 4,300', unit: { en: 'per sack', ne: 'प्रति बोरा' } },
      { name: { en: 'B2 Broiler Feed', ne: 'B2 कुखुराको दाना' }, price: 'NPR 4,200', unit: { en: 'per sack', ne: 'प्रति बोरा' } },
    ],
  },
  {
    title: { en: 'Giriraj feed', ne: 'गिरिराज दाना' },
    items: [
      { name: { en: 'G2 Giriraj Feed', ne: 'G2 गिरिराज दाना' }, price: 'NPR 2,800', unit: { en: 'per sack', ne: 'प्रति बोरा' } },
    ],
  },
  {
    title: { en: 'Pig feed', ne: 'सुँगुरको दाना' },
    items: [
      { name: { en: 'P1 Pig Feed', ne: 'P1 सुँगुरको दाना' }, price: 'NPR 3,400', unit: { en: 'per sack', ne: 'प्रति बोरा' } },
      { name: { en: 'P2 Pig Feed', ne: 'P2 सुँगुरको दाना' }, price: 'NPR 3,300', unit: { en: 'per sack', ne: 'प्रति बोरा' } },
      { name: { en: 'P3 Pig Feed', ne: 'P3 सुँगुरको दाना' }, price: 'NPR 3,250', unit: { en: 'per sack', ne: 'प्रति बोरा' } },
    ],
  },
  {
    title: { en: 'Feeders and drinkers', ne: 'दाना र पानीका भाँडा' },
    items: [
      { name: { en: 'Small size', ne: 'सानो साइज' }, price: 'NPR 250', unit: { en: 'each', ne: 'प्रति थान' } },
      { name: { en: 'Big size', ne: 'ठूलो साइज' }, price: 'NPR 500', unit: { en: 'each', ne: 'प्रति थान' } },
    ],
  },
  {
    title: { en: 'Chicks', ne: 'चल्ला' },
    items: [
      { name: { en: 'Contact us for current prices: 9851192091', ne: 'हालको मूल्यका लागि सम्पर्क गर्नुहोस्: 9851192091' } },
    ],
  },
];

export const TEXT = {
  en: {
    title: 'Chat with us',
    greeting: 'Namaste! Welcome to Aashish Enterprises. How can I help you today?',
    choose: 'Choose an option:',
    menu: {
      services: 'Our services',
      prices: 'Prices',
      location: 'Location',
      delivery: 'Delivery areas',
      owner: 'Talk to the owner',
    },
    pricesIntro: "Here is the latest price list (updated {date}):",
    pricesNote: 'Prices can change, so please call to confirm.',
    locationIntro: 'Our address:',
    openMap: 'Open in Google Maps',
    deliveryIntro: 'Our delivery areas:',
    ownerIntro: 'Contact the owner directly:',
    call: 'Call',
    whatsapp: 'WhatsApp',
  },
  ne: {
    title: 'हामीसँग कुरा गर्नुहोस्',
    greeting: 'नमस्ते! आशिष इन्टरप्राइजेजमा स्वागत छ। म तपाईंलाई कसरी सहयोग गर्न सक्छु?',
    choose: 'एउटा विकल्प छान्नुहोस्:',
    menu: {
      services: 'हाम्रा सेवाहरू',
      prices: 'मूल्य सूची',
      location: 'ठेगाना',
      delivery: 'डेलिभरी क्षेत्र',
      owner: 'मालिकसँग कुरा गर्नुहोस्',
    },
    pricesIntro: 'नयाँ मूल्य सूची (अपडेट मिति: {date}):',
    pricesNote: 'मूल्य परिवर्तन हुन सक्छ, कृपया पक्का गर्न फोन गर्नुहोस्।',
    locationIntro: 'हाम्रो ठेगाना:',
    openMap: 'Google Maps मा हेर्नुहोस्',
    deliveryIntro: 'हाम्रा डेलिभरी क्षेत्रहरू:',
    ownerIntro: 'मालिकलाई सिधै सम्पर्क गर्नुहोस्:',
    call: 'फोन गर्नुहोस्',
    whatsapp: 'WhatsApp',
  },
};
