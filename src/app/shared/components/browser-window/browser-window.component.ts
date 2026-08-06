import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-browser-window',
    imports: [],
    templateUrl: './browser-window.component.html',
    styleUrl: './browser-window.component.scss'
})
export class BrowserWindowComponent {
  @Input() title = '';

  @Input() image = '';

  @Input() alt = '';
}
