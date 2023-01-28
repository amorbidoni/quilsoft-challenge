import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidatorService } from '../../services/form-validator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public showPassword:boolean = false;
  public emailErrorMsg:string = '';
  private emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  constructor(private fb : FormBuilder,
              private formValidators: FormValidatorService) { }

  loginForm:FormGroup = this.fb.group({
    email:[ , 
      [ Validators.required, Validators.email,
        Validators.pattern(this.emailPattern)]
      ],
    password:[, [Validators.required, Validators.minLength(5)]]
  })

  ngOnInit(): void {
  }

  toggleHidePassword(){
    this.showPassword = !this.showPassword;
    console.log(this.showPassword)
  }

  login(){}
  validForm(campo: string) {
    if(campo === 'email' ){
      this.emailErrorMsg = this.formValidators.emailErrMsg(this.loginForm)
    }
    return this.formValidators.validForm(campo, this.loginForm);
  }
}
