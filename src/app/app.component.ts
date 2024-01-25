import { Component, inject, OnInit, isDevMode } from '@angular/core';
import { TelegramService } from './shared/services/telegram.service';
import { BrowserDetectorService } from './shared/services/browser-detector.service';
import { ThemeService } from './shared/services/theme.service';
import { ApiService } from './core/services/api.service';
import { Store } from '@ngrx/store';
import { loadUser } from './core/store/user.actions';
import { loadUsers } from './core/store/users.actions';
import { initDataMock } from './mocks/telegram';
import { Observable } from 'rxjs';
import { isLoading } from './core/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'campfire';

  private telegramService = inject(TelegramService);

  private browserDetectorService = inject(BrowserDetectorService);

  private store = inject(Store);

  private apiService = inject(ApiService);

  isLoading$: Observable<boolean> = this.store.select(isLoading);

  private theme = inject(ThemeService);

  ngOnInit() {
    this.browserDetectorService.detectBrowser();

    this.telegramService.expand();
    this.telegramService.enableClosingConfirmation();
    document.documentElement.style.setProperty('--vh', (this.telegramService.viewportHeight / 100).toString() + 'px');

    this.telegramService.onEvent('viewportChanged', () => {
      this.telegramService.expand();
      document.documentElement.style.setProperty('--vh', (this.telegramService.viewportHeight / 100).toString() + 'px');
    });

    const initData = isDevMode() ? initDataMock : this.telegramService.initData;

    this.apiService.auth(initData).subscribe(() => {
      this.store.dispatch(loadUser());
      this.store.dispatch(loadUsers());
    });

    this.isLoading$.subscribe(() => this.telegramService.ready());
  }
}
