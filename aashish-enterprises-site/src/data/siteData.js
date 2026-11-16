// Extra site content (not part of the chatbot data in shopData.js).
// Edit this file to change product cards and contact extras.
import bagBps from '../../assets/bag-bps.png';
import bagB1 from '../../assets/bag-b1.png';
import bagB2 from '../../assets/bag-b2.png';
import bagL1 from '../../assets/bag-l1.png';
import bagL2 from '../../assets/bag-l2.png';
import girirajFeed from '../../assets/giriraj-feed.png';
import pigFeedP1 from '../../assets/pig-feed-p1.png';
import pigFeedP2 from '../../assets/pig-feed-p2.png';
import pigFeedP3 from '../../assets/pig-feed-p3.png';
import feederImage from '../../assets/feeder-big.png';
import drinkerImage from '../../assets/drinker-big.png';
import feederVideo from '../../assets/feeder-video.mp4';
import feedBanner from '../../assets/feed-banner.png';
import pigFeedBanner from '../../assets/pig-feed-banner-update.png';

export const CONTACT = {
  phone2: '+977 9801192091',
  email: 'bednathgautam79@gmail.com',
  proprietor: 'Bednath Gautam',
  facebook: 'Bednath Gautam',
};

const BROILER_INGREDIENTS =
  'Maize, soyabean and other oil cakes, rice polish bran, mono calcium phosphate, limestone powder, vitamin and mineral premix, salt and sodium bicarbonate.';
const LAYER_INGREDIENTS =
  'Maize, soyabean and other oil cakes, rice polish bran, mono calcium phosphate, limestone powder, stone grit, vitamin and mineral premix, salt and sodium bicarbonate.';

export const PRODUCT_GROUPS = [
  {
    id: 'broiler',
    title: { en: 'Broiler feed', ne: 'कुखुराको दाना (ब्रोइलर)' },
    banner: feedBanner,
    items: [
      { name: { en: 'B0 Pre-Starter Feed', ne: 'B0 प्रि-स्टार्टर दाना' }, stage: { en: '0 to 14 days', ne: '० देखि १४ दिन' }, ingredients: BROILER_INGREDIENTS, image: bagBps },
      { name: { en: 'B1 Starter Feed', ne: 'B1 स्टार्टर दाना' }, stage: { en: '15 to 28 days', ne: '१५ देखि २८ दिन' }, ingredients: BROILER_INGREDIENTS, image: bagB1 },
      { name: { en: 'B2 Grower Feed', ne: 'B2 ग्रोअर दाना' }, stage: { en: '29 to 42 days', ne: '२९ देखि ४२ दिन' }, ingredients: BROILER_INGREDIENTS, image: bagB2 },
    ],
  },
  {
    id: 'layer',
    title: { en: 'Layer and Giriraj feed', ne: 'लेयर र गिरिराज दाना' },
    items: [
      { name: { en: 'L1 Starter Feed', ne: 'L1 स्टार्टर दाना' }, stage: { en: 'Up to 8 weeks', ne: '८ हप्तासम्म' }, ingredients: LAYER_INGREDIENTS, image: bagL1 },
      { name: { en: 'L2 Grower Feed', ne: 'L2 ग्रोअर दाना' }, stage: { en: '9 to 16 weeks', ne: '९ देखि १६ हप्ता' }, ingredients: LAYER_INGREDIENTS, image: bagL2 },
      { name: { en: 'Giriraj Grower Feed', ne: 'गिरिराज ग्रोअर दाना' }, stage: { en: 'Growing phase', ne: 'बढ्दो चरण' }, ingredients: '', image: girirajFeed },
    ],
  },
  {
    id: 'pig',
    title: { en: 'Pig feed', ne: 'सुँगुरको दाना' },
    banner: pigFeedBanner,
    items: [
      { name: { en: 'P1 Pig Feed', ne: 'P1 सुँगुरको दाना' }, stage: { en: '15 kg to 30 kg', ne: '१५ केजी देखि ३० केजी' }, ingredients: '', image: pigFeedP1 },
      { name: { en: 'P2 Pig Feed', ne: 'P2 सुँगुरको दाना' }, stage: { en: '30 kg to 60 kg', ne: '३० केजी देखि ६० केजी' }, ingredients: '', image: pigFeedP2 },
      { name: { en: 'P3 Pig Feed', ne: 'P3 सुँगुरको दाना' }, stage: { en: '60 kg to 120 kg', ne: '६० केजी देखि १२० केजी' }, ingredients: '', image: pigFeedP3 },
    ],
  },
  {
    id: 'equipment',
    title: { en: 'Feeders and drinkers', ne: 'दाना र पानीका भाँडा' },
    items: [
      { name: { en: 'Hanging feeder', ne: 'झुण्ड्याउने दानाको भाँडो' }, stage: null, note: { en: 'Less feed waste. Easy access for your flock.', ne: 'दाना कम खेर जान्छ। कुखुराले सजिलै खान सक्छन्।' }, ingredients: '', image: feederImage },
      { name: { en: 'Automatic drinker', ne: 'स्वचालित पानीको भाँडो' }, stage: null, note: { en: 'A steady supply of fresh water, made simple.', ne: 'सफा पानीको निरन्तर आपूर्ति, सजिलै।' }, ingredients: '', image: drinkerImage },
      { name: { en: 'Feeder and drinker video', ne: 'दाना र पानीका भाँडाको भिडियो' }, stage: null, note: { en: 'See the feeder and drinker in action.', ne: 'दाना र पानीका भाँडा प्रयोगमा हेर्नुहोस्।' }, ingredients: '', video: feederVideo },
    ],
  },
];

