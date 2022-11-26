import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { RestoitemComponent } from './restoitem/restoitem.component';

const routes: Routes = [
  { path: "resto", component: RestoitemComponent },
  { path: 'add-resto', component: AddRestoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
