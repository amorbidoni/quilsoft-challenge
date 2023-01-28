import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fav-btn',
  templateUrl: './fav-btn.component.html',
  styleUrls: ['./fav-btn.component.scss']
})
export class FavBtnComponent implements OnInit {
  @Input() isInFav:boolean = false;
  @Input() palceId!:string;
  
  constructor() { }

  ngOnInit(): void {
  }
  toggleFav(){
    this.isInFav = !this.isInFav
  }
}
