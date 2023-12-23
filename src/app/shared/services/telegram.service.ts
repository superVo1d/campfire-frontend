import { Injectable } from '@angular/core';
import { TelegramWebApps } from 'telegram-webapps-types';

declare global {
  interface Window {
    Telegram: TelegramWebApps.SDK;
  }
}

@Injectable({
  providedIn: 'root'
})
export class TelegramService {
  readonly _tg: TelegramWebApps.WebApp;

  constructor() {
    this._tg = window.Telegram?.WebApp;
  }

  get initDataUnsafe() {
    return this._tg?.initDataUnsafe;
  }

  get initData() {
    return this._tg?.initData;
  }

  get theme() {
    return this._tg?.colorScheme === 'light';
  }
}
