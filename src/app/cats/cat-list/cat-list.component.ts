import { Component } from '@angular/core';
import { CatError } from '../interfaces';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent {
  url = "https://http.cat/";
  catErrors: CatError[] = [];
  catCode = "";
  catError = {
    id: "",
    code: this.catCode,
    image: "",
  };

  getErrors(): CatError[] {
    this.catError = {
      id: Math.random().toString(36).substr(2),
      code: this.catCode,
      image: this.url + this.catCode,
    };
    this.catErrors.push(this.catError);
    this.catCode = "";
    return this.catErrors;
  }

  deleteAllCatErrors(): CatError[] {
    return this.catErrors = [];
  }

  deleteCatError(id: string): CatError[] {
    return this.catErrors = this.catErrors.filter((catError) => catError.id !== id);
  }
}
