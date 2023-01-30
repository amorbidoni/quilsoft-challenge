import { Component, Input, OnInit } from '@angular/core';
import { Places } from '../../interfaces/Places.interface';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  public searchTerm:string = '';
  constructor() { }

  ngOnInit(): void {
  }
  search(term:string){
    console.log(term)

  }

}
