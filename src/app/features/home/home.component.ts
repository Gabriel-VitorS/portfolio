import { AfterViewInit, Component, ElementRef, OnInit, signal, viewChild } from '@angular/core';
import { LastProjectsComponent } from "../../components/last-projects/last-projects.component";
import {ALL_PROJECTS_WEB} from '../../shared/projects-web'
import { ModalProjectsComponent } from "../../components/modal-projects/modal-projects.component";
import { Project } from '../../interfaces';
import { RouterLink } from "@angular/router";
import {gsap} from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [LastProjectsComponent, ModalProjectsComponent, RouterLink,]
})

export class HomeComponent implements AfterViewInit {

  hero = viewChild<ElementRef>("hero")
  linkBaseImage = 'images/design-projects'

  readonly allProjects: Project[] = [
        {
        title: "My Cardapio Digital",
        category: "Programação",
        image: "images/web-projects/my-cardapio-digital.png",
        description: "Projeto de um cardápio digital utilizando Angular 21 e Bootstrap 5 em que uma empresa pode fazer o registro e montar seu cardápio, alterando as cores e a ordem de exibição dos produtos. O projeto se conecta com uma API feita em Laravel.",
        challenge: "Criar um projeto do zero utilizando, pela primeira vez, o Angular junto com o Bootstrap 5 e utilizar a metodolia SCRUM",
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
        title: "Camisa Jujutsu",
        category: "Design",
        image: this.linkBaseImage+"/camisa-jujutsu.jpg",
        description: "Estampa de camisa inspirada no design de cores jogo Gris e no anime Jujutsu Kaisen montado em forma de quadrinhos",
        challenge: "Atividade de sala de aula em dupla, onde tinha que conversar com a dupla e ver quais assuntos que ela gostava para fazer uma camisa. A minha dupla gostava do personagem de um anime Jujutsu e do jogo Gris",
        links: {
        },
        year: "2026"
    },
    {
        title: "Banner Consciência Negra",
        category: "Design",
        image: this.linkBaseImage+"/consciencia-negra.jpg",
        description: "Banner do dia da consciência negra",
        challenge: "Atividade sala de aula em trio, onde tinha que fazer um banner utilizando apenas 3 cores",
        links: { 
        },
        year: "2026"
    },
  ]

  selectedProject = signal<Project | null>(null)

  hardSkills = signal([
    "VueJs",
    "Angular",
    "AdonisJs",
    "Laravel"
  ])

  openModal(project: Project){
    this.selectedProject.set(project)
  }


  ngAfterViewInit(): void {
    const heroEl = this.hero()?.nativeElement
    if(heroEl){
      const items = heroEl.querySelectorAll(".animate-item")
      
      gsap.from(items,{
        delay: 0.2,
        y: -40,
        duration: 0.6,
        stagger: 0.2,
        opacity: 0
      })
    }
  }

}
