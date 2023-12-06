import { inject, Injectable } from '@angular/core';
import { ThemeType } from '../../@types/theme';
import { TelegramService } from './telegram.service';
import { BodyClassService } from './body-class.service';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private activeTheme: ThemeType = ThemeType.light;

  private telegramService = inject(TelegramService);

  private bodyClassService = inject(BodyClassService);

  private route = inject(ActivatedRoute);

  constructor() {
    this.route.queryParams.subscribe((queryParams) => {
      if (queryParams['theme'] === ThemeType.dark) {
        this.setTheme(ThemeType.dark);
      }
    });

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
