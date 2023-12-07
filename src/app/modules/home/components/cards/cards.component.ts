import { Component } from '@angular/core';
import { data } from '../../../../mocks/profiles';
import { ProfileInterface } from '../../../../@types/profile';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  public cards: ProfileInterface[] = data;
}
