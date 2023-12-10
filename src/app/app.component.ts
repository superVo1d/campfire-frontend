import { Component, inject, OnInit } from '@angular/core';
import { TelegramService } from './shared/services/telegram.service';
import { BrowserDetectorService } from './shared/services/browser-detector.service';
import { ThemeService } from './shared/services/theme.service';
import { ApiService } from './core/services/api.service';

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

    this.apiService.getUser(this.telegramService.initData).subscribe((data) => {
      console.log(data);
    });
  }
}
