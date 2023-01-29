import { Component, Input, OnInit } from '@angular/core';
import { Place } from '../../models/place-model';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() place!: Place;
  @Input() showDescription: boolean = true;
  @Input() showLocation: boolean = false;
  @Input() showTitle: boolean = true;
  @Input() backRoute: string = '/dashboard';
  constructor() { }

  ngOnInit(): void {
  }

}
