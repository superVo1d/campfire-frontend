import { Component, Input } from '@angular/core';
import { UserInterface } from '../../../../@types/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  @Input() user: UserInterface;
}
