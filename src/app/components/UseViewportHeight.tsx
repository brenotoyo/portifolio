'use client'
import { useEffect } from 'react'

export default function UseViewportHeight() {
  useEffect(() => {
    function setVh() {
      // Pega a altura real do que o usuário está vendo
      const vh = window.visualViewport?.height ?? window.innerHeight
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    setVh()
    window.addEventListener('resize', setVh)
    window.visualViewport?.addEventListener('resize', setVh)

    return () => {
      window.removeEventListener('resize', setVh)
      window.visualViewport?.removeEventListener('resize', setVh)
    }
  }, [])

  return null
}
