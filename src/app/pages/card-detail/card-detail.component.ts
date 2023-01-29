import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PalcesService } from '../../services/palces.service';
import { Places } from '../../interfaces/Places.interface';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {
  public placeId!:string;
  public place!: Places | undefined;
  public backRoute!: string; 
  constructor(private route : ActivatedRoute,
              private placesService: PalcesService) { }  

  ngOnInit(): void {
    this.backRoute = this.route.snapshot.paramMap.get('backRoute') || '/dashboard';
    this.placeId = this.route.snapshot.params['id'];
    this.getPlaceById(this.placeId);
  }

  getPlaceById(id:string){
    this.placesService.getPlaceById(id).subscribe(res =>{
      this.place = res;
    })
  }

}
