import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Swiper } from 'swiper/types';
import { SwiperContainer } from 'swiper/element';
import { data } from '../../../../mocks/profiles';
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

  cards: UsersInterface[] = data;

  private swiper: Swiper;

  get initialSlide() {
    const index = this.cards.findIndex((card) => card.id === this.initialUserId);

    return index === -1 ? 1 : index;
  }

  ngAfterViewInit(): void {
    this.swiperRef.nativeElement.initialSlide = this.initialSlide;
    this.swiperRef.nativeElement.initialize();
    this.swiper = this.swiperRef.nativeElement.swiper;
  }
}
