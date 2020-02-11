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
         MatTooltipModule,
         MatFormFieldModule,
         MatDatepickerModule,
         MatSelectModule,
         MatNativeDateModule
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
    MatTooltipModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule
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
    MatTooltipModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule  ]
})
export class MaterialUiModule { }
