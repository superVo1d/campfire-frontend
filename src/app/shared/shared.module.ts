import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { NumbersOnlyDirective } from './directives';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  declarations: [
    ButtonComponent,
    IconComponent,
    LayoutComponent,
    ModalComponent,
    NavbarComponent,
    TabsComponent,
    UserpicComponent,
    InputTextComponent,
    NumbersOnlyDirective
  ],
  exports: [
    ButtonComponent,
    IconComponent,
    LayoutComponent,
    ModalComponent,
    NavbarComponent,
    TabsComponent,
    UserpicComponent,
    InputTextComponent,
    NumbersOnlyDirective
  ]
})
export class SharedModule {}
