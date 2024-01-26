import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { UsersInterface } from '../../../../@types/users';
import { likeUser } from '../../../../core/store/users.actions';
import { Store } from '@ngrx/store';
import { ButtonSizeType, ButtonStyleType } from '../../../../@types/button';
import { TelegramService } from '../../../../shared/services/telegram.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit, AfterViewInit, OnDestroy {
  ButtonSizeType = ButtonSizeType;

  ButtonStyleType = ButtonStyleType;

  @ViewChild('card') card!: ElementRef;

  @Input() userCard: UsersInterface;

  @Output() swipeEvent = new EventEmitter<HammerInput>();

  @Output() panEvent = new EventEmitter<HammerInput>();

  @ViewChild('cardDescription') cardDescription: ElementRef<HTMLParagraphElement>;

  public matchVisible = false;

  private store = inject(Store);

  private router = inject(Router);

  private telegramService = inject(TelegramService);

  private cd = inject(ChangeDetectorRef);

  public description: string;

  private el = ElementRef;

  get title() {
    return this.userCard.workingName + (this.userCard.age ? `, ${this.userCard.age}` : '');
  }

  updateDescription(): void {
    const cardHeight = this.card.nativeElement.clientHeight;

    let length;

    if (cardHeight > 580) {
      length = 300;
    } else if (cardHeight > 490) {
      length = 200;
    } else if (cardHeight > 400) {
      length = 150;
    } else {
      length = 105;
    }

    const linebreaksTrimmed = this.userCard.about?.split('\n\n').slice(0, 2).join('\n\n');

    this.description = linebreaksTrimmed
      ? linebreaksTrimmed?.length > length + 3
        ? linebreaksTrimmed?.slice(0, length) + '...'
        : linebreaksTrimmed
      : '';

    this.cd.detectChanges();
  }

  ngOnInit(): void {
    window.addEventListener('resize', () => this.updateDescription());
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', () => this.updateDescription());
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.updateDescription();
    }, 0);
  }

  like($event: Event): void {
    $event.preventDefault();
    $event.stopPropagation();

    this.store.dispatch(likeUser({ id: this.userCard.id }));

    if (this.userCard.likesYou && !this.userCard.like) {
      this.matchVisible = true;
    }
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

  closeMatchPopup() {
    this.matchVisible = false;
  }
}
