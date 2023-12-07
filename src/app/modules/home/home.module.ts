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
import { SharedComponentsModule } from '../../shared/shared.module';
import { LikesLayoutComponent } from './layouts';
import {
  HomePageComponent,
  LikesPageComponent,
  LikesYouPageComponent,
  NavigatorPageComponent,
  UserPageComponent
} from './pages';
import { ReactiveFormsModule } from '@angular/forms';

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
    SettingsComponent,
    ProfileViewComponent,
    UserPageComponent
  ],
  imports: [CommonModule, HomeRoutingModule, SharedComponentsModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {}
