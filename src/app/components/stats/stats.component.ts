import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent {

  protected readonly stats = [
    { value: '12+', title: 'Repositories' },
    { value: '780+', title: 'Comments' },
    { value: '5', title: 'Projects' },
    { value: '15+', title: 'Technologies' }
  ];

  protected readonly languages = [    
    { title: 'C#', value: 100,  textColor: 'text-blue-500' },
    { title: 'Typescript', value: 100,  textColor: 'text-purple-500' },
    { title: 'SQL', value: 100,  textColor: 'text-yellow-500' },
    { title: 'HTML5', value: 100,  textColor: 'text-orange-500' },
    { title: 'CSS3', value: 100,  textColor: 'text-pink-500' },
    { title: 'TailwindCSS', value: 100,  textColor: 'text-green-500' }
  ];

}
