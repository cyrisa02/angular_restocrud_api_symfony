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


@NgModule({
  declarations: [
    AppComponent,
    RestoitemComponent,
    AddRestoComponent,
    EditRestoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
