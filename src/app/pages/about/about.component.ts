import { NgClass } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CounterComponent } from '../../shared/counter/counter.component';
import { fadeAnimation, slideUpAnimation } from '../../shared/animations';
@Component({
    selector: 'app-about',
    standalone: true,
  imports: [NgClass, CounterComponent],
    animations: [fadeAnimation, slideUpAnimation],
    templateUrl: './about.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './about.component.scss'
})
export class AboutComponent {



  protected readonly highlights = [
    { value: 6, title: 'Years Experience', textColor: 'text-pink-500' },
    { value: 10, title: 'Projects Built', textColor: 'text-blue-500' },
    { value: 5, title: 'Technologies', textColor: 'text-green-500' },
    { value: 100, title: 'Project Commitment', textColor: 'text-yellow-500' }
  ];

}
