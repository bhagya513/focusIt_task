import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistersComponent } from './registers/registers.component';
import { EducationComponent } from './education/education.component';
import { DocumentsComponent } from './documents/documents.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'registers',component:RegistersComponent},
  {path:'navbar',component:NavBarComponent},
  {path:'education',component:EducationComponent},
  {path:'documents',component:DocumentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
