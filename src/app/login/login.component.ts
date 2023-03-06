import { Component } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
   form: FormGroup;
  constructor(private fb: FormBuilder) {
this.form = this.fb.group({
email: ['ismail.hajfani@gmail.com', [Validators.required, Validators.email]],
password: ['123456789', [Validators.required, Validators.minLength(6)]]
})
  }
ngOnInit(): void {
  
}  
  login() {
    console.log(this.form.value)
  }

}
