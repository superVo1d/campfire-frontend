import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent, LikesPageComponent, NavigatorPageComponent, UserPageComponent } from './pages';
import { LikesLayoutComponent } from './layouts/likes-layout.component';
import { LikesYouPageComponent } from './pages/likes/you/likes-you.page';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full',
    data: { animation: 0 }
  },
  {
    path: 'navigator',
    children: [
      {
        path: '',
        component: NavigatorPageComponent,
        data: { animation: 1 }
      },
      {
        path: ':userId',
        component: UserPageComponent
      }
    ]
  },
  {
    path: 'likes',
    component: LikesLayoutComponent,
    children: [
      {
        path: '',
        data: { animation: 3 },
        component: LikesPageComponent
      },
      {
        path: 'you',
        data: { animation: 4 },
        component: LikesYouPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
