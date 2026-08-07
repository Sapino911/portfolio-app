import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-skeleton',
    imports: [],
    templateUrl: './skeleton.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './skeleton.component.scss'
})
export class SkeletonComponent {
  @Input() height = '20px';

  @Input() width = '100%';

  @Input() rounded = '12px';
}
