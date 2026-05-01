'use client'

import { useEffect, useRef } from 'react'
import { Social } from './Social'
import { useData } from '../context/LanguageContext'
import { TxtType } from '../lib/TxtType'

export const Hero = () => {
  const { data } = useData()
  const { personal, ui } = data
  const typewriteRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!typewriteRef.current) return
    const instance = new TxtType(typewriteRef.current, ui.hero.roles, 2000)
    return () => instance.stop()
  }, [ui.hero.roles])

  return (
    <>
      <div className="hero"></div>
      <div id="home" className="container-fluid home">
        <div>
          <h2>{ui.hero.greeting}</h2>
          <h1>
            Hi,<br />
            I&apos;m Fredy,<br />
            <span ref={typewriteRef} className="typewrite"></span>
          </h1>
          <a href={`mailto:${personal.email}`}>{ui.hero.cta}</a>
        </div>
        <Social />
      </div>
      <a href="#about" className="hero__scroll">
        <div className="hero__scroll-oval">
          <i className="fas fa-chevron-down"></i>
        </div>
      </a>
    </>
  )
}
