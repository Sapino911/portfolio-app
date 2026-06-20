import { Component } from '@angular/core';
import { ProjectCardComponent } from "../../components/project-card/project-card.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  protected readonly projects = [
    { image: '', title: 'Off The Chain Multiverse Platform', description: 'Music studio managment platform', badge: ['Angularjs','.NET Core', 'SQL Server','JWT','Stripe'], button: ['Live Demo', 'GitHub'] },
    { image: '', title: 'Off The Chain Multiverse Platform', description: 'Music studio managment platform', badge: ['Angularjs','.NET Core', 'SQL Server','JWT','Stripe'], button: ['Live Demo', 'GitHub'] },
    { image: '', title: 'Off The Chain Multiverse Platform', description: 'Music studio managment platform', badge: ['Angularjs','.Tailwind Css', 'TS'], button: ['Live Demo', 'GitHub'] }
  ]
}
