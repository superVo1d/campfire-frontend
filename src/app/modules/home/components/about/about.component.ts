import { Component } from '@angular/core';
import { ButtonStyleType } from '../../../../@types/button';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  ButtonStyleType = ButtonStyleType;
}
