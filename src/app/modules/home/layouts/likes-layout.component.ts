import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { TabsInterface } from '../../../@types/tabs';
import { RouterOutlet } from '@angular/router';
import animations from './likes-layout-animations';

@Component({
  templateUrl: './likes-layout.component.html',
  styleUrls: ['./likes-layout.component.scss'],
  animations: [animations]
})
export class LikesLayoutComponent implements AfterViewInit {
  public tabs: TabsInterface = [
    {
      path: '/likes',
      name: 'Вас заметили'
    },
    {
      path: '/likes/you',
      name: 'Вы заметили'
    }
  ];

  constructor(private changeRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.changeRef.detectChanges();
  }

  public prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
