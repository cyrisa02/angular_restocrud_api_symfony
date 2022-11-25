import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


const materialModules = [
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatDividerModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...materialModules
  ],
  exports: [...materialModules],
})

export class MaterialDesignModule { }
