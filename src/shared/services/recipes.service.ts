import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HostService } from '.';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ReceitaModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  _url: string = '';
  _receita!: ReceitaModel;
  _listRecipes!: ReceitaModel[];

  constructor(private http: HttpClient, private hostService: HostService) {
    this._url = this.hostService.getDomainUrl();
  }

  getListRecipes(): Observable<ReceitaModel[]> {
    return this.http.get<ReceitaModel[]>(`${ this._url }assets/data/receitas.json`);
  }

  setRecipe(receita: ReceitaModel) {
    if (!!receita) {
      this._receita = receita;
    } else {
      return;
    }

  }

  getRecipe(): ReceitaModel {
    return this._receita;
  }
}
