import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HostService } from 'src/shared/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  _url: string = '';

  constructor(private router: Router, private hostService: HostService) { }

  ngOnInit(): void {
    this._url = this.hostService.getDomainUrl();
  }

  goToRecipes(cat: string): void {
    this.router.navigate(['/receitas'], { queryParams: { categoria: cat} });
  }

}
