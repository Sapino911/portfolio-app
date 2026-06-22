import { Component, Input, signal } from '@angular/core';
import { Project } from '../../core/models/project';
import { ProjectDetailsComponent } from "../project-details/project-details.component";

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [ProjectDetailsComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
    @Input()
  project!: Project;
  
  showProjectModal =
    signal(false);

  selectedProject =
    signal<Project | null>(null);

  openProject(project: Project): void {

    this.selectedProject.set(project);

    this.showProjectModal.set(true);
  }

  closeProjectModal(): void {

    this.showProjectModal.set(false);

    this.selectedProject.set(null);
  }
}
