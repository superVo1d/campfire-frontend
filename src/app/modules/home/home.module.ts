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
import { HomeComponent } from './home.component';
import { SettingsPageComponent } from './pages/settings/settings.page';

register();

@NgModule({
  declarations: [
    HomeComponent,
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
    SettingsPageComponent,
    ProfileViewComponent,
    UserPageComponent,
    LikesLayoutComponent,
    LikesYouPageComponent
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {}
