import { Component, ElementRef, inject, Input, OnInit, ViewChild } from '@angular/core';
import { usersMock } from '../../../../mocks/profiles';
import { UsersInterface } from '../../../../@types/users';
import { NavigationEnd, Router } from '@angular/router';
import { ButtonStyleType } from '../../../../@types/button';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  ButtonStyleType = ButtonStyleType;

  private _cards: UsersInterface[] = usersMock;

  private displayYouLike: boolean;

  private router = inject(Router);

  @Input() set cards(_cards: UsersInterface[]) {
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
    return card.workingName + (card.age ? `, ${card.age}` : '');
  }

  get userCards() {
    return this._cards.filter((item) => {
      return this.displayYouLike ? item.like : item.likesYou;
    });
  }
}
