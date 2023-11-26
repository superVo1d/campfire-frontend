import { Component } from '@angular/core';
import { data } from '../../../../mocks/profiles';

type CardsInterface = {
  title: string;
  photo: string;
  match: boolean;
}[];

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  public cards: CardsInterface = data;
}
