import { createContext, useContext, useState, ReactNode } from 'react'
import en from '../data/en.json'
import es from '../data/es.json'

type Lang = 'en' | 'es'
type Data = typeof en

interface LanguageContextType {
  lang: Lang
  data: Data
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    return (localStorage.getItem('lang') as Lang) ?? 'en'
  })

  const data = lang === 'en' ? en : es

  const toggleLang = () => {
    const next: Lang = lang === 'en' ? 'es' : 'en'
    setLang(next)
    localStorage.setItem('lang', next)
  }

  return (
    <LanguageContext.Provider value={{ lang, data, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useData = () => {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useData must be used inside LanguageProvider')
  return ctx
}
