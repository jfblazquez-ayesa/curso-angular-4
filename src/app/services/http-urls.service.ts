import { Injectable } from '@angular/core';

@Injectable()
export class HttpUrlsService {

  private urls = { FIREBASE_CONTACT_API_URL: 'https://curso-angular4-ayesa.firebaseio.com/contacts' };

  constructor() { }

  public get(index, preffix?: string, suffix?: string) {
    return (preffix || '') + this.urls[index] + (suffix || '');
  }

}
