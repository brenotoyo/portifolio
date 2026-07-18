'use client'

import Image from 'next/image'

type Project = {
  id: string
  title: string
  description: string
  image?: string
  repoUrl?: string
  demoUrl?: string
  tags?: string[]
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
      {project.image ? (
        <div className="relative h-44 w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="flex h-44 items-center justify-center bg-zinc-900 text-zinc-500">
          Sem imagem
        </div>
      )}

      <div className="p-6">
        <h3 className="mb-2 text-2xl font-bold text-white">{project.title}</h3>
        <p className="mb-4 text-zinc-400">{project.description}</p>

        {project.tags && (
          <div className="mb-4 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-zinc-300"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="bg-primary-dark hover:bg-primary rounded-md px-3 py-2 text-sm font-medium text-white transition"
            >
              Ver Demo
            </a>
          )}

          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-md border border-zinc-800 px-3 py-2 text-sm font-medium text-zinc-200 transition hover:bg-zinc-900"
            >
              Repositório
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
