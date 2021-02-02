import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { ButtonBackCHomeomponent } from './button-back-home/button-back-home.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    ButtonBackCHomeomponent,
  ],

  imports: [
    CommonModule
  ]

})
export class ErrorsModule { }
