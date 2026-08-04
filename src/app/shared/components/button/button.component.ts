import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
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