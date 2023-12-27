import { AfterViewInit, Component, ElementRef, HostBinding, inject, Input, OnInit, ViewChild } from '@angular/core';
import { TabsInterface } from '../../../@types/tabs';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TelegramService } from '../../services/telegram.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, AfterViewInit {
  @Input()
  public paths: TabsInterface = [];

  @ViewChild('tabs') tabs: ElementRef<HTMLDivElement>;

  @ViewChild('tab') tab: ElementRef<HTMLDivElement>;

  @HostBinding('class.navbar') @Input() navbar;

  private router = inject(Router);

  private telegramService = inject(TelegramService);

  public activeTabIndex = 0;

  private firstRender = true;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeTabIndex = this.getActiveTabIndex(event.url);
        this.switchTab();
      }
    });

    this.activeTabIndex = this.getActiveTabIndex(this.router.url);
  }

  ngAfterViewInit() {
    this.switchTab();
  }

  getActiveTabIndex = (url: string): number => {
    const flag = false;
    let index = 0;
    let counter = 0;

    while (!flag && counter < this.paths.length) {
      const { root = false, path } = this.paths[counter];

      if (root && url === '/') {
        index = counter;
        break;
      }

      if (url.startsWith(path)) {
        index = counter;
      }

      counter += 1;
    }

    // console.log(url, this.paths[index]);

    return index;
  };

  switchTab() {
    const tabElement = this.tab.nativeElement;
    const wrapperElement = this.tabs.nativeElement;
    const activeTabElement = wrapperElement.querySelector(`a:nth-child(${this.activeTabIndex + 1})`);

    if (!wrapperElement || !activeTabElement) {
      return;
    }

    if (this.firstRender) {
      this.firstRender = false;
    } else {
      this.telegramService.haptic?.impactOccurred('medium');
    }

    const { x: wrapperX } = wrapperElement.getBoundingClientRect();
    const { x: tabX, width: tabWidth } = activeTabElement.getBoundingClientRect();

    tabElement.style.width = `${tabWidth}px`;
    tabElement.style.left = `${tabX - wrapperX}px`;
  }
}
