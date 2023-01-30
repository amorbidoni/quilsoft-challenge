import { Component, OnInit } from '@angular/core';
import { PalcesService } from '../../services/palces.service';
import { Places } from '../../interfaces/Places.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public places!: Places[];
  public content!: Places[];
  constructor(private placesService : PalcesService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.getPlaces();
    }, 2000);
    this.placesService.getPlacesApi().subscribe(res=>{
      console.log(res)
    })
  }

  getPlaces(){
    this.placesService.getPlaces().subscribe(res=>{
      this.places = res;
    })
  }


}
