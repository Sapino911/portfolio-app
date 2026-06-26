import { Component } from '@angular/core';
import { fadeAnimation, slideUpAnimation } from '../../shared/animations';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
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
