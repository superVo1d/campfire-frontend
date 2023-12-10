import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Swiper } from 'swiper/types';
import { SwiperContainer } from 'swiper/element';
import { data } from '../../../../mocks/profiles';
import { UsersInterface } from '../../../../@types/users';

@Component({
  selector: 'app-find-yours',
  templateUrl: './find-yours.component.html',
  styleUrls: ['./find-yours.component.scss']
})
export class FindYoursComponent implements AfterViewInit {
  @ViewChild('swiperRef')
  swiperRef!: ElementRef<SwiperContainer>;

  cards: UsersInterface[] = data;

  private swiper: Swiper;

  ngAfterViewInit(): void {
    this.swiperRef.nativeElement.initialize();
    this.swiper = this.swiperRef.nativeElement.swiper;
  }
}
