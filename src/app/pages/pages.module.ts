import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    CardDetailComponent,
    FavouritesComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ComponentsModule,
     FormsModule
  ]
})
export class PagesModule { }
