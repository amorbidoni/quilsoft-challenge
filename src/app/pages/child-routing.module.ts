import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavouritesComponent } from './favourites/favourites.component';


const childRoutes: Routes = [
    {
    path: '',
    component: HomeComponent,
    },
    {
      path:'favourites',
      component:FavouritesComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class ChildRoutesModule { }