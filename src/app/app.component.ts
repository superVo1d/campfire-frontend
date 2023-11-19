import { Component, inject, OnInit } from '@angular/core';
import { TelegramService } from './shared/services/telegram.service';
import { BrowserDetectorService } from './shared/services/browser-detector.service';
import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'campfire';

  data = {};

  private telegramService = inject(TelegramService);

  private themeService = inject(ThemeService);

  private browserDetectorService = inject(BrowserDetectorService);

  ngOnInit() {
    this.data = decodeURIComponent(JSON.stringify(this.telegramService?.getInitData() || {}, null, 2));
    this.browserDetectorService.detectBrowser();
  }
}
