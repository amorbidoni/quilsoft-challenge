import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { PalcesService } from '../../services/palces.service';
import { Places } from '../../interfaces/Places.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit, OnDestroy {
  public favourites!: Places[];
  private favouritesSubscription!:Subscription;
  constructor(private palcesService : PalcesService) { }
  ngOnDestroy(): void {
    this.favouritesSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.favouritesSubscription =this.palcesService.favourites$.subscribe(res=>{
      this.getFavourites();
    })

    this.getFavourites();
  }

  getFavourites(){
    this.palcesService.getFavourites().subscribe(res=>
      {
        this.favourites = res;
      })
  }  
}
