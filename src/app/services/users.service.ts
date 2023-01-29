import { Injectable } from '@angular/core';
import { AddUserInterface } from '../interfaces/addUserDto';
import { UserInterface } from '../interfaces/User.interface';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor() { }

  users: AddUserInterface[] =[
    {
      email:'asd@asd.com',
      password:'123123'
    }
  ]

  addUser(user:AddUserInterface){
    if(user.password !== user.confirmPassword){
      return false
    }else{
      this.users.push({email:user.email, password:user.password});
  
      return true;
    }
  }
  get getUserInfo(): UserInterface{
    return {
      name:'Andres Morbidoni',
      email:'morbodoniandres@gmial.com',
      adress:'Cordoba Argentina',
      imageUrl:''
    }
  }

}
