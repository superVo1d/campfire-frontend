import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  IconComponent,
  LayoutComponent,
  NavbarComponent,
  ButtonComponent,
  TabsComponent,
  ModalComponent,
  UserpicComponent,
  InputTextComponent
} from './components';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule],
  declarations: [
    ButtonComponent,
    IconComponent,
    LayoutComponent,
    ModalComponent,
    NavbarComponent,
    TabsComponent,
    UserpicComponent,
    InputTextComponent
  ],
  exports: [
    ButtonComponent,
    IconComponent,
    LayoutComponent,
    ModalComponent,
    NavbarComponent,
    TabsComponent,
    UserpicComponent,
    InputTextComponent
  ]
})
export class SharedModule {}
