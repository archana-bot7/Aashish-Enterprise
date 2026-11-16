import { useLang } from '../LangContext.jsx';
import { TEXT } from '../data/shopData.js';
import Chatbot from '../components/Chatbot.jsx';

export default function Chat() {
  const { lang, t } = useLang();

  return (
    <div className="page-wrap section chat-page">
      <h1 className="display small chat-title">{TEXT[lang].title}</h1>
      <p className="lead narrow">{t.chat.sub}</p>
      <Chatbot />
    </div>
  );
}
