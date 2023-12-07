import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Swiper } from 'swiper/types';
import { SwiperContainer } from 'swiper/element';
import { data } from '../../../../mocks/profiles';

@Component({
  selector: 'app-cards-stack',
  templateUrl: './cards-stack.component.html',
  styleUrls: ['./cards-stack.component.scss']
})
export class CardsStackComponent implements AfterViewInit {
  @ViewChild('swiperRef')
  swiperRef!: ElementRef<SwiperContainer>;

  cards: { title: string; photo: string; id: string }[] = data;

  private swiper: Swiper;

  ngAfterViewInit(): void {
    this.swiperRef.nativeElement.initialize();
    this.swiper = this.swiperRef.nativeElement.swiper;
  }
}
