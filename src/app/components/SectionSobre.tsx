export default function SectionSobre() {
  return (
    <div className="relative flex w-full flex-col">
      <h3 className="text-background mb-16 text-xl font-bold">
        {/* Título da Seção */}
        &lt;SobreMim /&gt;
      </h3>
      {/* Primeiro Bloco: Alinhado à Esquerda */}
      <div className="mb-40 w-full self-start lg:w-2/3">
        <h2 className="text-background mb-6 text-5xl font-bold">
          Momento atual
        </h2>
        <p className="indent-8 text-xl leading-relaxed text-zinc-400">
          Sou desenvolvedor de sistemas com maior interesse em especializar-me
          no back-end, mas também tenho bastante experiência em front-end —
          desde HTML5, CSS e JavaScript até soluções mais avançadas com React
          Native + TypeScript ou Next.js + Tailwind. Atualmente estou me
          aperfeiçoando e buscando oportunidades de experiência profissional.
        </p>
      </div>
      {/* Segundo Bloco: Alinhado à Direita */}
      <div className="w-full self-end lg:w-2/3">
        <h2 className="text-background mb-6 text-5xl font-bold">Formação</h2>
        <p className="indent-8 text-xl leading-relaxed text-zinc-400">
          Desde jovem me interessei por tecnologia: comecei cursando informática
          e, em seguida, técnico em TI. No final do curso de eletrônica no Senai
          tive contato com C++ e me apaixonei por programação. Atualmente curso
          Análise e Desenvolvimento de Sistemas na FATEC (último período) e
          também faço o curso Fullstack Python pela EBAC. Como segunda língua,
          me certifiquei em inglês pelo método Kumon em uma de suas unidades.
        </p>
      </div>
    </div>
  )
}
