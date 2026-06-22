import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
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
