import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReceitaModel } from 'src/shared/models';
import { HostService, RecipesService } from 'src/shared/services';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.scss']
})
export class ReceitasComponent implements OnInit {

  _url: string = '';
  _icon: string = '';
  _titleCategory: string = '';
  _list: ReceitaModel[] = new Array<ReceitaModel>();
  _receita: ReceitaModel = new ReceitaModel;

  constructor(private hostService: HostService, private recipeService: RecipesService, private route: Router) { }

  ngOnInit(): void {
    this._url = this.hostService.getDomainUrl();
    this.setUpHeader();
    this.recipeService.getListRecipes().subscribe((res: ReceitaModel[]) => {
      this._list = res;
    });
  }

  setUpHeader(): void {
    const category = this.hostService.getParameterResult('categoria');
    switch(category) {
      case 'aves':
        this._icon = 'chicken';
        this._titleCategory = 'Aves';
        break;
      case 'carnes':
        this._icon = 'meat';
        this._titleCategory = 'Carnes';
        break;
      case 'peixes':
        this._icon = 'fish';
        this._titleCategory = 'Peixes';
        break;
      case 'massas':
        this._icon = 'pasta';
        this._titleCategory = 'Massas';
        break;
      case 'sopas':
        this._icon = 'soup';
        this._titleCategory = 'Sopas e Caldos';
        break;
      default:
        this._icon = 'vegetables';
        this._titleCategory = 'Vegetais';
        break;
    }
  }

  goToRecipe(id: number) {
    this._receita = this._list.find(r => r.id === id) as ReceitaModel;
    this.recipeService.setRecipe(this._receita);
    this.route.navigate(['/receita']);
  }

}
