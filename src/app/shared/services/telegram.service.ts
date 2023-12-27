import { Injectable } from '@angular/core';
import { TelegramWebApps } from 'telegram-webapps-types-new';

declare global {
  interface Window {
    Telegram: TelegramWebApps.SDK;
  }
}

@Injectable({
  providedIn: 'root'
})
export class TelegramService {
  private readonly _tg: TelegramWebApps.WebApp;

  constructor() {
    this._tg = window.Telegram.WebApp;
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

  get viewportHeight() {
    return this._tg?.viewportHeight;
  }

  expand() {
    this._tg?.expand();
  }

  get haptic() {
    return this._tg?.HapticFeedback;
  }

  onEvent(eventType: TelegramWebApps.EventType, eventHandler: () => void) {
    this._tg?.onEvent(eventType, eventHandler);
  }
}
