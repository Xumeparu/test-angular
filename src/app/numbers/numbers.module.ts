import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './numbers/numbers.component';



@NgModule({
  declarations: [
    NumbersComponent
  ],
  exports: [
    NumbersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NumbersModule { }
