import { Component, inject } from '@angular/core';
import { TelegramService } from '../../../../shared/services/telegram.service';
import { ButtonStyleType } from '../../../../@types/button';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {
  ButtonStyleType = ButtonStyleType;

  telegramService = inject(TelegramService);

  handleClick() {
    this.telegramService.close();
  }
}
