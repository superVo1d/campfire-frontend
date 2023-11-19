import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { HomePageComponent } from './pages/home/home.page';
import { StatsComponent } from './components/stats/stats.component';
import { IconComponentModule } from '../../shared/components/icon/icon.module';
import { FindYoursComponent } from './components/findYours/find-yours.component';
import { ButtonComponentModule } from '../../shared/components/button/button.module';
import { AboutComponent } from './components/about/about.component';
import { LayoutComponentModule } from '../../shared/components/layout/layout.module';
import { register } from 'swiper/element/bundle';

register();

@NgModule({
  declarations: [
    FindYoursComponent,
    ProfileComponent,
    HomePageComponent,
    StatsComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IconComponentModule,
    ButtonComponentModule,
    LayoutComponentModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
