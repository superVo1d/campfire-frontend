import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersInterface } from '../../../../@types/users';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent {
  @Input() profile: UsersInterface;

  @Output() clickBackEvent = new EventEmitter();

  onClickBack = (): void => {
    this.clickBackEvent?.emit();
  };
}
