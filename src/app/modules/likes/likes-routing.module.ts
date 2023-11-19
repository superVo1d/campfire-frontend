import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LikesPageComponent } from './pages/likes/likes.page';

export const routes: Routes = [
  { path: '', component: LikesPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LikesRoutingModule {}
