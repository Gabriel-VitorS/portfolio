import type { Project } from "@/interfaces"

const linkBaseImage = 'images/code-projects'
const linkThumb = linkBaseImage + "/thumbs"

export const ALL_PROJECTS_WEB : Project[] = [
    {
        title: "Web App de Notas",
        category: "Programação",
        imageThumb: linkBaseImage + "/notes.png",
        description: "Web App de Notas minimalista feito com Vue 3 integrado com o Firebase",
        challenge: "Criar uma aplicação integrada usando o Firebase (Autentication e Fire Store). Também utilizar o tailwind css",
        links: { 
            demo: 'https://gabriel-vitors.github.io/notes/',
            project: 'https://github.com/Gabriel-VitorS/notes'
        },
        imagesProject: [
            linkBaseImage + "/notes.png",
            linkBaseImage + "/notes2.png",
        ],
        tags: [
            'Vue 3', 'Tailwind', 'Typescript', 'Firebase'
        ],
        year: "2026"
    },
    {
        title: "My Cardápio Digital",
        category: "Programação",
        imageThumb: linkBaseImage + "/my-cardapio-digital.png",
        description: "Projeto de um cardápio digital utilizando Angular 21 e Bootstrap 5 em que uma empresa pode fazer o registro e montar seu cardápio, alterando as cores e a ordem de exibição dos produtos. O projeto se conecta com uma API feita em Laravel.",
        challenge: "Criar um projeto do zero utilizando, pela primeira vez, o Angular junto com o Bootstrap 5 utilizando a estrutura Scrum",
        links: { 
            demo: 'https://gabriel-vitors.github.io/mycardapiodigital_front_angular/#/gestor/login',
            project: 'https://github.com/Gabriel-VitorS/mycardapiodigital_front_angular'
        },
        imagesProject: [
            linkBaseImage + "/my-cardapio-digital.png",
            linkBaseImage +  "/my-cardapio-digital4.png",
            linkBaseImage +  "/my-cardapio-digital2.png",
            linkBaseImage +  "/my-cardapio-digital3.png"
        ],
        tags: [
            'Angular', 'Bootstrap', 'Typescript', 'Consumo API'
        ],
        year: "2026"
    },
    {
        title: "Pokedex",
        category: "Programação",
        imageThumb: linkBaseImage + "/pokedex.png",
        description: "Pokedex onde é possível pesquisar e vizualizar os status dos pokemons. Desafio do curso da DIO em JS vanilla, junto com Bootstrap 5, para consumo de uma API",
        challenge: "Desafio do curso da DIO em JS vanilla, junto com Bootstrap 5, para consumo de uma API ",
        links: { 
            demo: 'https://gabriel-vitors.github.io/pokedex-dio/',
            project: 'https://github.com/Gabriel-VitorS/pokedex-dio'
        },
        imagesProject: [
            linkBaseImage + "/pokedex.png",
            linkBaseImage + "/pokedex2.png",
        ],
        tags: [
            'Javascript', 'Bootstrap', 'Consumo API'
        ],
        year: "2026"
    },
    {
        title: "Jogo Mata Mosquito",
        category: "Programação",
        imageThumb: linkBaseImage +  "/mata-mosquito.png",
        description: "Projeto de um curso de JS, HTML e CSS. O jogo oferece 3 níveis e dificuldade",
        challenge: "Desafio do curso para testar as habilidades aprendedidas",
        links: { 
            demo: 'https://gabriel-vitors.github.io/Mata-Mosquito/',
            project: 'https://github.com/Gabriel-VitorS/Mata-Mosquito'
        },
        imagesProject: [
            linkBaseImage + "/mata-mosquito.png",
        ],
        tags: [
            'Javascript', 'CSS', 'Game'
        ],
        year: "2026"
    },
    {
        title: "Calculadora",
        category: "Programação",
        imageThumb: linkBaseImage + "/calculadora.png",
        description: "Calculadora básica feita com JS vanilla",
        links: { 
            demo: 'https://gabriel-vitors.github.io/calculadora/',
            project: 'https://github.com/Gabriel-VitorS/calculadora'
        },
        imagesProject: [
            linkBaseImage + "/calculadora.png",
        ],
        tags: [
            'Javascript', 'CSS'
        ],
        year: "2026"
    },
    // {
    //     title: "Login e Cadastro",
    //     category: "Programação",
    //     imageThumb: linkBaseImage + "/login-cadastro.png",
    //     description: "Tela de login e cadasatro",
    //     challenge: "Criar uma tela de login e cadastro que tenha validação dos campos e que fosse responsiva",
    //     links: { 
    //         demo: 'https://gabriel-vitors.github.io/tela-login-cadastro/',
    //         project: 'https://github.com/Gabriel-VitorS/tela-login-cadastro'
    //     },
    //     imagesProject: [],
    //     year: "2026"
    // },
    // {
    //     title: "Web App de Notas",
    //     category: "Programação",
    //     imageThumb: linkBaseImage + "/notes.png",
    //     description: "Web App de Notas minimalista integrado com o Firebase",
    //     challenge: "Criar uma aplicação integrada usando o Firebase (Autentication e Fire Store). Também utilizar o tailwind css",
    //     links: { 
    //         demo: 'https://gabriel-vitors.github.io/notes/',
    //         project: 'https://github.com/Gabriel-VitorS/notes'
    //     },
    //     imagesProject: [],
    //     year: "2026"
    // }
]