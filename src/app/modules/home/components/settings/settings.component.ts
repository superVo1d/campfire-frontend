import { Component } from '@angular/core';
import { UserInterface } from '../../../../@types/user';
import { data } from '../../../../mocks/user';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  public user: UserInterface = data;
}
