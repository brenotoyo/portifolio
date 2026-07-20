// src/app/components/SectionTecnologias.tsx
'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { LANGUAGES, FRAMEWORKS, TOOLS, type Tech } from './tech-data'

/* Categoria que lista as tecnologias */
function CategoryLine({
  title,
  items,
  onHover,
}: {
  title: string
  items: Tech[]
  onHover: (t: Tech | null) => void
}) {
  return (
    <div className="mb-12 w-full text-center">
      {/* Título da categoria */}
      <h4 className="text-background mb-8 text-xl font-semibold lg:text-2xl">
        {title}
      </h4>
      {/* Lista de categorias */}
      <div className="flex items-center">
        {/* Para cada item cria uma div com imagem e texto */}
        {items.map((tech) => (
          <div
            key={tech.id}
            className="flex w-full cursor-pointer flex-col items-center gap-3 transition-transform hover:scale-105"
            title={tech.name}
            tabIndex={0}
            onMouseEnter={() => onHover(tech)}
            onMouseLeave={() => onHover(null)}
            onFocus={() => onHover(tech)}
            onBlur={() => onHover(null)}
          >
            <div className="relative h-5 w-5 lg:h-7 lg:w-7">
              <Image
                src={tech.icon}
                alt={tech.name}
                fill
                className="object-contain"
              />
            </div>
            <span className="text-background truncate text-xs font-medium lg:text-sm">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
/* Return principal para a section */
export default function SectionTecnologias() {
  const [hovered, setHovered] = useState<Tech | null>(null)
  // Crie o ref e o estado de visibilidade
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, {
    margin: '-100px 0px 0px  0px',
    once: false,
  })

  return (
    <div className="relative w-full" ref={ref}>
      {/* Título da Seção */}
      <h3 className="text-background mb-3 text-xs font-bold lg:mb-24 lg:text-xl">
        {/* Header com título e explicação sobre a seçaõ */}
        &lt;Tecnologias /&gt;
      </h3>
      <header className="mb-6 text-center lg:mb-12">
        <h2 className="text-background mb-2 text-2xl font-bold lg:mb-5 lg:text-start lg:text-4xl">
          Hard Skills
        </h2>
        <p className="max-w-2xl text-sm text-zinc-400 lg:text-start lg:text-base">
          Linguagens, frameworks e ferramentas que tenho conhecimento e já
          utilizei em alguma aplicação.
        </p>
      </header>
      {/* Containers das categorias que listam as tecnologias */}
      <div className="flex flex-col gap-1 lg:flex-row lg:gap-20">
        <CategoryLine
          title="Linguagens"
          items={LANGUAGES}
          onHover={setHovered}
        />
        <CategoryLine
          title="Frameworks"
          items={FRAMEWORKS}
          onHover={setHovered}
        />
      </div>
      <div className="mt-1 lg:mt-20">
        <CategoryLine
          title="Ferramentas & Outros"
          items={TOOLS}
          onHover={setHovered}
        />
      </div>
      {/* Explanação do uso das tecnologias */}
      {isInView && (
        <div className="pointer-events-none absolute -bottom-20 left-1/2 w-full -translate-x-1/2 px-6 lg:-bottom-52 lg:max-w-3xl">
          <div
            role="status"
            aria-live="polite"
            className={`bg-background mx-auto rounded-xl border px-6 py-4 text-center transition-all duration-300 ${
              hovered
                ? 'pointer-events-auto translate-y-0 opacity-100'
                : 'pointer-events-none translate-y-6 opacity-60'
            }`}
          >
            {hovered ? (
              <p className="text-sm whitespace-pre-line text-white lg:text-base">
                {hovered.desc}
              </p>
            ) : (
              <p className="flex justify-center gap-1 text-xs text-zinc-400 lg:text-base">
                <span className="hidden lg:block">Passe o mouse sobre</span>
                <span className="lg:hidden">Aperte</span> uma tecnologia para
                saber mais.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
