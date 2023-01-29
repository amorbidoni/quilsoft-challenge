import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { FormValidatorService } from 'src/app/services/form-validator.service';
import { AddUserInterface } from '../../interfaces/addUserDto';
import { UsersService } from '../../services/users.service';
import { ModalAnimation } from '../../shared/animations/modal.animation';
import { OverlayAnimation } from '../../shared/animations/overlay.animation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [ModalAnimation, OverlayAnimation]
})
export class RegisterComponent implements OnInit {
  public emailErrorMsg:string = '';
  private emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  public formSumitted: boolean = false;
  public modalConfirm:boolean = false;
  constructor(private fb : FormBuilder,
              private formValidators: FormValidatorService,
              private usersService: UsersService,
              private router : Router) { }

  registerForm: FormGroup = this.fb.group({
      email:[ , 
        [ Validators.required, Validators.email,
          Validators.pattern(this.emailPattern)]
        ],
      password:[,  [Validators.required, Validators.minLength(5)]],
      confirmPassword:[,  [Validators.required, Validators.minLength(5)]]
  },
  {
    validators: this.confirmedPassword('password', 'password2'),
  }
  )

  ngOnInit(): void {
  }
  
  register(){
    this.formSumitted = true;
    if (this.registerForm.invalid) return;

    const newUser: AddUserInterface = {
      email : this.registerForm.get('email')?.value,
      password:this.registerForm.get('password')?.value,
      confirmPassword:this.registerForm.get('confirmPassword')?.value,
    }
    let userAdded = this.usersService.addUser(newUser);
    if(userAdded){
      this.modalConfirm = true;
    }else{
      console.log('error')
    }
  }
  validForm(campo: string) {
    if(campo === 'email' ){
      this.emailErrorMsg = this.formValidators.emailErrMsg(this.registerForm)
    }
    return this.formValidators.validForm(campo, this.registerForm);
  }
  // Password validators
  contrasenasNoValidas(): boolean {
    const pass1 = this.registerForm.get('password')!.value;
    const pass2 = this.registerForm.get('confirmPassword')!.value;
    if (pass1 !== pass2 && this.formSumitted) {
      return true;
    } else {
      return false;
    }
  }
  confirmedPassword(controlName: string, matchingControlName: string) {
    return (control: AbstractControl): ValidationErrors | null => {
      const input = control.get(controlName);
      const matchingInput = control.get(matchingControlName);

      if (input === null || matchingInput === null) {
        return null;
      }

      if (matchingInput?.errors && !matchingInput.errors['confirmedValidator']) {
        return null;
      }

      if (input.value !== matchingInput.value) {
        matchingInput.setErrors({ confirmedValidator: true });
        return { confirmedValidator: true };
      } else {
        matchingInput.setErrors(null);
        return null;
      }
    };
  }
  // modal

  closeModalConfirmation(value:boolean){
      if(value){
        this.router.navigateByUrl('/auth/login');
      }
  }
}
