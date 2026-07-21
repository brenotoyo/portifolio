'use client'

import Image from 'next/image'

type Project = {
  id: string
  title: string
  description: {
    span: string
    text: string
  }
  image?: string
  repoUrl?: string
  demoUrl?: string
  tags?: string[]
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
      {project.image ? (
        <div className="relative h-24 w-full md:h-36 lg:h-44">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="flex h-32 items-center justify-center bg-zinc-900 text-zinc-500 md:h-36 lg:h-44">
          Sem imagem
        </div>
      )}

      <div className="flex min-h-45 grow flex-col p-1 md:p-4 lg:p-6">
        <h3 className="mb-2 text-base font-bold text-white md:text-xl lg:text-2xl">
          {project.title}
        </h3>
        <div className="mb-3 md:mb-4">
          <p className="text-zinc-400">
            <span className="text-xs md:text-base">
              {project.description.span}
            </span>
            <span className="hidden text-base md:inline">
              {project.description.text}
            </span>
          </p>
        </div>
        {project.tags && (
          <div className="mb-3 flex flex-wrap gap-2 md:mb-4">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-zinc-800 px-3 py-2 text-[10px] text-zinc-300 md:text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        )}
        <div className="mt-auto mb-2 flex gap-1 md:gap-3 lg:justify-center">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="bg-primary-dark hover:bg-primary flex gap-1 rounded-md px-3 py-2 text-xs font-medium text-white transition md:text-sm"
            >
              <span className="hidden md:block">Ver</span>Demo
            </a>
          )}

          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-md border border-zinc-800 px-3 py-2 text-xs font-medium text-zinc-200 transition hover:bg-zinc-900 md:text-sm"
            >
              Repositório
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
