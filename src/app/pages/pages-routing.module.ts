import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { CardDetailComponent } from './card-detail/card-detail.component';

const routes: Routes = [
  {
    path:'dashboard',
    component:PagesComponent,
    loadChildren: ()=> import('./child-routing.module').then(m=> m.ChildRoutesModule),
  },
  {
    path:'card-detail/:id',
    component:CardDetailComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
