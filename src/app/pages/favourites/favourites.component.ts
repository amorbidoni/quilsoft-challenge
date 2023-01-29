import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PalcesService } from '../../services/palces.service';
import { Places } from '../../interfaces/Places.interface';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  public favourites!: Places[];
  
  constructor(private palcesService : PalcesService) { }


  ngOnInit(): void {
    this.getFavourites();
  }

  getFavourites(){
    this.palcesService.getFavourites().subscribe(res=>{
      this.favourites = res;
    })
  }  
}
