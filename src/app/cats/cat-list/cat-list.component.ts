import { Component } from '@angular/core';
import { CatError } from '../interfaces';
import { CatsService } from '../../cats.service';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent {
  catErrors: CatError[] = [];
  catCode = '';

  constructor(private catService: CatsService) { }

  getCatError(): void {
    this.catErrors = this.catService.getCatError(this.catCode);
    this.catCode = '';
  }

  deleteCatError(id: string): void {
    this.catService.deleteCatError(id);
  }

  deleteAllCatErrors() : void {
    this.catService.deleteAllCatErrors();
  }
}
