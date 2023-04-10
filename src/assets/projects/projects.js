const projects = [
  {
    name: 'Car Shop',
    description:
      'Neste projeto apliquei os princípios de Programação Orientada a Objetos (POO) para a construção de uma API com CRUD para gerenciar uma concessionária de veículos. Foi feito utilizando o banco de dados MongoDB através do framework do Mongoose. Além disso, foram utilizadas as ferramentas Docker e Docker Compose para facilitar o processo de desenvolvimento e implantação da aplicação. A metodologia TDD (Test Driven Development) foi aplicada para garantir a qualidade do código e a robustez da aplicação.',
    technologies: [
      'Node.js',
      'Typescript',
      'POO',
      'S.O.L.I.D.',
      'Docker',
      'Mongoose',
      'Express',
      'Arquitetura MSC'
    ],
    image:
      'https://user-images.githubusercontent.com/100851855/229937234-268ccf35-a6f6-430e-87d1-a13566a9af7b.png',
    githubLink: 'https://github.com/FP-Coding/project-trybers-and-dragons'
  },
  {
    name: 'Trybe Futebol Clube',
    description:
      'Neste projeto desenvolvi um back-end dockerizado utilizando modelagem de dados através do Sequelize. Seu desenvolvimento respeitou as regras de negócio providas no projeto e API deve ser capaz de ser consumida por um front-end já provido nesse projeto, que foi desenvolvida pela Trybe em React.',
    technologies: [
      'Node.js',
      'Typescript',
      'POO',
      'S.O.L.I.D.',
      'Docker',
      'JWT',
      'Sequelize',
      'Arquitetura MSC',
      'MySQL',
      'Express'
    ],
    image:
      'https://user-images.githubusercontent.com/100851855/229935378-cc2d192a-c0a3-4243-8748-8a463124711d.png',
    githubLink: 'https://github.com/FP-Coding/project-trybers-and-dragons'
  },
  {
    name: 'Trybers and Dragons',
    description:
      'Neste projeto apliquei os princípios da arquitetura SOLID e os princípios de POO em uma estrutura de jogos de interpretação de papéis, mais conhecidos como jogos RPG (Role Playing Game).',
    technologies: ['Node.js', 'Typescript', 'POO', 'S.O.L.I.D.', 'Docker'],
    image:
      'https://user-images.githubusercontent.com/100851855/229682043-40aa84db-1a37-4b47-90c1-b2e293034ad5.png',
    githubLink: 'https://github.com/FP-Coding/project-trybers-and-dragons'
  },
  {
    name: 'API De Blogs',
    description:
      'Neste projeto desenvolvi uma API e um banco de dados para a produção de conteúdo para um blog! Para acessar rotas da aplicação é necessário login.',
    technologies: [
      'Node.js',
      'Express',
      'Sequelize e MySql',
      'JWT',
      'Joi',
      'Arquitetura de Camadas(Model, Service, Controller)',
      'Docker'
    ],
    image:
      'https://user-images.githubusercontent.com/100851855/229934137-a48adbba-a18b-4625-8282-8cac00613af2.png',
    githubLink: 'https://github.com/FP-Coding/project-blogs-api'
  },
  {
    name: 'Talker Manager',
    description:
      'Neste projeto desenvolvi uma API de cadastro de talkers (palestrantes) em que será possível cadastrar, visualizar, pesquisar, editar e excluir informações.',
    technologies: ['Node.js', 'Docker', 'Express'],
    image:
      'https://user-images.githubusercontent.com/100851855/229933163-31d6ad8c-7eca-4306-b80e-f651e1cc488f.png',
    githubLink: 'https://github.com/FP-Coding/project-talker-manager'
  },
  {
    name: 'Store Manager',
    description:
      'Neste projeto desenvolvi uma API utilizando a arquitetura MSC (model-service-controller). A API construída é um sistema de gerenciamento de vendas no formato dropshipping em que será possível criar, visualizar, deletar e atualizar produtos e vendas.',
    technologies: ['Docker', 'MySQL', 'Mocha, Chai e Sinon', 'Express'],
    image:
      'https://user-images.githubusercontent.com/100851855/229933675-b153eeaf-7e46-4cb9-a738-29e153a9fe08.png',
    githubLink: 'https://github.com/FP-Coding/project-store-manager'
  },
  {
    name: 'TrybeSmith',
    description:
      'Neste projeto desenvolvi uma API e um banco de dados para uma loja de itens medievais utilizando Typescript e Programação Orientada a Objetos(POO).',
    technologies: [
      'Node.js',
      'Typescript',
      'JWT',
      'POO',
      'Arquitetura MSC',
      'Docker',
      'MySQL',
      'Express'
    ],
    image:
      'https://user-images.githubusercontent.com/100851855/229934581-141d9e09-9de5-4b15-8f5c-17d66340a4f6.png',
    githubLink: 'https://github.com/FP-Coding/project-trybesmith'
  },
  {
    name: 'Pixels Art',
    description:
      'Neste projeto, implementei um editor de arte com pixels em que a pessoa usuária poderá escolher uma cor em uma paleta de cores e poderá pintar o que quiser em um quadro branco art artist',
    technologies: ['DOM(Manipulação)', 'CSS', 'HTML', 'Javascript'],
    image:
      'https://user-images.githubusercontent.com/100851855/229919824-9c306c00-93a4-4ce5-aaa9-6c48658927f8.png',
    githubLink: 'https://github.com/FP-Coding/Project-Pixels-Art'
  },
  {
    name: 'Javascript Teste Unitários',
    description:
      'Neste projeto, foi desenvolvido várias funções na resolução dos requisitos propostos e/ou testes unitários para garantir que as implementações das funções estão corretas, de acordo com o que está sendo solicitado pela Trybe.',
    technologies: ['Javascript', 'Jest'],
    image:
      'https://user-images.githubusercontent.com/100851855/229924283-ccd66c30-0411-4839-a037-d2cca20d7427.png',
    githubLink: 'https://github.com/FP-Coding/Project-Unit-Tests'
  },
  {
    name: 'Solar System',
    description:
      'Neste projeto, foi desenvolvido uma página utilizando o biblioteca React para listar todos os planetas do Sistema Solar e também algumas das missões espaciais mais conhecidas. Colocando em prática alguns dos conceitos básicos de React: componentes, props e composição de componentes.',
    technologies: ['React', 'PropTypes'],
    image:
      'https://user-images.githubusercontent.com/100851855/229926596-142ae8b7-71dd-405d-8bbd-1a6be2eba431.png',
    githubLink: 'https://github.com/FP-Coding/Project-Solar-System'
  },
  {
    name: 'TrybeTunes',
    description:
      'Neste projeto, foi desenvolvido uma aplicação capaz de reproduzir músicas das mais variadas bandas e artistas, criar uma lista de músicas favoritas e editar o perfil da pessoa usuária logada.',
    technologies: ['React', 'React-router'],
    image:
      'https://user-images.githubusercontent.com/100851855/229927707-7859c1e8-b547-4db8-8c7c-355ca28513c1.png',
    githubLink: 'https://github.com/FP-Coding/Project-TrybeTunes'
  },
  {
    name: 'Testes em React',
    description:
      'Nesse projeto desenvolvi testes para uma aplicação React que já está criada e configurada pela Trybe, utilizando Jest e a biblioteca React Testing Library',
    technologies: ['React', 'React Testing Library', 'TDD'],
    image:
      'https://user-images.githubusercontent.com/100851855/229929477-288743a6-0a27-45b9-8bd8-67214b56a225.png',
    githubLink: 'https://github.com/FP-Coding/Project-React-Testing-Library'
  },
  {
    name: 'TrybeWallet',
    description:
      'Neste projeto desenvolvi web-app de carteira de controle de gastos com conversor de moedas utilizando Redux para gerenciar os estado global do app e evitar o prop drilling.',
    technologies: ['React', 'React-router', 'Redux'],
    image:
      'https://user-images.githubusercontent.com/100851855/229937440-01911496-d59b-48ba-8908-576e490dd685.png',
    githubLink: 'https://github.com/FP-Coding/Project-TrybeWallet'
  },
  {
    name: 'StarWars Planets Search ContextApi e Hooks',
    description:
      'Neste projeto desenvolvi uma lista com filtros de planetas do universo de Star Wars usando Context API e Hooks para controlar os estados globais.',
    technologies: ['React', 'ContextApi', 'React-testing-Library'],
    image:
      'https://user-images.githubusercontent.com/100851855/229931000-6053937a-2e1f-449e-bc13-71a5cfbfcc26.png',
    githubLink: 'https://github.com/FP-Coding/Project-StarWars-Planet-Search'
  }
];

export default projects;
