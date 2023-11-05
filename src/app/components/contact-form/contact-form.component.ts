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
    privacyPolicyAgreement: [''],
  });
  isSubmitted = false;
  textareaContent!: string;

  constructor(private fb: FormBuilder) {}

  async sendMail() {
    let formData: FormData = this.setFormData();

    console.log('Sending Mail');

    try {
      const response = await fetch(
        'https://lars-peters.developerakademie.net/send_mail_portfolio.php',
        {
          method: 'POST',
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      console.log('Send itttt');
    } catch (err) {
      console.log(`Error during mail dispatch! (Error: ${err})`);
    }
  }

  onSubmit() {
    console.log('submitted form', this.contactForm);
    this.isSubmitted = true;
    if (!this.contactForm.valid) {
      return;
    } else {
      this.sendMail();
      console.log('E-Mail was sent');
    }
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

  setFormData() {
    let data: any = this.contactForm.value;
    let formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('message', data.message);
    return formData;
  }
}
