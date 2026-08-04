import { Component } from '@angular/core';
import {
  FormBuilder, ReactiveFormsModule, Validators
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: any;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({

      name: ['', Validators.required],

      email: ['', [
        Validators.required,
        Validators.email
      ]],

      subject: ['', Validators.required],

      message: ['', Validators.required]

    });
  }

  submit() {

    console.log(this.contactForm.value);

  }

}
