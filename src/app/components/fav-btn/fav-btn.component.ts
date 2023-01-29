import { Component, Input, OnInit, Output } from '@angular/core';
import { PalcesService } from '../../services/palces.service';

@Component({
  selector: 'app-fav-btn',
  templateUrl: './fav-btn.component.html',
  styleUrls: ['./fav-btn.component.scss']
})
export class FavBtnComponent implements OnInit {
  @Input() isInFav:boolean = false;
  @Input() palceId!:string;
  
  constructor(private placesService : PalcesService) { }

  ngOnInit(): void {
  }
  toggleFav(){
    this.placesService.toggleToFavourites(this.palceId);
  }
}
