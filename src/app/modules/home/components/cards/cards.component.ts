import { Component, inject, Input, OnInit } from '@angular/core';
import { data } from '../../../../mocks/profiles';
import { UsersInterface } from '../../../../@types/users';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  private _cards: UsersInterface[] = data;

  private displayYouLike: boolean;

  private router = inject(Router);

  @Input() set cards(_cards: UsersInterface[]) {
    console.log(_cards);
    this._cards = _cards;
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.displayYouLike = event.url !== '/likes';
      }
    });

    this.displayYouLike = this.router.url !== '/likes';
  }

  cardTitle(card) {
    return card.firstName + (card.age ? `, ${card.age}` : '');
  }

  get userCards() {
    return this._cards.filter((item) => {
      return this.displayYouLike ? item.like : item.likesYou;
    });
  }
}
