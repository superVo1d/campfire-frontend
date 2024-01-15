import { Injectable } from '@angular/core';
import { TelegramWebApps } from 'telegram-webapps-types-new';
import HapticFeedback = TelegramWebApps.HapticFeedback;

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

  private _backButton: TelegramWebApps.BackButton;

  private _backButtonCallback: () => void;

  constructor() {
    this._tg = window.Telegram.WebApp;
    this._backButton = this._tg.BackButton;
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

  enableClosingConfirmation() {
    this._tg?.enableClosingConfirmation();
  }

  get haptic(): HapticFeedback | undefined {
    return this._tg?.HapticFeedback;
  }

  setBackButton = (callback: () => void): void => {
    this._backButton.offClick(this._backButtonCallback);
    this._backButtonCallback = callback;

    this._backButton.show();
    this._backButton.onClick(() => {
      this._backButtonCallback();
      this._backButton.hide();
    });
  };

  openTelegramChat = (userName: string) => {
    this._tg.openTelegramLink(`https://t.me/${userName}`);
  };

  ready(): void {
    this._tg?.ready();
  }

  resetBackButton(): void {
    this._backButton.offClick(this._backButtonCallback);
    this._backButton.hide();
  }

  onEvent(eventType: TelegramWebApps.EventType, eventHandler: () => void) {
    this._tg?.onEvent(eventType, eventHandler);
  }
}
