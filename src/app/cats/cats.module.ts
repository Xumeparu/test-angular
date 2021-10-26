import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatListComponent } from './cat-list/cat-list.component';
import { FormsModule } from '@angular/forms';
import { CatsService } from '../cats.service';

@NgModule({
  declarations: [
    CatListComponent
  ],
  exports: [
    CatListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    CatsService
  ]
})
export class CatsModule { }
