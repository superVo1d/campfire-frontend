import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import { TabsInterface } from '../../../@types/tabs';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import animations from './likes-layout-animations';
import { UsersInterface } from '../../../@types/users';

@Component({
  templateUrl: './likes-layout.component.html',
  styleUrls: ['./likes-layout.component.scss'],
  animations: [animations]
})
export class LikesLayoutComponent implements OnInit, AfterViewInit {
  public tabs: TabsInterface = [
    {
      path: '/likes',
      name: 'Вы понравились'
    },
    {
      path: '/likes/you',
      name: 'Вам понравились'
    }
  ];

  @ViewChild('container') containerEl: ElementRef;

  private router = inject(Router);

  constructor(private changeRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.containerEl.nativeElement.scrollTo({ top: 0, left: 0 });
      }
    });
  }

  ngAfterViewInit(): void {
    this.changeRef.detectChanges();
  }

  public prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
