import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatListComponent } from './cat-list/cat-list.component';
import {FormsModule} from "@angular/forms";



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
  ]
})
export class CatsModule { }
