import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReceitaModel } from 'src/shared/models';
import { HostService, RecipesService } from 'src/shared/services';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.scss']
})
export class ReceitaComponent implements OnInit {

  _url: string = '';
  _icon: string = '';
  _receita: ReceitaModel = new ReceitaModel;

  constructor(private recipeService: RecipesService, private route: Router, private hostService: HostService) {
    this._url = this.hostService.getDomainUrl();
  }

  ngOnInit(): void {
    let id = +atob(this.hostService.getParameterResult('id'));
    this.recipeService.getListRecipes().subscribe((res: ReceitaModel[]) => {
      let rec = res.filter(r => r.id === id);
      this._receita = rec[0];
      switch(this._receita.categoria) {
        case 'aves':
          this._icon = 'chicken';
          break;
        case 'carnes':
          this._icon = 'meat';
          break;
        case 'peixes':
          this._icon = 'fish';
          break;
        case 'massas':
          this._icon = 'pasta';
          break;
        case 'sopas':
          this._icon = 'soup';
          break;
        default:
          this._icon = 'vegetables';
          break;
      }
    });
  }

}
