import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Swiper, SwiperOptions } from 'swiper/types';
import { SwiperContainer } from 'swiper/element';

const slidesData = [
  {
    title: 'Миша, 16',
    photo: '/assets/media/mocks/mock-photo-1.png',
  },
  {
    title: 'Аня, 17',
    photo: '/assets/media/mocks/mock-photo-2.png',
  },
  {
    title: 'Лена, 32',
    photo: '/assets/media/mocks/mock-photo-3.png',
  },
  {
    title: 'Женя, 33',
    photo: '/assets/media/mocks/mock-photo-4.png',
  },
  {
    title: 'Лена, 25',
    photo: '/assets/media/mocks/mock-photo-5.png',
  },
  {
    title: 'Катя, 24',
    photo: '/assets/media/mocks/mock-photo-6.png',
  },
];

@Component({
  selector: 'app-find-yours',
  templateUrl: './find-yours.component.html',
  styleUrls: ['./find-yours.component.scss'],
})
export class FindYoursComponent implements AfterViewInit {
  @ViewChild('swiperRef')
    swiperRef!: ElementRef<SwiperContainer>;

  slides: { title: string; photo: string; }[] = slidesData;

  private swiper: Swiper;

  ngAfterViewInit(): void {
    this.swiperRef.nativeElement.initialize();
    this.swiper = this.swiperRef.nativeElement.swiper;
  }
}
