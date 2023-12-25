import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent, LikesPageComponent, NavigatorPageComponent, UserPageComponent } from './pages';
import { LikesLayoutComponent } from './layouts/likes-layout.component';
import { LikesYouPageComponent } from './pages/likes/you/likes-you.page';
import { HomeComponent } from './home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
        pathMatch: 'full',
        data: { animation: 0 }
      },
      {
        path: 'navigator',
        component: NavigatorPageComponent,
        children: [
          {
            path: ':userId',
            component: UserPageComponent,
            data: { animation: 1 }
          }
        ],
        data: { animation: 1 }
      },
      {
        path: 'likes',
        component: LikesLayoutComponent,
        children: [
          {
            path: '',
            data: { animation: 2 },
            component: LikesPageComponent
          },
          {
            path: 'you',
            data: { animation: 3 },
            component: LikesYouPageComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
