import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.scss'
})
export class SkillCardComponent {

  
  protected readonly skills = [
    { icon: '', title: 'Frontend', text: ['Angularjs','Typescript', 'HTML5', 'CSS3/TailwindCss', 'RxJS'] },
    { icon: '', title: 'Backend', text: ['ASPNET Core 8','Typescript', 'HTML5', 'CSS3/TailwindCss', 'RxJS'] },
    { icon: '', title: 'Database', text: ['SQL Server','Typescript', 'HTML5', 'CSS3/TailwindCss', 'RxJS'] },
    { icon: '', title: 'Tools & DevOps', text: ['Git & Github','Typescript', 'HTML5', 'CSS3/TailwindCss', 'RxJS'] },
    { icon: '', title: 'Business & Analytics', text: ['Nusiness Analytics','Typescript', 'HTML5', 'CSS3/TailwindCss', 'RxJS'] }
  ]

}
