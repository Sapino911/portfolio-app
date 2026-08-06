import { Component } from '@angular/core';
import { fadeAnimation, slideUpAnimation } from '../../shared/animations';
import { CounterComponent } from '../../shared/counter/counter.component';


@Component({
    selector: 'app-hero',
    standalone: true,
  imports: [CounterComponent],
    animations: [slideUpAnimation, fadeAnimation],
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.scss'
})
export class HeroComponent {
  
  protected readonly badges = [
    { icon: '', title: 'Angular'},
    { icon: '', title: '.Net Core'},
    { icon: '', title: 'SQL Server'},
    { icon: '', title: 'Azure'}
  ]
}
