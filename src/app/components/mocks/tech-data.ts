// src/app/components/tech-data.ts
export type Tech = { id: string; name: string; icon: string; desc: string }

export const LANGUAGES: Tech[] = [
  {
    id: 'lang-python',
    name: 'Python',
    icon: '/images/icons/python.svg',
    desc: 'Atualmente estudando esta linguagem em meu curso pela EBAC, estou em um nível básico, mas pretendo me especializar nela.',
  },
  {
    id: 'lang-js',
    name: 'JavaScript',
    icon: '/images/icons/javascript.svg',
    desc:
      'Utilizei principalmente em meus estudos, tanto no curso de ADS, quanto no fullstack Python. O utilizei em alguns exercícios, ' +
      'como por exemplo pegando campos de formulários com get por id, algumas funções que disparam alert ou editam values de inputs, funções ' +
      'que utilizam do query selector para editar tabelas.',
  },
  {
    id: 'lang-cpp',
    name: 'C++',
    icon: '/images/icons/c.svg',
    desc:
      'Foi onde comecei a aprender sobre programação, tive pouco contato no Senai e pouco a mais pelo curso de ADS. Aprendi conceitos ' +
      'básicos da programação, declarando variáveis e entendendo os diferentes tipos de variáveis existentes, utilizando de funções como ' +
      'if e else, for, switch e tendo retornos de algo esperado.',
  },
  {
    id: 'lang-html',
    name: 'Html 5',
    icon: '/images/icons/html.svg',
    desc:
      'Tive contato nos diversos cursos que passei, foi como aprendi os conceitos básicos do front-end, juntamente com o css. Utilizei ' +
      'em pequenos exercícios para aprender e estilizar algumas páginas, com certeza sem estes conhecimentos não conseguiria chegar ao ' +
      'ponto de utilizar frameworks como Nexts.js ou Tailwind.',
  },
  {
    id: 'lang-ts',
    name: 'TypeScript',
    icon: '/images/icons/type.svg',
    desc:
      'Aprendi a utilizar está linguagem ao decorrer de meu curso pela EBAC, utilizei principalmente para estilizar projetos feito com ' +
      'react, utilizei da biblioteca styled de styled-components, como por exemplo em alguns de meus projetos (efood ou lista ' +
      'de contatos). Também fiz alguns exercícios que em certos aspectos se assemelha bastante com javascript, utilizando elementos ' +
      'como get element, ou declarando variáveis como number ou strings e as utilizando com algumas funções.',
  },
  {
    id: 'lang-sql',
    name: 'SQL',
    icon: '/images/icons/sql.svg',
    desc:
      'Estou em um nível básico ainda, tive pouo contato em meu curso superior, mas atualmente estou a estudando pela EBAC e pretendo me ' +
      'aperfeiçoar nela',
  },
]

export const FRAMEWORKS: Tech[] = [
  {
    id: 'fw-next',
    name: 'Next.js',
    icon: '/images/icons/next.svg',
    desc:
      'Busquei entender e aprender mais sobre esta tecnologia por conta própria, poís não estava no currículo de nenhum de meus cursos, ' +
      'como ela tem muitos aspectos em comum com react, não foi díficil me adaptar. A utilizei junto com Tailwind para criar meu projeto da ânima Virtus.',
  },
  {
    id: 'fw-tailwind',
    name: 'Tailwind',
    icon: '/images/icons/tailwind.svg',
    desc:
      'Assim como o Next.js, me interessei e busquei entender sobre por conta, por ser bem intuitiva para quem ja tem algum conhecimento ' +
      'de css, não foi díficil me adaptar, achei muito boa para deixar a estilização mais curta e dinâmica.',
  },
  {
    id: 'fw-bootstrap',
    name: 'Bootstrap',
    icon: '/images/icons/bootstrap.svg',
    desc:
      'Utilizei em alguns exercícios como forma de aprendizado, tive contato com alguns de seus components, fazendo carrousel, cards ou ' +
      'accordions, exercícios com collapse ou modals.',
  },
  {
    id: 'fw-jquey',
    name: 'Jquery',
    icon: '/images/icons/jquery.svg',
    desc:
      'Pratiquei fazendo alguns exercícios, como em listas ou formulários, adicionando funções a botões com ".click", incrementando itens ' +
      'com ".appendTo" ou alterando valores com ".val" por exemplo.',
  },
]

export const TOOLS: Tech[] = [
  {
    id: 'tool-git',
    name: 'Github',
    icon: '/images/icons/github.svg',
    desc:
      'O pouco que sei aprendi por conta, fazendo alguns commits e guardando vesões de meus projetos, mas atualmente estou começando ' +
      'a estudar mais sobre git e github em meu curso pela EBAC.',
  },
  {
    id: 'fw-react',
    name: 'React',
    icon: '/images/icons/react.svg',
    desc:
      'Fiz algumas aplicações em projetos, como por exemplo no efood ou na lista de contatos. Utilizei algumas de suas bibliotecas e ' +
      'funções, como o useState ou useEffect. Gosto da forma dinâmica em que se é montado os arquivos html, me dando uma sensação de maior ' +
      'organizaçlão, tanto nas pastas de diferentes components, páginas e ou estilizações.',
  },
  {
    id: 'tool-grunt',
    name: 'Grunt',
    icon: '/images/icons/grunt.svg',
    desc: 'O utilizei em alguns exercícios, para automatizar algumas tarefas, como compilar ou minificar certos arquivos.',
  },
  {
    id: 'tool-sass',
    name: 'Sass',
    icon: '/images/icons/sass.svg',
    desc: 'Pratiquei com exercícios, declarando variáveis de cores ou breakpoints e as utilizando em funções e operadores.',
  },
  {
    id: 'tool-gulp',
    name: 'Gulp',
    icon: '/images/icons/gulp.svg',
    desc: 'Pratiquei fazendo exercícios como compilar arquivos sass, minificar arquivos, automatizando tarefas em série ou em paralelo.',
  },
  {
    id: 'tool-less',
    name: 'Less',
    icon: '/images/icons/less.svg',
    desc: 'Tive contato ao longo de meu curso, onde pratiquei declarando variáveis ou brakpoints e tornando a estilização mais dinâmica.',
  },
]
