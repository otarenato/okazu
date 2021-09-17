import { Component, OnInit } from '@angular/core';
import { ReceitaModel } from 'src/shared/models';
import { RecipesService } from 'src/shared/services';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.scss']
})
export class ReceitaComponent implements OnInit {

  _receita: ReceitaModel = new ReceitaModel;

  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void {
    this._receita = this.recipeService.getRecipe();
  }

}
