import { inject, Injectable } from '@angular/core';
import { ThemeType } from '../../@types/theme';
import { TelegramService } from './telegram.service';
import { BodyClassService } from './body-class.service';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private activeTheme: ThemeType = ThemeType.light;

  private telegramService = inject(TelegramService);

  private bodyClassService = inject(BodyClassService);

  constructor() {
    // let theme;
    //
    // if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    //   //
    // }

    console.log('isLightTheme', this.telegramService);

    this.setTheme(this.telegramService.isLightTheme() ? ThemeType.light : ThemeType.dark);
  }

  public getActiveTheme(): ThemeType {
    return this.activeTheme;
  }

  public setTheme(theme: ThemeType) {
    this.activeTheme = theme;
    this.bodyClassService.addBodyClass(`${theme}-theme`);
  }
}
