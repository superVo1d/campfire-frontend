import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { HomePageComponent } from './pages/home/home.page';
import { StatsComponent } from './components/stats/stats.component';
import { FindYoursComponent } from './components/findYours/find-yours.component';
import { AboutComponent } from './components/about/about.component';
import { register } from 'swiper/element/bundle';
import { SharedComponentsModule } from '../../shared/shared.module';
import { LikesPageComponent } from './pages/likes/index/index.page';
import { NavigatorPageComponent } from './pages/navigator/navigator.page';
import { LikesLayoutComponent } from './layouts/likes-layout.component';
import { LikesYouPageComponent } from './pages/likes/you/you.page';
import { CardsComponent } from './components/cards/cards.component';
import { CardsStackComponent } from './components/cardsStack/cards-stack.component';

register();

@NgModule({
  declarations: [
    FindYoursComponent,
    ProfileComponent,
    HomePageComponent,
    StatsComponent,
    AboutComponent,
    LikesLayoutComponent,
    LikesPageComponent,
    LikesYouPageComponent,
    NavigatorPageComponent,
    CardsComponent,
    CardsStackComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedComponentsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
