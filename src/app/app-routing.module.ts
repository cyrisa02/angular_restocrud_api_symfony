import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestoitemComponent } from './restoitem/restoitem.component';

const routes: Routes = [
  { path: "resto", component: RestoitemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
