import { Component, OnInit } from '@angular/core';
import { PalcesService } from '../../services/palces.service';
import { Places } from '../../interfaces/Places.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public searchBar:string = '';
  public places!: Places[];
  public content!: Places[];
  public searchResultsItems!:Places[];
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

  searchResults(results:Places[]){
    this.searchResultsItems = results;
    
  }
  searchData():Places[] {
    this.content = this.places;
    if (this.searchBar) {
     this.content = this.content.filter((element) => {
       let placeTitle = element.title.toLocaleLowerCase();
       let placeDescription = element.description.toLocaleLowerCase();
       let placeId = element.id;
       return (
         placeTitle.includes(this.searchBar) ||
         placeDescription.includes(this.searchBar) ||
         placeId.includes(this.searchBar)
       );
     });
   }
   return [];
 }

}
