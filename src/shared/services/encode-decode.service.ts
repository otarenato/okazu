import { Injectable } from '@angular/core';
import { atob, Base64 } from 'js-base64';

@Injectable({
  providedIn: 'root'
})
export class EncodeDecodeService {

  constructor() { }

  EncodeUnicode(str: string) {
    let _str = str ? str : '';
    return btoa(encodeURIComponent(_str).replace(/%([0-9A-F]{2})/g, (match, p1) => {
      return String.fromCharCode(("0x" + p1) as any);
    }));
  }

  DecodeUnicode(str: string) {
    return decodeURIComponent(atob(str).split('').map((c) => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  }
}
