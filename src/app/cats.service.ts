import { Injectable } from '@angular/core';
import { CatError } from './cats/interfaces';

const URL = "https://http.cat/";

@Injectable({
  providedIn: 'root'
})
export class CatsService {
  catErrors: CatError[] = [];

  constructor() { }

  async getCatError(catCode: string): Promise<CatError[]> {
    const catError = {
      id: Math.random().toString(36).substr(2),
      code: catCode,
      image: `${URL}/${catCode}`,
    };

    this.catErrors.push(catError);
    catCode = "";
    return this.catErrors;
  }

  deleteCatError(id: string): CatError[] {
    return this.catErrors = this.catErrors.filter((catError) => catError.id !== id);
  }

  deleteAllCatErrors(): CatError[] {
    return this.catErrors = [];
  }
}
