import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { UserInterface } from '../../interfaces/User.interface';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public navBar:boolean = false;
  constructor(private usersService : UsersService) { }
  public activeUser!: UserInterface;
  ngOnInit(): void {
    this.activeUser = this.usersService.getUserInfo;
  }
  closeNavBar(){
    this.navBar = false;
  }
}
