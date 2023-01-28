import { Injectable } from '@angular/core';
import { UserInterface } from '../interfaces/UserInterface';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor() { }

  users: UserInterface[] =[
    {
      email:'asd@asd.com',
      password:'123123'
    }
  ]

  addUser(user:UserInterface){
    if(user.password !== user.confirmPassword){
      return false
    }else{
      this.users.push({email:user.email, password:user.password});
  
      return true;
    }
  }

}
