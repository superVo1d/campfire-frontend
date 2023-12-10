import { Component, inject } from '@angular/core';
import { data } from '../../../../mocks/profiles';
import { MatchType, UsersInterface } from '../../../../@types/users';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  private _cards: UsersInterface[] = data;

  private listType: MatchType.you | MatchType.your;

  private router = inject(Router);

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.listType = event.url === '/likes' ? MatchType.your : MatchType.you;
      }
    });

    this.listType = this.router.url === '/likes' ? MatchType.your : MatchType.you;
  }

  get cards(): (Pick<UsersInterface, 'id' | 'title' | 'photo'> & { match: boolean })[] {
    return this._cards
      .filter((item) => {
        return item.match && [this.listType, MatchType.mutual].includes(item.match);
      })
      .map((item) => {
        return { ...item, match: item.match === MatchType.mutual };
      });
  }
}
