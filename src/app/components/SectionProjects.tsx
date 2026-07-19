import { projects } from './project-data'
import ProjectCard from './ProjectCard'

export default function SectionProjects() {
  return (
    <div>
      <h3 className="mb-10 text-sm font-bold text-white lg:mb-24 lg:text-xl">
        {/* Título da Seção */}
        &lt;Projetos /&gt;
      </h3>
      {/* Header com as informações */}
      <header className="mb-6 text-center lg:mb-12">
        <h2 className="mb-2 text-3xl font-bold text-white lg:mb-5 lg:text-start lg:text-4xl">
          Trabalhos e side projects
        </h2>
        <p className="max-w-2xl text-base text-zinc-400 lg:text-base">
          Aqui estão alguns dos projetos em que trabalhei. Clique para ver mais
          detalhes ou o código fonte.
        </p>
      </header>
      {/* Card dos projetos */}
      <div className="2 grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  )
}
