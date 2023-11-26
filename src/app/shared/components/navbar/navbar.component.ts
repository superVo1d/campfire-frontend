import { Component, ViewEncapsulation } from '@angular/core';

const paths = [
  {
    path: '',
    icon: 'assets/media/icons/home.svg',
  },
  {
    path: 'navigator',
    icon: 'assets/media/icons/compass.svg',
  },
  {
    path: 'likes',
    icon: 'assets/media/icons/like.svg',
  },
];

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent {
  public paths: { path: string; icon: string; }[] = paths;
}
