import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Project } from '../../core/models/project.model';
import { scaleAnimation } from '../../shared/animations';
/* import { LucideAngularModule, CircleCheckIcon } from 'lucide-angular'; */

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  animations: [scaleAnimation],
  templateUrl: './project-card.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {

  /*  animations: [
    scaleAnimation
  ] */
  @Input() project!: Project;

  @Output() viewDetails = new EventEmitter<Project>();

  onViewDetails() {
    this.viewDetails.emit(this.project);
  }

  /* readonly CircleCheckIcon = CircleCheckIcon; */

  /*  showProjectModal = false;
   selectedProduct: any = null;
   openProjectModal(){

    this.showProjectModal = true;
  }

  closeProjectModal() {

    this.showProjectModal = false;
  } */
  /* @Input() project!: Project;
   @Input() isOpen = false; */
  /*  projects = PROJECTS;
   
     selectedProject: Project | null = null;
   
     showProjectModal = false;
   
     openProject(project: Project): void {
   
     this.selectedProject = project;
   
     this.showProjectModal = true;
   
   }
   
     closeProject(): void {
   
       this.showProjectModal = false;
   
       this.selectedProject = null;
   
     } */


}
