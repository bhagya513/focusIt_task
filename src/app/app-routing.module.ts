import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistersComponent } from './registers/registers.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'registers',component:RegistersComponent},
  {path:'navbar',component:NavBarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
