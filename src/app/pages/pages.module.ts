import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { CardDetailComponent } from './card-detail/card-detail.component';


@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    CardDetailComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ComponentsModule
  ]
})
export class PagesModule { }
