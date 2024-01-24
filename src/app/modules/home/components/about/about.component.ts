import { Component, inject } from '@angular/core';
import { ButtonStyleType } from '../../../../@types/button';
import { TelegramService } from '../../../../shared/services/telegram.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  ButtonStyleType = ButtonStyleType;

  private telegramService = inject(TelegramService);

  onClick() {
    this.telegramService.openLink('https://campfirebot.online/');
  }
}
