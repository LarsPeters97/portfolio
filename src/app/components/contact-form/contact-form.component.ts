import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators,
  FormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  contactForm = this.fb.group({
    name: [
      '',
      [
        Validators.required,
        (control: FormControl<any>) => this.minimumLengthRequired(control, 3),
      ],
    ],
    email: ['', [Validators.required, Validators.email]],
    message: [
      '',
      [
        Validators.required,
        (control: FormControl<any>) => this.minimumLengthRequired(control, 20),
      ],
    ],
  });
  isSubmitted = false;
  textareaContent!: string;

  constructor(private fb: FormBuilder) {}

  async sendMail() {
    let formData = new FormData();
    // this.setFormData(formData);
    // console.log(formData);
    console.log('Sending Mail');

    await fetch(
      'https://lars-peters.developerakademie.net/send_mail_portfolio.php',
      {
        method: 'POST',
        body: formData,
      }
    );
  }

  onSubmit() {
    console.log('submitted form', this.contactForm);
    this.isSubmitted = true;
  }

  minimumLengthRequired(control: FormControl, minlength: number) {
    if (control.value) {
      if (control.value.length < minlength && control.value.length > 0) {
        return { tooShort: true };
      } else return null;
    } else return;
  }

  textareaChange() {
    if (this.textareaContent) {
      let message = document.getElementById('message');
      if (this.textareaContent.length > 0 && message)
        message.style.border = '3px solid white';
    }
  }
}
