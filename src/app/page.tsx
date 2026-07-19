import Image from 'next/image'
import { ChevronsDown } from 'lucide-react'
import SectionSobre from './components/SectionSobre'
import SectionProjects from './components/SectionProjects'
import SectionTech from './components/SectionTech'
import Sidebar from './components/Sidebar'

export default function Home() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth">
      {/* SEÇÃO INÍCIO */}
      <section
        id="inicio"
        className="relative hidden h-screen w-full snap-start lg:block"
      >
        <Image
          src="/images/capa.jpg"
          alt="Foto de capa"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10 dark:bg-black/20" />
        {/* SETA INDICADORA */}
        <div className="absolute bottom-10 left-14 flex -translate-x-1/2 flex-col items-center gap-2 text-white/70">
          <span className="text-[10px] font-medium tracking-[0.3em] uppercase">
            Scroll
          </span>
          <div className="animate-bounce">
            <ChevronsDown size={24} className="animate-bounce" />
          </div>
        </div>
      </section>
      {/* SEÇÃO SIDEBAR */}
      <section
        id="home"
        className="bg-background block h-screen w-full snap-start lg:hidden"
      >
        <Sidebar />
      </section>
      {/* SEÇÃO SOBRE */}
      <section
        id="sobre"
        className="relative isolate h-screen w-full snap-start bg-white p-4 lg:p-12"
      >
        <SectionSobre />
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/background-remove.png"
            alt="bg"
            fill
            className="object-center opacity-30"
            priority
          />
        </div>
      </section>

      {/* SEÇÃO PROJETOS */}
      <section
        id="projetos"
        className="h-screen w-full snap-start bg-zinc-800 p-4 lg:p-12"
      >
        <SectionProjects />
      </section>
      {/* SEÇÃO TECNOLOGIAS */}
      <section
        id="tecnologias"
        className="relative isolate h-screen w-full snap-start bg-white p-4 lg:p-12"
      >
        <SectionTech />
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/background-remove.png"
            alt="bg"
            fill
            className="object-center opacity-30"
            priority
          />
        </div>
      </section>
    </div>
  )
}
