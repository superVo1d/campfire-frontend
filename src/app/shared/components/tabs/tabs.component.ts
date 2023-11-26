import { Component, Input, ViewEncapsulation } from '@angular/core';
import { TabsInterface } from '../../../@types/tabs';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TabsComponent {
  @Input()
  public paths: TabsInterface = [];
}
