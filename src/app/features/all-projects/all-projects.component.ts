import { AfterViewInit, Component, computed, ElementRef, inject, OnInit, signal, TemplateRef, viewChild } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ALL_PROJECTS_DESIGN } from '../../shared/projects-design';
import { ALL_PROJECTS_WEB } from '../../shared/projects-web';
import { LucideArrowLeft } from "@lucide/angular";
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ModalProjectsComponent } from "../../components/modal-projects/modal-projects.component";
import { Project } from '../../interfaces';
import {gsap} from 'gsap';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css'],
  imports: [RouterLink, LucideArrowLeft, ReactiveFormsModule, ModalProjectsComponent]
})
export class AllProjectsComponent implements OnInit, AfterViewInit {

  hero = viewChild<ElementRef>("hero")
  private fb = inject(FormBuilder)

  filterForm = this.fb.group({
    filter: ['Todos']
  })
  openModal(project: Project){
    this.selectedProject.set(project)
  }
  selectedProject = signal<Project | null>(null)

  projects = signal([...ALL_PROJECTS_WEB, ...ALL_PROJECTS_DESIGN])
  constructor() { }

  ngOnInit() {
    this.filterForm.get("filter")?.valueChanges.subscribe( selectdValue =>{
      console.log(selectdValue)
      if(selectdValue == "Design")
        this.projects.set([...ALL_PROJECTS_DESIGN]) 
      else if(selectdValue == "Programação")
        this.projects.set([...ALL_PROJECTS_WEB,]) 
      else
        this.projects.set([...ALL_PROJECTS_WEB, ...ALL_PROJECTS_DESIGN])
    })
  }

  ngAfterViewInit(): void {
    const heroEl = this.hero()?.nativeElement

    if(heroEl){
      const items = heroEl.querySelectorAll('.animate-item')
      
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
