import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TelegramWebApps } from 'telegram-webapps-types';
import WebAppInitData = TelegramWebApps.WebAppInitData;
// import { initData as initDataMock } from '../../mocks/telegram';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _apiBaseUrl = '/api';

  private http = inject(HttpClient);

  public getUser(initData: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${initData}`
    });

    const requestOptions = { headers: headers };

    return this.http.get(`${this._apiBaseUrl}/user`, requestOptions);
  }
}
