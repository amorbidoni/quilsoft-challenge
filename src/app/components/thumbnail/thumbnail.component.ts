import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent implements OnInit {
  @Input() size: number = 50;
  @Input() imageUrl!:string;
  constructor() { }

  ngOnInit(): void {
  }
  get getStyles(){
    return {
      backgroundImage: `url(${this.imageUrl})`,
      width:`${this.size}px`,
      height:`${this.size}px`,
    }
  }

}
