import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { HostService } from '.';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { ReceitaModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  _url: string = '';
  _receita!: ReceitaModel;

  constructor(private http: HttpClient, private hostService: HostService) { }

  getListRecipes(): Observable<ReceitaModel[]> {
    this._url = this.hostService.getDomainUrl();
    return this.http.get<ReceitaModel[]>(`${ this._url }assets/data/receitas.json`);
  }

  setRecipe(receita: ReceitaModel) {
    this._receita = receita;
  }

  getRecipe(): ReceitaModel {
    return this._receita;
  }
}
