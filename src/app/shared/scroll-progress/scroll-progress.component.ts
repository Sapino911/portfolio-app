import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
    selector: 'app-scroll-progress',
    imports: [],
    templateUrl: './scroll-progress.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './scroll-progress.component.scss'
})
export class ScrollProgressComponent {
  scrollService = inject(ScrollService);
}
