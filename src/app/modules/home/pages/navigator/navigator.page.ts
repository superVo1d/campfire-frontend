import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';

@Component({
  templateUrl: './navigator.page.html',
  styleUrls: ['./navigator.page.scss']
})
export class NavigatorPageComponent {
  public currentUserId: string | null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        mergeMap((route) => route.paramMap)
      )
      .subscribe((params) => {
        if (params.get('userId')) {
          this.currentUserId = params.get('userId');
        }
      });
  }
}
