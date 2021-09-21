import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReceitaModel } from 'src/shared/models';
import { HostService, RecipesService, EncodeDecodeService } from 'src/shared/services';

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
  _pathImage: string = '';

  constructor(
    private hostService: HostService,
    private recipeService: RecipesService,
    private encodeDecodeService: EncodeDecodeService,
    private route: Router) { }

  ngOnInit(): void {
    this._url = this.hostService.getDomainUrl();
    this.setUpPage();
  }

  setUpPage(): void {
    const urlImage = 'assets/img/svg/';
    const category = this.hostService.getParameterResult('categoria');
    this._icon = this.recipeService.getIcon(category);
    switch(category) {
      case 'aves':
        this._titleCategory = 'Aves';
        break;
      case 'carnes':
        this._titleCategory = 'Carnes';
        break;
      case 'peixes':
        this._titleCategory = 'Peixes';
        break;
      case 'massas':
        this._titleCategory = 'Massas';
        break;
      case 'sopas':
        this._titleCategory = 'Sopas e Caldos';
        break;
      default:
        this._titleCategory = 'Vegetais';
        break;
    }
    this._pathImage = this._url + urlImage + this._icon + '.svg';
    this.recipeService.getListRecipes().subscribe((res: ReceitaModel[]) => {
      this._list = res.filter(r => r.categoria === category);
    });
  }

  goToRecipe(id: number) {
    const _id = this.encodeDecodeService.EncodeUnicode(id.toString());
    this.route.navigate(['/receita'], { queryParams: { codRecipe: _id } });
  }
}
