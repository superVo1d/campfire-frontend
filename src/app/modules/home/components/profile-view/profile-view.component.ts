import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProfileInterface } from '../../../../@types/profile';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent {
  @Input() user: ProfileInterface;

  @Output() clickBackEvent = new EventEmitter();

  onClickBack = (): void => {
    this.clickBackEvent?.emit();
  };
}
