import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-error-state',
    imports: [],
    templateUrl: './error-state.component.html',
    styleUrl: './error-state.component.scss'
})
export class ErrorStateComponent {
  @Input() title = 'Oops!';

  @Input() message = '';

  @Output() retry = new EventEmitter<void>();
}
