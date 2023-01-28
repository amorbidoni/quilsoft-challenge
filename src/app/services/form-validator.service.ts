import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidatorService {

  validForm = (campo: string, myForm: FormGroup) => {
    const error = myForm.controls[campo].errors;
    if (error && myForm.controls[campo].touched) {
      if(error['length']){
        return { errorMsg: 'Must have 5 characters or +' };
      }
      return { errorMsg: 'Obligatory field' };

  
    } else {
      return null;
    }
  };



  // email validator

  private letras_mayusculas: string = 'ABCDEFGHYJKLMNÑOPQRSTUVWXYZ';

  tiene_mayusculas(texto: string) {
    for (let i = 0; i < texto.length; i++) {
      if (this.letras_mayusculas.indexOf(texto.charAt(i), 0) != -1) {
        return 1;
      }
    }
    return 0;
  }
   emailErrMsg(myForm: FormGroup): string {
    const emailInput = myForm.controls['email']
    const error = emailInput?.errors;
    const emailValue = emailInput.value;
    if (error?.['required']) {
      return 'Campo obligatorio';
    } else if (error?.['pattern']) {
      if (this.tiene_mayusculas(emailValue) === 1) {
        return 'Email cannot have capital letters';
      } else {
        return 'Wrong email';
      }
    }
    return '';
  }
}
