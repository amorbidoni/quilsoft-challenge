import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { HeaderBackComponent } from './header-back/header-back.component';
import { LoaderComponent } from './loader/loader.component';
import { FavBtnComponent } from './fav-btn/fav-btn.component';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavBarComponent, 
    ThumbnailComponent, 
    SearchBarComponent, 
    CardComponent, 
    HeaderBackComponent, 
    LoaderComponent, 
    FavBtnComponent, 
    ModalComponent
  ],
  imports: [
    CommonModule, RouterModule, FormsModule
  ],
  exports:[
    NavBarComponent, 
    ThumbnailComponent, 
    CardComponent,
    SearchBarComponent, 
    HeaderBackComponent,
    LoaderComponent,
    ModalComponent
  ]
})
export class ComponentsModule { }
