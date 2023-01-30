import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Places } from '../interfaces/Places.interface';


@Injectable({
  providedIn: 'root'
})
export class PalcesService {

  // mVXrvXik82KqcFCeu6Ui5loA5EjFhYDsnrBOZm50A3Z8mrQqw1iK91rL 
  constructor(private http : HttpClient) { }
  places: Places[] = [
    {
      id:'001',
      title:"Cataratas del Iguazú",
      location: 'Iguazú, Arg.',
      imageUrl: 'https://www.lugaresturisticosdeargentina.com/wp-content/uploads/2019/05/10-Mejores-Paisajes-de-Argentina.jpg',
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
      title:"Glaciar Perito Moreno",
      location: 'Calafate, Arg.',
      imageUrl: 'https://www.edreams.es/blog/wp-content/uploads/sites/5/2018/11/shutterstock_621389801-370x200.jpg',
      imageAlt:'mountains',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, accusantium! Alias quisquam facilis magni magnam tempore veritatis architecto, dicta aperiam saepe corporis libero similique soluta. Iste rem molestias iusto labore.',
      isInFav:false
    },
    {
      id:'004',
      title:"Cerro 7 colores",
      location: 'Purmamarca, Arg.',
      imageUrl: 'https://www.serargentino.com/public/images/2020/02/Jujuy-1-773x458.jpeg',
      imageAlt:'mountains',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, accusantium! Alias quisquam facilis magni magnam tempore veritatis architecto, dicta aperiam saepe corporis libero similique soluta. Iste rem molestias iusto labore.',
      isInFav:true
    },
    {
      id:'005',
      title:"Cordillera De Los Andes",
      location: 'Villa Pehuenia, Arg.',
      imageUrl: 'https://blog2.alquilerargentina.com/wp-content/uploads/2021/02/5-paisajes-del-sur-argentino-villa-pehuenia.jpg',
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

  favourites$: EventEmitter<Places[]> = new EventEmitter();

  toggleToFavourites(placeId:string){
    const itemPlace:Places = this.places.find(place => place.id === placeId)!;
    itemPlace.isInFav = !itemPlace.isInFav;
    localStorage.setItem('favourites', JSON.stringify(this.getFav));
    // emito un valor cada vez que se modifican los favoritos paraactualizar la vista.
    this.favourites$.emit(this.getFav);
  }
  getFavourites():Observable<Places[]>{
    const favourites:Places[] = JSON.parse(localStorage.getItem('favourites') || '[]');
    if(favourites.length === 0){
      return of(this.getFav)
    }else{
      return of(favourites)
    }
  }
  // 
  getPlacesApi(){
    return this.http.get("https://api.pexels.com/v1/search?query=naturaleza", {headers:{
      "Authorization":"mVXrvXik82KqcFCeu6Ui5loA5EjFhYDsnrBOZm50A3Z8mrQqw1iK91rL"
    }})
    .pipe(
      map((res:any)=>
        {
          const photos =res['photos'];
          return photos.map((item:any)=>({...item, description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, accusantium! Alias quisquam facilis magni magnam tempore veritatis architecto, dicta aperiam saepe corporis libero similique soluta. Iste rem molestias iusto labore.'}))
        }
      )
    )
  }
}
