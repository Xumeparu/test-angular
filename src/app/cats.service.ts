import { Injectable } from '@angular/core';
import { CatError } from './cats/interfaces';

const URL = "https://http.cat";

@Injectable({
  providedIn: 'root'
})
export class CatsService {
  catErrors: CatError[] = [];

  constructor() { }

  getCatError(catCode: string): CatError[] {
    const catError = {
      id: Math.random().toString(36).substr(2),
      code: catCode,
      image: `${URL}/${catCode}`,
    };
    this.catErrors.push(catError);
    return this.catErrors;
  }

  deleteCatError(id: string) {
    const index = this.catErrors.findIndex((catError) => catError.id === id)
    this.catErrors.splice(index, 1);
  }

  deleteAllCatErrors(): CatError[] {
    return this.catErrors.splice(0);
  }
}
