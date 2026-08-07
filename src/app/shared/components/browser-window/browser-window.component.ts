import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-browser-window',
    imports: [],
    templateUrl: './browser-window.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './browser-window.component.scss'
})
export class BrowserWindowComponent {
  @Input() title = '';

  @Input() image = '';

  @Input() alt = '';
}
