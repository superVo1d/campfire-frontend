import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { RouterOutlet } from '@angular/router';
import { NavbarComponentModule } from '../navbar/navbar.module';

@NgModule({
  imports: [
    RouterOutlet,
    NavbarComponentModule,
  ],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class LayoutComponentModule {}
