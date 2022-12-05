import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { EditRestoComponent } from './edit-resto/edit-resto.component';
import { HomeComponent } from './home/home.component';
import { RestoitemComponent } from './restoitem/restoitem.component';

const routes: Routes = [
  { path: "resto", component: RestoitemComponent },
  { path: 'add-resto', component: AddRestoComponent },
  { path: 'edit-restaurant/:id', component: EditRestoComponent },
  { path: "", component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
