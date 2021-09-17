import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HostService {

  constructor(private actRoute: ActivatedRoute) { }

  urlPath: string = 'https://otarenato.github.io/portfolio/';
  localhostPath: string = '../../';

  getDomainUrl(): string {
    const host = window.location.hostname;
    const url = host === 'localhost' ? this.localhostPath : this.urlPath;
    return url;
  }

  getParameterResult(param: string): string {
    let paramResult = '';
    this.actRoute.queryParams.subscribe(res => {
      paramResult = res[param];
    });
    return paramResult
  }
}
