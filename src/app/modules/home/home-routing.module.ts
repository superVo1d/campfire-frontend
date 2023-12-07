import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  HomePageComponent,
  LikesPageComponent,
  LikesYouPageComponent,
  NavigatorPageComponent,
  UserPageComponent
} from './pages';
import { LikesLayoutComponent } from './layouts';

export const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  {
    path: 'navigator',
    children: [
      {
        path: '',
        component: NavigatorPageComponent
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
      { path: '', component: LikesPageComponent },
      { path: 'you', component: LikesYouPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
