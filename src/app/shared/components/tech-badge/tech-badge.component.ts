import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tech-badge',
  standalone: true,
  imports: [],
  templateUrl: './tech-badge.component.html',
  styleUrl: './tech-badge.component.scss'
})
export class TechBadgeComponent {
  @Input() label = '';
  @Input() icon = '';
}
