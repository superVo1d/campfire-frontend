import { NgModule } from '@angular/core';
import { ButtonComponent } from './button.component';
import { NgIf } from '@angular/common';
import { IconComponentModule } from '../icon/icon.module';

@NgModule({
  imports: [
    NgIf,
    IconComponentModule,
  ],
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
})
export class ButtonComponentModule {}
