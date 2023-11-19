import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikesRoutingModule } from './likes-routing.module';
import { LikesPageComponent } from './pages/likes/likes.page';

@NgModule({
  declarations: [
    LikesPageComponent,
  ],
  imports: [
    CommonModule,
    LikesRoutingModule,
  ],
})
export class LikesModule {}
