import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { IconComponentModule } from '../icon/icon.module';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@NgModule({
  imports: [
    IconComponentModule,
    CommonModule,
    RouterLink,
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
})
export class NavbarComponentModule {
}
