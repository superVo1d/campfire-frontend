import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import {
  AboutComponent,
  CardsComponent,
  CardsStackComponent,
  ProfileComponent,
  SettingsComponent,
  StatsComponent,
  FindYoursComponent,
  ProfileViewComponent
} from './components';
import { register } from 'swiper/element/bundle';
import { SharedModule } from '../../shared/shared.module';
import { HomePageComponent, LikesPageComponent, NavigatorPageComponent, UserPageComponent } from './pages';
import { ReactiveFormsModule } from '@angular/forms';
import { LikesLayoutComponent } from './layouts/likes-layout.component';
import { LikesYouPageComponent } from './pages/likes/you/likes-you.page';

register();

@NgModule({
  declarations: [
    FindYoursComponent,
    ProfileComponent,
    HomePageComponent,
    StatsComponent,
    AboutComponent,
    LikesPageComponent,
    NavigatorPageComponent,
    CardsComponent,
    CardsStackComponent,
    SettingsComponent,
    ProfileViewComponent,
    UserPageComponent,
    LikesLayoutComponent,
    LikesYouPageComponent
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {}
