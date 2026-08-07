import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-button',
    imports: [CommonModule],
    changeDetection: ChangeDetectionStrategy.Eager,
    templateUrl: './button.component.html'
})
export class ButtonComponent {

  @Input() variant: 'primary' | 'secondary' | 'outline' | 'danger' = 'primary';

  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  @Input() disabled = false;

  @Input() loading = false;

  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  @Output() clicked = new EventEmitter<void>();

  onClick(): void {
    if (!this.disabled && !this.loading) {
      this.clicked.emit();
    }
  }

}