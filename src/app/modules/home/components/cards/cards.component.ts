import { Component, inject, Input, OnInit } from '@angular/core';
import { data } from '../../../../mocks/profiles';
import { MatchType, UsersInterface } from '../../../../@types/users';
import { NavigationEnd, Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  private _cards: UsersInterface[] = data;

  private listType: MatchType.you | MatchType.your;

  private router = inject(Router);

  @Input() set cards(_cards: UsersInterface[]) {
    this._cards = _cards.length < 3 ? _.flatten(Array(2).fill(_cards)) : _cards;
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.listType = event.url === '/likes' ? MatchType.your : MatchType.you;
      }
    });

    this.listType = this.router.url === '/likes' ? MatchType.your : MatchType.you;
  }

  cardTitle(card) {
    return card.firstName + ', ' + card.age;
  }

  get userCards() {
    return this._cards
      .filter((item) => {
        return item.match && [this.listType, MatchType.mutual].includes(item.match);
      })
      .map((item) => {
        return { ...item, match: item.match === MatchType.mutual };
      });
  }
}
