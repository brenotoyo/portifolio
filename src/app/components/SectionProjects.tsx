import { projects } from './project-data'
import ProjectCard from './ProjectCard'

export default function SectionProjects() {
  return (
    <div
      style={{ paddingTop: '2rem', paddingBottom: '2rem' }}
      className="w-full"
    >
      <h3 className="mb-3 text-xs font-bold text-white md:text-sm lg:mb-24 lg:text-xl">
        &lt;Projetos /&gt;
      </h3>
      <header className="mb-6 text-center md:mb-12">
        <h2 className="mb-2 text-2xl font-bold text-white md:text-3xl lg:mb-5 lg:text-start lg:text-4xl">
          Trabalhos e side projects
        </h2>
        <p className="max-w-2xl text-sm text-zinc-400 md:text-base">
          Aqui estão alguns dos projetos em que trabalhei. Clique para ver mais
          detalhes ou o código fonte.
        </p>
      </header>
      <div className="grid grid-cols-2 gap-2 md:gap-28 lg:grid-cols-3 lg:gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  )
}
