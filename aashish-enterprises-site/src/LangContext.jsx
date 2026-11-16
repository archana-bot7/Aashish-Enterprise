import { createContext, useContext, useEffect, useState } from 'react';
import { UI } from './i18n.js';

const LangContext = createContext(null);

function readSavedLang() {
  try {
    const saved = localStorage.getItem('aashish-lang');
    return saved === 'ne' ? 'ne' : 'en';
  } catch {
    return 'en';
  }
}

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(readSavedLang);

  const setLang = (next) => {
    setLangState(next);
    try {
      localStorage.setItem('aashish-lang', next);
    } catch {
      /* ignore */
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang === 'ne' ? 'ne' : 'en';
  }, [lang]);

  return <LangContext.Provider value={{ lang, setLang, t: UI[lang] }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
