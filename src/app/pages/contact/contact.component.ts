import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../../core/services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  private readonly fb = inject(FormBuilder);

  private readonly contactService = inject(ContactService);

  contactForm = this.fb.nonNullable.group({

    name: ['', Validators.required],

    email: ['', [
      Validators.required,
      Validators.email
    ]],

    subject: ['', Validators.required],

    message: ['', Validators.required]

  });

  readonly sending = signal(false);

  readonly success = signal(false);

  readonly error = signal<string | null>(null);

  submit(): void {

    if (this.contactForm.invalid) {

      this.contactForm.markAllAsTouched();

      return;

    }

    this.sending.set(true);

    this.success.set(false);

    this.error.set(null);

    this.contactService.send(this.contactForm.getRawValue()).subscribe({

      next: response => {

        this.sending.set(false);

        this.success.set(true);

        this.success.set(true);

        setTimeout(() => {

          this.success.set(false);

        }, 5000);

        this.error.set(null);

        this.contactForm.reset();

      },

      error: error => {

        console.error(error);

        this.sending.set(false);

        this.error.set('Unable to send your message. Please try again.');

      }

    });

  }

}
