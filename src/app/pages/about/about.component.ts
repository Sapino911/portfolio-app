import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgClass],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

 

  protected readonly highlights = [
    { value: '6+', title: 'Years Experience', textColor: 'text-pink-500' },
    { value: '10+', title: 'Projects Built', textColor: 'text-blue-500' },
    { value: '5+', title: 'Technologies', textColor: 'text-green-500' },
    { value: '100%', title: 'Problem Solver', textColor: 'text-yellow-500' }
  ];

}
