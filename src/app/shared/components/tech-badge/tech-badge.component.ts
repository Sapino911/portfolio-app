import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-tech-badge',
    imports: [],
    templateUrl: './tech-badge.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './tech-badge.component.scss'
})
export class TechBadgeComponent {
  @Input() label = '';
  @Input() icon = '';
}
