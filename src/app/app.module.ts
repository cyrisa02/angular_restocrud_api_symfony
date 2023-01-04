import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from './material-design-module/material-design-module.module';
import { RestoitemComponent } from './restoitem/restoitem.component';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { FormsModule } from '@angular/forms';
import { EditRestoComponent } from './edit-resto/edit-resto.component';
import { DeleteRestoComponent } from './delete-resto/delete-resto.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    RestoitemComponent,
    AddRestoComponent,
    EditRestoComponent,
    DeleteRestoComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    HttpClientModule,
    FormsModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
