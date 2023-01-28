import { Component, Input, OnInit } from '@angular/core';
import { Place } from '../../models/place-model';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() place!: Place;
  constructor() { }

  ngOnInit(): void {
  }

  toggleFav(){
    this.place.isInFav = !this.place.isInFav;
  }
}
