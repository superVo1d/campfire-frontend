import { Component } from '@angular/core';
import { TabsInterface } from '../../../@types/tabs';

@Component({
  selector: 'app-likes-layout',
  templateUrl: './likes-layout.component.html',
  styleUrls: ['./likes-layout.component.scss'],
})
export class LikesLayoutComponent {
  public paths: TabsInterface = [
    {
      path: '/likes',
      name: 'Вас заметили',
    },
    {
      path: '/likes/you',
      name: 'Вы заметили',
    },
  ];
}
