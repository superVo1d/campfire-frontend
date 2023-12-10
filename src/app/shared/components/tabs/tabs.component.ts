import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { TabsInterface } from '../../../@types/tabs';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabsComponent implements OnInit, AfterViewInit {
  @Input()
  public paths: TabsInterface = [];

  @ViewChild('tabs') tabs: ElementRef<HTMLDivElement>;

  @ViewChild('tab') tab: ElementRef<HTMLDivElement>;

  private router = inject(Router);

  public activeTabIndex = 0;

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeTabIndex = this.paths.map((item) => item.path).indexOf(event.url);
        this.switchTab();
      }
    });

    this.activeTabIndex = this.paths.map((item) => item.path).indexOf(this.router.url);
  }

  ngAfterViewInit() {
    this.switchTab();
  }

  switchTab() {
    const tabElement = this.tab.nativeElement;
    const wrapperElement = this.tabs.nativeElement;
    const activeTabElement = wrapperElement.querySelector(`a:nth-child(${this.activeTabIndex + 1})`);

    if (!wrapperElement || !activeTabElement) {
      return;
    }

    const { x: wrapperX } = wrapperElement.getBoundingClientRect();
    const { x: tabX, width: tabWidth } = activeTabElement.getBoundingClientRect();

    tabElement.style.width = `${tabWidth}px`;
    tabElement.style.left = `${tabX - wrapperX}px`;
  }
}
