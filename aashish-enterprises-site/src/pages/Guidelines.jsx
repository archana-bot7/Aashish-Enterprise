import './guidelines-page.css';
import { useLang } from '../LangContext.jsx';

const CONTENT = {
  en: {
    pageTitle: 'Poultry Farming Guidelines',
    sec1: {
      num: '1',
      title: 'Broiler Production Cycle',
      steps: [
        'Farm Preparation',
        'Chick Arrival',
        'Brooding',
        'Starter Feeding',
        'Grower Feeding',
        'Finisher Feeding',
        'Health Monitoring',
        'Marketing',
        'Farm Cleaning & Disinfection',
        'Next Batch',
      ],
      tableHeaders: ['Stage', 'Age', 'Main Activity'],
      stages: [
        ['Brooding', 'Day 1–7', 'Provide warmth, water and starter feed'],
        ['Early Growth', 'Day 8–14', 'Maintain temperature and encourage growth'],
        ['Growing Phase', 'Day 15–28', 'Provide grower feed and monitor weight'],
        ['Finishing Phase', 'Day 29–42', 'Provide finisher feed and prepare for marketing'],
        ['Marketing', 'Around Day 35–45', 'Sell healthy, market-ready birds'],
      ],
      note: 'Marketing age depends on bird weight, breed, health and market demand.',
    },
    sec2: {
      num: '2',
      title: 'Preparation Before Chicks Arrive',
      cards: [
        {
          badge: 'a',
          title: 'Poultry House Construction',
          items: [
            'Select a dry, elevated location with good drainage and access to clean water.',
            'Build an east–west-oriented house where practical to reduce direct sunlight.',
            'Use a concrete floor for easy cleaning and disinfection.',
            'Provide a strong, weather-resistant roof with adequate insulation.',
            'Install wire mesh on the sides for ventilation and adjustable curtains for protection against cold winds and rain.',
            'Ensure sufficient space to prevent overcrowding (approximately 1 sq. ft. per bird as an initial planning guide).',
          ],
        },
        {
          badge: 'b',
          title: 'Floor and Bedding Preparation',
          items: [
            'Spread clean, dry rice husk (भुस/चोकर) across the floor.',
            'Maintain approximately 5–10 cm of bedding depth.',
            'Ensure bedding is free from moisture, mould and dirt.',
            'Remove old litter and disinfect the floor before introducing a new batch.',
          ],
        },
        {
          badge: 'c',
          title: 'Equipment Installation',
          items: [
            'Install chick feeders and drinkers.',
            'Arrange suitable brooders or heating equipment.',
            'Install thermometers to monitor temperature.',
            'Arrange adequate lighting and ventilation.',
            'Keep a clean water tank and backup heating arrangements.',
          ],
        },
        {
          badge: 'd',
          title: 'Before Chicks Arrive',
          items: [
            'Clean and disinfect the entire poultry house and equipment.',
            'Allow the house to dry completely.',
            'Preheat the brooding area 24–48 hours before chick arrival.',
            'Purchase healthy chicks from a reliable hatchery.',
            'Prepare fresh feed and clean drinking water.',
          ],
        },
      ],
    },
    sec3: {
      num: '3',
      title: 'Chick Arrival and Brooding (Day 1–7)',
      stats: [
        { val: '32–34°C', label: 'Initial brooding temperature' },
        { val: 'Day 1–7', label: 'Brooding period' },
        { val: 'Immediately', label: 'Provide clean water on arrival' },
      ],
      cards: [
        {
          title: 'On Arrival',
          items: [
            'Place chicks gently inside the prepared brooding area.',
            'Provide clean drinking water immediately.',
            'Offer quality broiler starter crumble.',
            'Ensure all chicks can easily access food and water.',
          ],
        },
        {
          title: 'Daily Monitoring',
          items: [
            'Maintain temperature of approximately 32–34°C initially at chick level.',
            'Observe chick behaviour to identify overheating or chilling.',
            'Keep bedding dry and maintain adequate ventilation.',
            'Follow the recommended vaccination programme.',
          ],
        },
      ],
    },
    sec4: {
      num: '4',
      title: 'Feeding and Growing Schedule',
      noteTop:
        'Broiler chickens require different types of feed as they grow. Always use nutritionally balanced commercial broiler feed.',
      tableHeaders: ['Feed Type', 'Age', 'Form', 'Crude Protein', 'Purpose'],
      rows: [
        [
          'A. Starter Feed',
          'Day 1–14',
          'Crumble',
          '≈ 21–23%',
          'Early growth, immunity and bone development',
        ],
        [
          'B. Grower Feed',
          'Day 15–28',
          'Crumble / pellets',
          '≈ 19–21%',
          'Muscle development and rapid body-weight gain',
        ],
        [
          'C. Finisher Feed',
          'Day 29–42',
          'Pellets / crumble',
          '≈ 18–19%',
          'Final body-weight development and meat production',
        ],
      ],
      subTitle: 'Feeding Frequency and Management',
      doTitle: 'Do',
      doItems: [
        'Give access to feed throughout the day (ad-libitum feeding).',
        'Check and refill feeders about 3–4 times a day, or whenever necessary.',
        'Adjust feeder height as chickens grow.',
        'Store feed in a cool, dry and pest-free location.',
      ],
      avoidTitle: 'Avoid',
      avoidItems: [
        'Leaving feeders empty for extended periods.',
        'Overfilling feeders and wasting feed.',
      ],
      noteBottom:
        "Feed specifications and phase changes should follow the manufacturer's recommendations and the selected broiler strain's nutritional requirements.",
    },
    sec5: {
      num: '5',
      title: 'Drinking Water Management',
      cards: [
        {
          title: 'Daily Care',
          items: [
            'Provide clean and fresh drinking water 24 hours a day.',
            'Wash drinkers daily.',
            'Keep water tanks covered and clean.',
            'Prevent litter, dirt and droppings from entering the water.',
          ],
        },
        {
          title: 'Quality & Supplements',
          items: [
            'Check water availability frequently, especially during summer.',
            'Test drinking-water quality periodically.',
            'Use vitamins or electrolytes only when necessary and as advised by a veterinarian.',
          ],
        },
      ],
    },
  },
  ne: {
    pageTitle: 'कुखुरा पालन मार्गदर्शन',
    sec1: {
      num: '१',
      title: 'ब्रोइलर उत्पादन चक्र',
      steps: [
        'फार्मको तयारी',
        'चल्ला आगमन',
        'ब्रुडिङ',
        'स्टार्टर दाना',
        'ग्रोअर दाना',
        'फिनिसर दाना',
        'स्वास्थ्य निगरानी',
        'बिक्री तथा बजार व्यवस्थापन',
        'फार्म सफाइ तथा निसङ्क्रमण',
        'अर्को ब्याचको तयारी',
      ],
      tableHeaders: ['चरण', 'उमेर', 'मुख्य क्रियाकलाप'],
      stages: [
        ['ब्रुडिङ', 'दिन १–७', 'न्यानो तापक्रम, पानी र स्टार्टर दाना उपलब्ध गराउने'],
        ['प्रारम्भिक वृद्धि', 'दिन ८–१४', 'उचित तापक्रम कायम राखी वृद्धिलाई प्रोत्साहन गर्ने'],
        ['वृद्धि चरण', 'दिन १५–२८', 'ग्रोअर दाना दिने र तौलको निगरानी गर्ने'],
        ['अन्तिम चरण', 'दिन २९–४२', 'फिनिसर दाना दिने र बजार बिक्रीको तयारी गर्ने'],
        ['बिक्री', 'लगभग दिन ३५–४५', 'स्वस्थ र उचित तौल भएका कुखुरा बिक्री गर्ने'],
      ],
      note: 'बिक्रीको उमेर कुखुराको तौल, जात, स्वास्थ्य र बजारको मागमा निर्भर गर्दछ।',
    },
    sec2: {
      num: '२',
      title: 'चल्ला आउनु अघिको तयारी',
      cards: [
        {
          badge: 'क',
          title: 'कुखुराको खोर निर्माण',
          items: [
            'राम्रो निकास र सफा पानीको सुविधा भएको सुक्खा तथा अग्लो ठाउँ छान्नुहोस्।',
            'प्रत्यक्ष घामबाट जोगाउन सम्भव भएसम्म पूर्व-पश्चिम मोहोडा गरी खोर बनाउनुहोस्।',
            'सजिलो सफाइ र निसङ्क्रमणका लागि पक्की (सिमेन्ट) भुइँ बनाउनुहोस्।',
            'पर्याप्त इन्सुलेशन भएको बलियो र मौसम प्रतिरोधी छाना राख्नुहोस्।',
            'हावाको आवतजावतका लागि छेउमा जाली र चिसो हावा तथा पानीबाट जोगाउन पर्दा लगाउनुहोस्।',
            'भीडभाड हुन नदिन पर्याप्त ठाउँ सुनिश्चित गर्नुहोस् (प्रति कुखुरा लगभग १ वर्ग फिट)।',
          ],
        },
        {
          badge: 'ख',
          title: 'भुइँ र सोत्तर (बिछ्यौना) को तयारी',
          items: [
            'भुइँभरि सफा र सुक्खा धानको भुस राम्रोसँग फैलाउनुहोस्।',
            'सोत्तरको गहिराइ लगभग ५–१० सेमी (२–४ इन्च) कायम राख्नुहोस्।',
            'सोत्तर ओसिलो, ढुसी परेको र फोहोर नभएको सुनिश्चित गर्नुहोस्।',
            'नयाँ ब्याच ल्याउनु अघि पुरानो सोत्तर हटाई भुइँ राम्रोसँग निसङ्क्रमण गर्नुहोस्।',
          ],
        },
        {
          badge: 'ग',
          title: 'उपकरण तथा भाँडाकुँडा जडान',
          items: [
            'चल्लाका लागि दाना र पानीका भाँडाहरू उचित स्थानमा राख्नुहोस्।',
            'उपयुक्त ब्रुडर वा तापक्रम दिने हीटर/बल्बको व्यवस्था गर्नुहोस्।',
            'खोरको तापक्रम नाप्न थर्मामिटर जडान गर्नुहोस्।',
            'पर्याप्त प्रकाश र स्वच्छ हावाको आवतजावतको व्यवस्था गर्नुहोस्।',
            'सफा पानीको ट्याङ्की र बत्ती जाँदा वैकल्पिक तापको व्यवस्था राख्नुहोस्।',
          ],
        },
        {
          badge: 'घ',
          title: 'चल्ला आइपुग्नु अगाडि',
          items: [
            'सम्पूर्ण खोर र सबै उपकरणहरू सफा तथा निसङ्क्रमित गर्नुहोस्।',
            'खोरलाई पूर्ण रूपमा सुक्न दिनुहोस्।',
            'चल्ला आइपुग्नुभन्दा २४–४८ घण्टा अगावै ब्रुडिङ क्षेत्र न्यानो बनाउनुहोस्।',
            'भरपर्दो ह्याचरीबाट मात्र स्वस्थ र सक्रिय चल्ला खरिद गर्नुहोस्।',
            'ताजा दाना र सफा पिउने पानी पहिले नै तयार राख्नुहोस्।',
          ],
        },
      ],
    },
    sec3: {
      num: '३',
      title: 'चल्ला आगमन र ब्रुडिङ (दिन १–७)',
      stats: [
        { val: '३२–३४°C', label: 'सुरुवाती ब्रुडिङ तापक्रम' },
        { val: 'दिन १–७', label: 'ब्रुडिङ अवधि' },
        { val: 'तुरुन्तै', label: 'आगमनसाथ सफा पानी दिने' },
      ],
      cards: [
        {
          title: 'आगमनको समयमा',
          items: [
            'चल्लाहरूलाई विस्तारै तयार गरिएको ब्रुडिङ क्षेत्रमा राख्नुहोस्।',
            'आगमनसाथ तुरुन्तै सफा र ताजा पिउने पानी दिनुहोस्।',
            'गुणस्तरीय ब्रोइलर स्टार्टर (B0/B1) क्रम्बल दाना दिनुहोस्।',
            'सबै चल्लाले सजिलै दाना र पानी भेट्टाउन सक्ने सुनिश्चित गर्नुहोस्।',
          ],
        },
        {
          title: 'दैनिक निगरानी',
          items: [
            'चल्लाको सतहमा सुरुमा लगभग ३२–३४°C तापक्रम कायम राख्नुहोस्।',
            'चल्लाको गतिविधि हेरेर धेरै तातो वा चिसो भएको पत्ता लगाउनुहोस्।',
            'सोत्तर सधैं सुक्खा राख्नुहोस् र स्वच्छ हावाको व्यवस्था गर्नुहोस्।',
            'तोकिएको खोप तालिका कडाइका साथ पालना गर्नुहोस्।',
          ],
        },
      ],
    },
    sec4: {
      num: '४',
      title: 'दाना खुवाउने र वृद्धि तालिका',
      noteTop:
        'ब्रोइलर कुखुरालाई उमेर अनुसार फरक प्रकारको दाना चाहिन्छ। सधैं सन्तुलित र गुणस्तरीय व्यावसायिक दाना प्रयोग गर्नुहोस्।',
      tableHeaders: ['दानाको प्रकार', 'उमेर', 'प्रकार (Form)', 'प्रोटिन मात्रा', 'उद्देश्य'],
      rows: [
        [
          'क. स्टार्टर दाना',
          'दिन १–१४',
          'क्रम्बल',
          '≈ २१–२३%',
          'सुरुवाती वृद्धि, रोग प्रतिरोधात्मक क्षमता र हड्डीको विकास',
        ],
        [
          'ख. ग्रोअर दाना',
          'दिन १५–२८',
          'क्रम्बल / पेलेट',
          '≈ १९–२१%',
          'मासुको विकास र तीव्र तौल वृद्धि',
        ],
        [
          'ग. फिनिसर दाना',
          'दिन २९–४२',
          'पेलेट / क्रम्बल',
          '≈ १८–१९%',
          'बिक्रीयोग्य अन्तिम तौल र गुणस्तरीय मासु उत्पादन',
        ],
      ],
      subTitle: 'दाना खुवाउने तरिका र व्यवस्थापन',
      doTitle: 'गर्नुपर्ने कुराहरू',
      doItems: [
        'दिनभरि दाना खान पाउने व्यवस्था गर्नुहोस् (Ad-libitum feeding)।',
        'दिनमा लगभग ३–४ पटक वा आवश्यक अनुसार दानाको भाँडो जाँच्नुहोस् र भर्नुहोस्।',
        'कुखुराको उमेर अनुसार दानाको भाँडोको उचाइ मिलाउनुहोस्।',
        'दानालाई चिसो, सुक्खा र मुसा वा कीराबाट सुरक्षित ठाउँमा भण्डारण गर्नुहोस्।',
      ],
      avoidTitle: 'गर्न नहुने कुराहरू',
      avoidItems: [
        'दानाको भाँडो लामो समयसम्म खाली नराख्नुहोस्।',
        'भाँडो धेरै भरेर दाना पोखिन र खेर जान नदिनुहोस्।',
      ],
      noteBottom:
        'दानाको मात्रा र चरण परिवर्तन गर्दा दाना उत्पादक कम्पनीको सिफारिस र कुखुराको जात अनुसार गर्नुहोस्।',
    },
    sec5: {
      num: '५',
      title: 'पिउने पानीको व्यवस्थापन',
      cards: [
        {
          title: 'दैनिक स्याहार',
          items: [
            'दिनको २४ सै घण्टा सफा र ताजा पिउने पानी उपलब्ध गराउनुहोस्।',
            'पानीका भाँडाहरू दिनहुँ राम्ररी सफा गर्नुहोस्।',
            'पानीको ट्याङ्की सधैं छोपेर सफा राख्नुहोस्।',
            'पानीमा सोत्तर, धुलो वा सुली पर्न नदिनुहोस्।',
          ],
        },
        {
          title: 'गुणस्तर र औषधि/भिटामिन',
          items: [
            'विशेष गरी गर्मी मौसममा पानीको उपलब्धता बारम्बार जाँच्नुहोस्।',
            'पिउने पानीको गुणस्तर समय-समयमा परीक्षण गर्नुहोस्।',
            'भिटामिन वा इलेक्ट्रोलाइट्स आवश्यक पर्दा र प्राविधिकको सल्लाह अनुसार मात्र प्रयोग गर्नुहोस्।',
          ],
        },
      ],
    },
  },
};

export default function Guidelines() {
  const { lang } = useLang();
  const c = CONTENT[lang] || CONTENT.en;

  return (
    <div className="gpage">
      <h1 className="guidelines-page-title">{c.pageTitle}</h1>

      {/* SECTION 1 - PRODUCTION CYCLE BOXES */}
      <div className="sec">
        <div className="sec-h">
          <div className="num">{c.sec1.num}</div>
          <h2>{c.sec1.title}</h2>
        </div>
        <div className="body">
          <div className="steps">
            {c.sec1.steps.map((step, idx) => (
              <div className="step" key={step}>
                <b>{lang === 'ne' ? String(idx + 1).replace(/\d/g, (d) => '०१२३४५६७८९'[d]) : idx + 1}</b>
                <span>{step}</span>
              </div>
            ))}
          </div>

          <table style={{ marginTop: '22px' }}>
            <thead>
              <tr>
                {c.sec1.tableHeaders.map((th) => (
                  <th key={th}>{th}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {c.sec1.stages.map(([stage, age, activity]) => (
                <tr key={stage}>
                  <td>{stage}</td>
                  <td><span className="pill">{age}</span></td>
                  <td>{activity}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="note">{c.sec1.note}</div>
        </div>
      </div>

      {/* SECTION 2 - PREPARATION */}
      <div className="sec">
        <div className="sec-h">
          <div className="num">{c.sec2.num}</div>
          <h2>{c.sec2.title}</h2>
        </div>
        <div className="body">
          <div className="grid2">
            {c.sec2.cards.map((card) => (
              <div className="card" key={card.title}>
                <h3><i>{card.badge}</i>{card.title}</h3>
                <ul>
                  {card.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 3 - BROODING */}
      <div className="sec">
        <div className="sec-h">
          <div className="num">{c.sec3.num}</div>
          <h2>{c.sec3.title}</h2>
        </div>
        <div className="body">
          <div className="stat">
            {c.sec3.stats.map((s) => (
              <div key={s.label}>
                <b>{s.val}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
          <div className="grid2">
            {c.sec3.cards.map((card) => (
              <div className="card" key={card.title}>
                <h3>{card.title}</h3>
                <ul>
                  {card.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 4 - FEEDING SCHEDULE */}
      <div className="sec">
        <div className="sec-h">
          <div className="num">{c.sec4.num}</div>
          <h2>{c.sec4.title}</h2>
        </div>
        <div className="body">
          <div className="note" style={{ margin: '0 0 16px' }}>
            {c.sec4.noteTop}
          </div>
          <table>
            <thead>
              <tr>
                {c.sec4.tableHeaders.map((th) => (
                  <th key={th}>{th}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {c.sec4.rows.map(([type, age, form, protein, purpose]) => (
                <tr key={type}>
                  <td>{type}</td>
                  <td><span className="pill">{age}</span></td>
                  <td>{form}</td>
                  <td>{protein}</td>
                  <td>{purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="sub">{c.sec4.subTitle}</div>
          <div className="grid2">
            <div className="card">
              <h3>{c.sec4.doTitle}</h3>
              <ul>
                {c.sec4.doItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3>{c.sec4.avoidTitle}</h3>
              <ul>
                {c.sec4.avoidItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="note">{c.sec4.noteBottom}</div>
        </div>
      </div>

      {/* SECTION 5 - WATER MANAGEMENT */}
      <div className="sec">
        <div className="sec-h">
          <div className="num">{c.sec5.num}</div>
          <h2>{c.sec5.title}</h2>
        </div>
        <div className="body">
          <div className="grid2">
            {c.sec5.cards.map((card) => (
              <div className="card" key={card.title}>
                <h3>{card.title}</h3>
                <ul>
                  {card.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
