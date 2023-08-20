interface Project {
  name: string;
  description: string;
  technologies: Array<string>;
  image: Object;
  projectLinks: Links;
}

interface Links {
  url: string;
  github: string;
}

export let projects: Array<Project> = [
  {
    name: 'Join',
    description: `Task manager inspired by the Kanban System. 
      Create and organize tasks using drag and drop functions, assign users and categories. Keep track of your tasks by prioritizing and assigning a due date.`,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: {
      path: 'assets/img/join.png',
      textAlternative: 'Join',
    },
    projectLinks: {
      url: 'https://lars-peters.developerakademie.net/Join/index.html',
      github: 'https://github.com/LarsPeters97/Join/tree/main/Join',
    },
  },
  {
    name: 'El Pollo Loco',
    description: `A funny Jump-and-Run game based on an object-oriented approach. 
      Help the mexican Pepe to fight against chickens and collect as many salsa bottles as possible to throw the bottles at the big boss chicken.`,
    technologies: ['HTML', 'CSS', 'JavaScript', 'OOP'],
    image: {
      path: 'assets/img/el-pollo-loco.png',
      textAlternative: 'El Pollo Loco',
    },
    projectLinks: {
      url: 'https://lars-peters.developerakademie.net/EL_POLLO_LOCO/index.html',
      github: 'https://github.com/LarsPeters97/EL_POLLO_LOCO',
    },
  },
  {
    name: 'Pokédex',
    description: `A javascript based pokédex using REST API.`,
    technologies: ['HTML', 'CSS', 'JavaScript', 'API', 'Bootstrap'],
    image: {
      path: 'assets/img/pokédex.png',
      textAlternative: 'Pokédex',
    },
    projectLinks: {
      url: 'https://lars-peters.developerakademie.net/Pokédex/index.html',
      github: 'https://github.com/LarsPeters97/Pokedex',
    },
  },
];
