import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReceitaModel } from 'src/shared/models';
import { EncodeDecodeService, HostService, RecipesService } from 'src/shared/services';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.scss']
})
export class ReceitaComponent implements OnInit {

  _url: string = '';
  _icon: string = '';
  _receita: ReceitaModel = new ReceitaModel;
  _pathImage: string = '';

  constructor(
    private recipeService: RecipesService,
    private route: Router,
    private hostService: HostService,
    private encodeDecodeService: EncodeDecodeService) {
    this._url = this.hostService.getDomainUrl();
  }

  ngOnInit(): void {
    const urlImage = 'assets/img/svg/';
    if (this.hostService.getParameterResult('codRecipe')) {
      let id = +this.encodeDecodeService.DecodeUnicode(this.hostService.getParameterResult('codRecipe'));
      this.recipeService.getListRecipes().subscribe((res: ReceitaModel[]) => {
        let rec = res.filter(r => r.id === id);
        this._receita = rec[0];
        this._icon = this.recipeService.getIcon(this._receita.categoria);
        this._pathImage = this._url + urlImage + this._icon + '.svg';
      });
    }

  }
}
