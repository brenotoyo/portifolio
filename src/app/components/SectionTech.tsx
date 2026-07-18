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
      <h4 className="text-background mb-8 text-2xl font-semibold">{title}</h4>
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
            <Image src={tech.icon} alt={tech.name} width={28} height={28} />
            <span className="text-background truncate text-sm font-medium">
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
    <div ref={ref}>
      {/* Header com título e explicação sobre a seçaõ */}
      <header className="mb-12">
        <h3 className="text-background mb-16 text-xl font-bold">
          &lt;Tecnologias /&gt;
        </h3>
        <h2 className="text-background text-4xl font-bold">Hard Skills</h2>
        <p className="mt-3 max-w-2xl text-zinc-400">
          Linguagens, frameworks e ferramentas que tenho conhecimento e já
          utilizei em alguma aplicação.
        </p>
      </header>
      {/* Containers das categorias que listam as tecnologias */}
      <div className="flex gap-20">
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
      <div className="mt-20">
        <CategoryLine
          title="Ferramentas & Outros"
          items={TOOLS}
          onHover={setHovered}
        />
      </div>
      {/* Explanação do uso das tecnologias */}
      {isInView ? (
        <div className="pointer-events-none fixed bottom-10 w-full max-w-3xl px-6">
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
              <p className="whitespace-pre-line text-white">{hovered.desc}</p>
            ) : (
              <p className="text-zinc-400">
                Passe o mouse sobre uma tecnologia para saber mais.
              </p>
            )}
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
