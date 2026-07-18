// src/components/Sidebar.tsx
'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="relative flex min-h-full w-full flex-col p-4 lg:p-12">
      {/* Overlay para fechar ao clicar fora */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-[2px]"
          onClick={() => setIsOpen(false)}
        />
      )}
      {/* Botão Burger */}
      <div className="z-50 mt-5 flex cursor-pointer" onClick={toggleMenu}>
        <Image
          src="/images/icons/burger.svg"
          alt="Menu"
          width={40}
          height={40}
          className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
        />
      </div>
      {/* Navegação com Animação */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="absolute top-24 z-40 flex flex-col gap-2 lg:top-24 lg:left-12 lg:mt-6"
          >
            <button
              onClick={() => {
                document
                  .getElementById('inicio')
                  ?.scrollIntoView({ behavior: 'smooth' })
                setIsOpen(false)
              }}
              className="hover:text-primary hidden text-left text-2xl font-medium transition-colors lg:block"
            >
              Inicío
            </button>
            <button
              onClick={() => {
                document
                  .getElementById('sobre')
                  ?.scrollIntoView({ behavior: 'smooth' })
                setIsOpen(false)
              }}
              className="hover:text-primary text-left text-2xl font-medium transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => {
                document
                  .getElementById('projetos')
                  ?.scrollIntoView({ behavior: 'smooth' })
                setIsOpen(false)
              }}
              className="hover:text-primary text-left text-2xl font-medium transition-colors"
            >
              Projetos
            </button>
            <button
              onClick={() => {
                document
                  .getElementById('tecnologias')
                  ?.scrollIntoView({ behavior: 'smooth' })
                setIsOpen(false)
              }}
              className="hover:text-primary text-left text-2xl font-medium transition-colors"
            >
              Tecnologias
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
      {/* Conteúdo Principal (Texto) */}
      <div
        className={`transition-opacity duration-300 ${isOpen ? 'pointer-events-none opacity-20' : 'opacity-100'} mt-44`}
      >
        <h1 className="text-4xl font-bold tracking-tight">
          Olá! Me chamo Breno Kazuo e tenho 25 anos.
        </h1>
        <p className="mt-4 text-lg text-zinc-400">
          Sou um estudante de programação e um entusiasta pela area tecnológica,
          atualmente estou em meu último semestre de ADS e cursando Fullstack
          Python pela EBAC. Estou em processo de aprendizado e desenvolvimento
          profissional.
        </p>
        <a
          href="/cvBreno.pdf"
          download="Breno_Kazuo_CV.pdf"
          className="mt-12 flex w-fit gap-2 rounded-full border-2 border-white px-5 py-2 transition-all hover:bg-white hover:text-black"
        >
          Baixar Currículo
          <Image
            src="/images/icons/pdf.svg"
            alt="Github"
            width={22}
            height={22}
          />
        </a>
      </div>

      {/* Rodapé Social */}
      <div className="mt-auto text-base text-zinc-500">
        <p className="mb-4">Ache-me aqui:</p>
        <ul className="flex gap-4">
          <li className="flex gap-4">
            <a
              href="https://github.com/brenotoyo"
              rel="noopener noreferrer"
              target="_blank"
              className="transition-transform hover:scale-110"
            >
              <Image
                src="/images/icons/github-white.svg"
                alt="Github"
                width={26}
                height={26}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/brenotoyonaga"
              rel="noopener noreferrer"
              target="_blank"
              className="transition-transform hover:scale-110"
            >
              <Image
                src="/images/icons/linkedin.svg"
                alt="Linkedin"
                width={26}
                height={26}
              />
            </a>
            <a
              href="mailto:breno_toyo@hotmail.com"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <Image
                src="/images/icons/envelope.svg"
                alt="Email"
                width={26}
                height={26}
              />
            </a>
            <a
              href="https://wa.me/5511983664702?text=Olá%20Breno,%20vi%20seu%20portfólio!"
              rel="noopener noreferrer"
              target="_blank"
              className="transition-transform hover:scale-110"
            >
              <Image
                src="/images/icons/whatsapp.svg"
                alt="Whatsapp"
                width={26}
                height={26}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
