import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent, LikesPageComponent, LikesYouPageComponent, NavigatorPageComponent } from './pages';
import { LikesLayoutComponent } from './layouts';
import { ModalComponent } from '../../shared/components';
import { SettingsComponent } from './components';

export const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'navigator', component: NavigatorPageComponent },
  {
    path: 'likes',
    component: LikesLayoutComponent,
    children: [
      { path: '', component: LikesPageComponent },
      { path: 'you', component: LikesYouPageComponent }
    ]
  },
  {
    path: 'modal',
    outlet: 'modal',
    component: ModalComponent,
    children: [
      {
        path: 'settings',
        component: SettingsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
