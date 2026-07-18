import { projects } from './project-data'
import ProjectCard from './ProjectCard'

export default function SectionProjects() {
  return (
    <div>
      <h3 className="mb-16 text-xl font-bold text-white">
        {/* Título da Seção */}
        &lt;Projetos /&gt;
      </h3>
      {/* Header com as informações */}
      <header className="mb-12">
        <h3 className="mb-4 text-sm font-medium tracking-widest text-zinc-500">
          Projetos
        </h3>
        <h2 className="text-4xl font-bold text-white">
          Trabalhos e side projects
        </h2>
        <p className="mt-3 max-w-2xl text-zinc-400">
          Aqui estão alguns dos projetos em que trabalhei. Clique para ver mais
          detalhes ou o código fonte.
        </p>
      </header>
      {/* Card dos projetos */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  )
}
