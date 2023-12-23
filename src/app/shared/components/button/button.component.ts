import { Component, HostBinding, Input } from '@angular/core';

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

  @HostBinding('class.dark-mode') @Input() isDarkTheme = false;

  @HostBinding('class.active') @Input() isClicked = false;

  handleClick($event: Event) {
    this.isClicked = true;

    if (this.onClick) {
      $event.preventDefault();
      this.onClick();
    }
  }
}
