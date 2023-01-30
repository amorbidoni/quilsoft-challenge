import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { HeaderBackComponent } from './header-back/header-back.component';
import { LoaderComponent } from './loader/loader.component';
import { FavBtnComponent } from './fav-btn/fav-btn.component';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './nav-bar/navigation.component';



@NgModule({
  declarations: [
    NavBarComponent, 
    ThumbnailComponent, 
    CardComponent, 
    HeaderBackComponent, 
    LoaderComponent, 
    FavBtnComponent, 
    ModalComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule, RouterModule, FormsModule
  ],
  exports:[
    NavBarComponent, 
    ThumbnailComponent, 
    CardComponent,
    HeaderBackComponent,
    LoaderComponent,
    ModalComponent
  ]
})
export class ComponentsModule { }
