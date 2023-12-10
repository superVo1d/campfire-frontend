import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('swiperRef')
  swiperRef!: ElementRef<SwiperContainer>;

  cards: UsersInterface[] = data;

  private swiper: Swiper;

  ngAfterViewInit(): void {
    this.swiperRef.nativeElement.initialize();
    this.swiper = this.swiperRef.nativeElement.swiper;
  }
}
