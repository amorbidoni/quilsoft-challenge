import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { PagesRoutingModule } from './pages/pages-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  // TODO: pagenofound component
  // {
  //   path: '**',
  //   component: NoPageFoundComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthRoutingModule, PagesRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
