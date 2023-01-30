import { Injectable } from '@angular/core';
import { Places } from '../interfaces/Places.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  searchData(places:Places[], searchTerm:string):Places[] {
    let content = places;
    
      content = content.filter((element) => {
        let placeTitle = element.title.toLocaleLowerCase();
        let placeDescription = element.description.toLocaleLowerCase();
        let placeId = element.id;

        return (
          placeTitle.includes(searchTerm) ||
          placeDescription.includes(searchTerm) ||
          placeId.includes(searchTerm)
        );
      });
    
    return content;
  }

}
