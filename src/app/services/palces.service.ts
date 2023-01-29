import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Places } from '../interfaces/Places.interface';


@Injectable({
  providedIn: 'root'
})
export class PalcesService {

  constructor() { }
  places: Places[] = [
    {
      id:'001',
      title:"McWaay Lake, Big Sur",
      location: 'California, USA.',
      imageUrl: 'https://mott.pe/noticias/wp-content/uploads/2019/03/los-50-paisajes-maravillosos-del-mundo-para-tomar-fotos.jpg',
      imageAlt:'mountains',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, accusantium! Alias quisquam facilis magni magnam tempore veritatis architecto, dicta aperiam saepe corporis libero similique soluta. Iste rem molestias iusto labore.',
      isInFav:true
    },
    {
      id:'002',
      title:"McWaay Lake, Big Sur",
      location: 'California, USA.',
      imageUrl: 'https://mott.pe/noticias/wp-content/uploads/2019/03/los-50-paisajes-maravillosos-del-mundo-para-tomar-fotos.jpg',
      imageAlt:'mountains',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, accusantium! Alias quisquam facilis magni magnam tempore veritatis architecto, dicta aperiam saepe corporis libero similique soluta. Iste rem molestias iusto labore.',
      isInFav:false
    },
    {
      id:'003',
      title:"McWaay Lake, Big Sur",
      location: 'California, USA.',
      imageUrl: 'https://mott.pe/noticias/wp-content/uploads/2019/03/los-50-paisajes-maravillosos-del-mundo-para-tomar-fotos.jpg',
      imageAlt:'mountains',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, accusantium! Alias quisquam facilis magni magnam tempore veritatis architecto, dicta aperiam saepe corporis libero similique soluta. Iste rem molestias iusto labore.',
      isInFav:false
    },
    {
      id:'004',
      title:"McWaay Lake, Big Sur",
      location: 'California, USA.',
      imageUrl: 'https://mott.pe/noticias/wp-content/uploads/2019/03/los-50-paisajes-maravillosos-del-mundo-para-tomar-fotos.jpg',
      imageAlt:'mountains',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, accusantium! Alias quisquam facilis magni magnam tempore veritatis architecto, dicta aperiam saepe corporis libero similique soluta. Iste rem molestias iusto labore.',
      isInFav:true
    },
    {
      id:'005',
      title:"McWaay Lake, Big Sur",
      location: 'California, USA.',
      imageUrl: 'https://mott.pe/noticias/wp-content/uploads/2019/03/los-50-paisajes-maravillosos-del-mundo-para-tomar-fotos.jpg',
      imageAlt:'mountains',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, accusantium! Alias quisquam facilis magni magnam tempore veritatis architecto, dicta aperiam saepe corporis libero similique soluta. Iste rem molestias iusto labore.',
      isInFav:false
    },
  ]
  favourites: Places [] = [];

  getPlaces():Observable<Places[]>{
    return of(this.places);
  }

  getPlaceById(id:string):Observable<Places | undefined> {
    const place = this.places.find(x => x.id === id);
    return of(place);
  }

  addPlace(place:Places){
    this.places.push(place);
  }

  get getFav(){
    return this.places.filter(item=> item.isInFav)
  }

  toggleToFavourites(placeId:string){
    const itemPlace:Places = this.places.find(place => place.id === placeId)!;
    itemPlace.isInFav = !itemPlace.isInFav;
    localStorage.setItem('favourites', JSON.stringify(this.getFav));
  }

  getFavourites():Observable<Places[]>{
    const favourites:Places[] = JSON.parse(localStorage.getItem('favourites') || '[]');
    if(favourites.length === 0){
      return of(this.getFav)
    }else{
      return of(favourites);
    }
  }
}
