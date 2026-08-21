import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ProjectCardComponent } from "../../components/project-card/project-card.component";
import { PROJECTS } from '../../core/data/projects';
import { Project } from '../../core/models/project.model';
import { ProjectDetailsComponent } from "../../components/project-details/project-details.component";
/* import { PROJECTS } from '../../core/data/projects';
import { Project } from '../../core/models/project.model'; */

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent, ProjectDetailsComponent],
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects = PROJECTS;

  selectedProject: Project | null = null;

  showProjectModal = false;

  openProject(project: Project) {
    this.selectedProject = project;
    this.showProjectModal = true;
  }

  closeProject() {
    this.showProjectModal = false;
    this.selectedProject = null;
  }
}
