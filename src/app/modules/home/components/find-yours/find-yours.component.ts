import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Swiper } from 'swiper/types';
import { SwiperContainer } from 'swiper/element';
import { UsersInterface } from '../../../../@types/users';
import { UserInterface } from '../../../../@types/user';
import { ButtonStyleType } from '../../../../@types/button';

@Component({
  selector: 'app-find-yours',
  templateUrl: './find-yours.component.html',
  styleUrls: ['./find-yours.component.scss']
})
export class FindYoursComponent implements AfterViewInit {
  ButtonStyleType = ButtonStyleType;

  @ViewChild('swiper')
  swiper!: ElementRef<SwiperContainer>;

  userCards: UsersInterface[];

  @Input() user: UserInterface;

  @Input() set cards(_cards: UsersInterface[]) {
    this.userCards = _cards;
  }

  cardTitle(card: UsersInterface) {
    return card.firstName + (card.age ? `, ${card.age}` : '');
  }

  ngAfterViewInit(): void {
    this.swiper.nativeElement.loop = this.userCards.length >= 3;
    this.swiper.nativeElement.initialize();
  }
}
