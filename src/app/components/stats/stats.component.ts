import { Component } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [NgClass, NgStyle],
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
    { title: 'C#', value: '100',  topColor: 'bg-purple-500', bgColor: 'bg-purple-500/10'},
    { title: 'Typescript', value: '100',  topColor: 'bg-blue-500', bgColor: 'bg-blue-500/10' },
    { title: 'SQL', value: '100',  topColor: 'bg-yellow-500', bgColor: 'bg-yellow-500/10' },
    { title: 'HTML5', value: '100',  topColor: 'bg-orange-500', bgColor: 'bg-orange-500/10' },
    { title: 'CSS3', value: '100',  topColor: 'bg-pink-500', bgColor: 'bg-pink-500/10' },
    { title: 'Other', value: '72',  topColor: 'bg-white', bgColor: 'bg-white/10' }
  ];

}
