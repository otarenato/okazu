import { Component, OnInit } from '@angular/core';
import { HostService } from 'src/shared/services/host.service';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.scss']
})
export class ReceitasComponent implements OnInit {

  _url: string = '';
  _icon: string = '';
  _titleCategory: string = '';

  constructor(private hostService: HostService) { }

  ngOnInit(): void {
    this._url = this.hostService.getDomainUrl();
    this.setUpHeader();
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
      default:
        this._icon = 'vegetables';
        this._titleCategory = 'Vegetais';
        break;
    }
  }

}
