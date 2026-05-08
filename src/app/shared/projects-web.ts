import { Project } from "../interfaces";

export const ALL_PROJECTS_WEB : Project[] = [
    {
        title: "My Cardápio Digital",
        category: "Programação",
        image: "images/web-projects/my-cardapio-digital.png",
        description: "Projeto de um cardápio digital utilizando Angular 21 e Bootstrap 5 em que uma empresa pode fazer o registro e montar seu cardápio, alterando as cores e a ordem de exibição dos produtos. O projeto se conecta com uma API feita em Laravel.",
        challenge: "Criar um projeto do zero utilizando, pela primeira vez, o Angular junto com o Bootstrap 5 utilizando a estrutura Scrum",
        links: { 
            demo: 'https://gabriel-vitors.github.io/mycardapiodigital_front_angular/#/gestor/login',
            project: 'https://github.com/Gabriel-VitorS/mycardapiodigital_front_angular'
        },
        year: "2026"
    },
    {
        title: "Pokedex",
        category: "Programação",
        image: "images/web-projects/pokedex.png",
        description: "Projeto de uma Pokedex onde é possível pesquisar e vizualizar os status dos pokemons. ",
        challenge: "Desafio do curso da DIO em JS vanilla, junto com Bootstrap 5, para consumo de uma API ",
        links: { 
            demo: 'https://gabriel-vitors.github.io/pokedex-dio/',
            project: 'https://github.com/Gabriel-VitorS/pokedex-dio'
        },
        year: "2026"
    },
    {
        title: "Jogo Mata Mosquito",
        category: "Programação",
        image: "images/web-projects/mata-mosquito.png",
        description: "Projeto de um curso de JS, HTML e CSS. O jogo oferece 3 níveis e dificuldade",
        challenge: "Desafio do curso para testar as habilidades aprendedidas",
        links: { 
            demo: 'https://gabriel-vitors.github.io/Mata-Mosquito/',
            project: 'https://github.com/Gabriel-VitorS/Mata-Mosquito'
        },
        year: "2026"
    },
    {
        title: "Calculadora",
        category: "Programação",
        image: "images/web-projects/calculadora.png",
        description: "Calculadora básica feita com JS vanilla",
        links: { 
            demo: 'https://gabriel-vitors.github.io/calculadora/',
            project: 'https://github.com/Gabriel-VitorS/calculadora'
        },
        year: "2026"
    },
    {
        title: "Login e Cadastro",
        category: "Programação",
        image: "images/web-projects/login-cadastro.png",
        description: "Tela de login e cadasatro",
        challenge: "Criar uma tela de login e cadastro que tenha validação dos campos e que fosse responsiva",
        links: { 
            demo: 'https://gabriel-vitors.github.io/tela-login-cadastro/',
            project: 'https://github.com/Gabriel-VitorS/tela-login-cadastro'
        },
        year: "2026"
    }
]