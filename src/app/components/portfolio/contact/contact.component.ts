import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  mail: FormGroup;
  constructor(private fb: FormBuilder) {
    this.mail = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
  }
  async sendMail() {

    if (this.mail.status === 'VALID') {
      const formData = new FormData();
      formData.append('name', this.mail.get('name')?.value);
      formData.append('email', this.mail.get('email')?.value);
      formData.append('message', this.mail.get('message')?.value);


      await fetch("https://kevin-schimke.de/send_mail.php",
        {
          method: 'POST',
          body: formData
        });
    }
  }

  checkIsValid(item: any, param: any) {
    return this.mail.get(item)?.hasError(param) && this.mail.get(item)?.touched
  }

  checkIsAllValid(item: any) {
    let state: boolean = true;
    if (this.mail.get(item)?.status == 'INVALID') state = false;
    return state
  }
}