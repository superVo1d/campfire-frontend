import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Swiper } from 'swiper/types';
import { SwiperContainer } from 'swiper/element';
import { UsersInterface } from '../../../../@types/users';
import * as _ from 'lodash';
import { UserInterface } from '../../../../@types/user';

@Component({
  selector: 'app-find-yours',
  templateUrl: './find-yours.component.html',
  styleUrls: ['./find-yours.component.scss']
})
export class FindYoursComponent implements AfterViewInit {
  @ViewChild('swiperRef')
  swiperRef!: ElementRef<SwiperContainer>;

  userCards: UsersInterface[];

  @Input() user: UserInterface;

  @Input() set cards(_cards: UsersInterface[]) {
    this.userCards = _cards;
  }

  private swiper: Swiper;

  cardTitle(card: UsersInterface) {
    return card.firstName + (card.age ? `, ${card.age}` : '');
  }

  ngAfterViewInit(): void {
    this.swiperRef.nativeElement.loop = this.userCards.length >= 3;
    this.swiperRef.nativeElement.initialize();
    this.swiper = this.swiperRef.nativeElement.swiper;
  }
}
