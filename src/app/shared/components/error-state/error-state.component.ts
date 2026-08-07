import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-error-state',
    imports: [],
    templateUrl: './error-state.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './error-state.component.scss'
})
export class ErrorStateComponent {
  @Input() title = 'Oops!';

  @Input() message = '';

  @Output() retry = new EventEmitter<void>();
}
