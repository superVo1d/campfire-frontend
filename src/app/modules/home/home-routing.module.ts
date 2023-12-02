import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home.page';
import { LikesPageComponent } from './pages/likes/index/index.page';
import { NavigatorPageComponent } from './pages/navigator/navigator.page';
import { LikesYouPageComponent } from './pages/likes/you/you.page';
import { LikesLayoutComponent } from './layouts/likes-layout.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'navigator', component: NavigatorPageComponent },
  {
    path: 'likes',
    component: LikesLayoutComponent,
    children: [
      { path: '', component: LikesPageComponent },
      { path: 'you', component: LikesYouPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
