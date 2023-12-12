import { Component } from '@angular/core';
import { TabsInterface } from '../../../@types/tabs';

const paths = [
  {
    root: true,
    path: '',
    iconPath: 'assets/media/icons/home.svg'
  },
  {
    path: '/navigator',
    iconPath: 'assets/media/icons/compass.svg'
  },
  {
    path: '/likes',
    iconPath: 'assets/media/icons/like.svg'
  }
];

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public paths: TabsInterface = paths;
}
