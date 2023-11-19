import { inject, Injectable } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable({
  providedIn: 'root',
})
export class BrowserDetectorService {

  private deviceDetectorService = inject(DeviceDetectorService);

  detectBrowser() {
    const browser = this.deviceDetectorService.browser.toLowerCase();
    const version = this.deviceDetectorService.browser_version.split('.')[0].toLowerCase();

    document.body.classList.add(browser, version);
  }
}
