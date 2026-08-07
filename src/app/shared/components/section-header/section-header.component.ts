import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-section-header',
    imports: [],
    templateUrl: './section-header.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './section-header.component.scss'
})
export class SectionHeaderComponent {
  @Input() eyebrow = '';

  @Input() title = '';

  @Input() subtitle = '';
}
