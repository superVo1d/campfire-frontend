import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { UsersInterface } from '../../../../@types/users';
import { likeUser } from '../../../../core/store/users.actions';
import { Store } from '@ngrx/store';
import { ButtonSizeType, ButtonStyleType } from '../../../../@types/button';
import { TelegramService } from '../../../../shared/services/telegram.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  ButtonSizeType = ButtonSizeType;

  ButtonStyleType = ButtonStyleType;

  @ViewChild('card') card!: ElementRef;

  @Input() userCard: UsersInterface;

  @Output() swipeEvent = new EventEmitter<HammerInput>();

  @Output() panEvent = new EventEmitter<HammerInput>();

  @Input() maxLength = 105;

  private store = inject(Store);

  private telegramService = inject(TelegramService);

  get title() {
    return this.userCard.firstName + (this.userCard.age ? `, ${this.userCard.age}` : '');
  }

  get description() {
    return (
      this.userCard.about &&
      (this.userCard.about?.length > this.maxLength + 3
        ? this.userCard.about?.slice(0, this.maxLength) + '...'
        : this.userCard.about)
    );
  }

  like($event: Event): void {
    $event.preventDefault();
    $event.stopPropagation();

    this.store.dispatch(likeUser({ id: this.userCard.id }));
  }

  openChat($event: Event): void {
    $event.preventDefault();
    $event.stopPropagation();

    if (this.userCard?.nickname) {
      this.telegramService.openTelegramChat(this.userCard.nickname);
    }
  }

  onSwipe($event: Event): void {
    this.swipeEvent.emit(Object.assign($event as unknown as HammerInput, { target: this.card.nativeElement }));
  }

  onPan($event: Event): void {
    this.panEvent.emit(Object.assign($event as unknown as HammerInput, { target: this.card.nativeElement }));
  }
}
