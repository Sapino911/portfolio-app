import { Component } from '@angular/core';
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

 /*  protected readonly allProjects = [
    { image: '', title: 'Off The Chain Multiverse Platform', description: 'Music studio managment platform', badge: ['Angularjs','.NET Core', 'SQL Server','JWT','Stripe'], button: ['Live Demo', 'GitHub'] },
    { image: '', title: 'Off The Chain Multiverse Platform', description: 'Music studio managment platform', badge: ['Angularjs','.NET Core', 'SQL Server','JWT','Stripe'], button: ['Live Demo', 'GitHub'] },
    { image: '', title: 'Off The Chain Multiverse Platform', description: 'Music studio managment platform', badge: ['Angularjs','.Tailwind Css', 'TS'], button: ['Live Demo', 'GitHub'] }
  ] */

/*     projects = PROJECTS;

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
