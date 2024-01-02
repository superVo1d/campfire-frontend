import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Swiper } from 'swiper/types';
import { SwiperContainer } from 'swiper/element';
import * as _ from 'lodash';
import { UsersInterface } from '../../../../@types/users';

@Component({
  selector: 'app-cards-stack',
  templateUrl: './cards-stack.component.html',
  styleUrls: ['./cards-stack.component.scss']
})
export class CardsStackComponent implements AfterViewInit {
  @Input() initialUserId;

  @ViewChild('swiperRef')
  swiperRef!: ElementRef<SwiperContainer>;

  userCards: UsersInterface[];

  @Input() set cards(_cards: UsersInterface[]) {
    this.userCards = _cards;
  }

  private swiper: Swiper;

  get initialSlide() {
    const index = this.userCards.findIndex((card) => card.id === this.initialUserId);

    return index === -1 ? 1 : index;
  }

  cardTitle(card: UsersInterface) {
    return card.firstName + (card.age ? `, ${card.age}` : '');
  }

  ngAfterViewInit(): void {
    this.swiperRef.nativeElement.loop = this.userCards.length >= 3;
    this.swiperRef.nativeElement.initialSlide = this.initialSlide;
    this.swiperRef.nativeElement.initialize();
    this.swiper = this.swiperRef.nativeElement.swiper;
  }
}
