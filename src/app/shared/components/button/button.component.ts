import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { ButtonStyleType, ButtonSizeType } from '../../../@types/button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() public text?: string;

  @Input() public iconPath?: string;

  @Input() public href?: string;

  @Input() public type?: string;

  @Input() public onClick?: () => void;

  @Input() public link: string | any[] | null | undefined;

  @Input() public darkMode = false;

  @Output() clickEvent = new EventEmitter();

  @HostBinding('class.dark-mode') @Input() isDarkTheme = false;

  @HostBinding('class.active') @Input() isClicked = false;

  @Input() style: ButtonStyleType;

  @Input() size: ButtonSizeType;

  get classNames(): any[] {
    return ['button', this.style, { [`size-${this.size}`]: this.size }];
  }

  handleClick($event: Event) {
    this.isClicked = true;

    this.clickEvent?.emit();

    if (this.onClick) {
      $event.preventDefault();
      this.onClick();
    }
  }
}
