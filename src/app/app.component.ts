import { Component, inject, OnInit } from '@angular/core';
import { TelegramService } from './shared/services/telegram.service';
import { BrowserDetectorService } from './shared/services/browser-detector.service';
import { ThemeService } from './shared/services/theme.service';
import { ApiService } from './core/services/api.service';
import { TelegramWebApps } from 'telegram-webapps-types-new';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'campfire';

  private telegramService = inject(TelegramService);

  private browserDetectorService = inject(BrowserDetectorService);

  private apiService = inject(ApiService);

  private theme = inject(ThemeService);

  ngOnInit() {
    this.browserDetectorService.detectBrowser();

    this.telegramService.expand();
    document.documentElement.style.setProperty('--vh', (this.telegramService.viewportHeight / 100).toString() + 'px');

    this.telegramService.onEvent('viewportChanged', () => {
      document.documentElement.style.setProperty('--vh', (this.telegramService.viewportHeight / 100).toString() + 'px');
    });

    if (this.telegramService.initData) {
      this.apiService.getUser(this.telegramService.initData).subscribe((data) => {
        console.log(data);
      });
    }
  }
}
