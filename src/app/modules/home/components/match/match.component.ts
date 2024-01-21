import { Component, EventEmitter, HostBinding, inject, Input, Output, ViewEncapsulation } from '@angular/core';
import { UserInterface } from '../../../../@types/user';
import { UsersInterface } from '../../../../@types/users';
import { ButtonStyleType } from '../../../../@types/button';
import { TelegramService } from '../../../../shared/services/telegram.service';
import { Observable } from 'rxjs';
import { selectUser } from '../../../../core/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent {
  ButtonStyleType = ButtonStyleType;

  @Input() secondUser: UsersInterface;

  @Output() closeEvent = new EventEmitter();

  private telegramService = inject(TelegramService);

  private store = inject(Store);

  user$: Observable<UserInterface> = this.store.select(selectUser);

  close($event: Event) {
    $event.preventDefault();
    $event.stopPropagation();
    this.closeEvent.emit();
  }

  openChat($event: Event) {
    $event.preventDefault();
    $event.stopPropagation();
    this.telegramService.openTelegramChat(this.secondUser.nickname);
  }
}
