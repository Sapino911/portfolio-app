import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Project } from '../../core/models/project.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [ ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class  ProjectCardComponent {
@Input() project!: Project;

@Output() viewDetails = new EventEmitter<Project>();

onViewDetails() {
  this.viewDetails.emit(this.project);
}

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
