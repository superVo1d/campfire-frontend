import { Injectable } from '@angular/core';
import { TelegramWebApps } from 'telegram-webapps-types';

declare global {
  interface Window {
    Telegram: TelegramWebApps.SDK;
  }
}

@Injectable({
  providedIn: 'root',
})
export class TelegramService {
  readonly tg: TelegramWebApps.WebApp | null;

  constructor() {
    this.tg = window.Telegram ? window.Telegram.WebApp : null;
  }

  public getInitData() {
    return this.tg;
  }

  public isLightTheme() {
    return this.tg?.colorScheme === 'light';
  }
}
