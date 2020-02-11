import { NgModule } from '@angular/core';
import {
         MatInputModule,
         MatPaginatorModule,
         MatProgressSpinnerModule,
         MatSortModule,
         MatTableModule,
         MatIconModule,
         MatButtonModule,
         MatCardModule,
         MatDialogModule,
         MatTooltipModule
         } from "@angular/material";


@NgModule({
  imports: [
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatTooltipModule
  ],
  exports: [
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatTooltipModule  ]
})
export class MaterialUiModule { }
