import { Component } from '@angular/core';
import { UserInterface } from '../../../../@types/user';
import { data } from '../../../../mocks/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  public user: UserInterface = data;
}
