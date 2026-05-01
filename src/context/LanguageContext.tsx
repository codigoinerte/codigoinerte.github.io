'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import en from '../data/en.json'
import es from '../data/es.json'

type Lang = 'en' | 'es'
type Data = typeof en

interface LanguageContextType {
  lang: Lang
  data: Data
  toggleLang: () => void
  mounted: boolean
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Inicializar con 'en', nunca leer localStorage aquí (SSG corre en Node.js sin localStorage)
  const [lang, setLang] = useState<Lang>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Lang | null
    if (saved === 'en' || saved === 'es') {
      setLang(saved)
    }
    setMounted(true)
  }, [])

  const data = lang === 'en' ? en : es

  const toggleLang = () => {
    const next: Lang = lang === 'en' ? 'es' : 'en'
    setLang(next)
    localStorage.setItem('lang', next)
  }

  return (
    <LanguageContext.Provider value={{ lang, data, toggleLang, mounted }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useData = () => {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useData must be used inside LanguageProvider')
  return ctx
}
