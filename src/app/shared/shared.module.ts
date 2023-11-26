import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './components/icon/icon.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';
import { RouterModule } from '@angular/router';
import { TabsComponent } from './components/tabs/tabs.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    ButtonComponent,
    IconComponent,
    LayoutComponent,
    NavbarComponent,
    TabsComponent,
  ],
  exports: [
    ButtonComponent,
    IconComponent,
    LayoutComponent,
    NavbarComponent,
    TabsComponent,
  ],
})
export class SharedComponentsModule {}
