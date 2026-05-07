import { AfterViewInit, Component, ElementRef, input, OnInit, output, viewChild } from '@angular/core';
import { Project } from '../../interfaces';
import { LucideX } from '@lucide/angular';
import gsap from 'gsap';

@Component({
  selector: 'app-modal-projects',
  templateUrl: './modal-projects.component.html',
  styleUrls: ['./modal-projects.component.css'],
  imports: [LucideX,]
})
export class ModalProjectsComponent implements AfterViewInit {

  hero = viewChild<ElementRef>("hero")

  inputProject = input<Project | null>()

  closeModal = output()

  btnClicked(){
    this.closeModal.emit()
  }
  

  ngAfterViewInit(): void {
    const heroEl = this.hero()?.nativeElement
    
    if(heroEl){
      const items = heroEl.querySelectorAll(".animate-item")
      
      gsap.from(heroEl,{
        y: 100,
        opacity: 0.7,
        duration: 0.5
      })
    }

  
  }

}
