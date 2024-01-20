import { Component, EventEmitter, HostBinding, Input, Output, ViewEncapsulation } from '@angular/core';
import { ButtonSizeType, IButtonProps } from '../../../@types/button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements IButtonProps {
  @Input() public text;

  @Input() public iconPath;

  @Input() public href;

  @Input() public type = 'button';

  @Input() public link;

  @Input() public darkMode = false;

  @Output() clickEvent = new EventEmitter();

  @Input() public active;

  @Input() style;

  @Input() public size = ButtonSizeType.normal;

  @HostBinding('class.dark-mode')
  get isDarkTheme(): boolean {
    return this.darkMode;
  }

  @HostBinding('class.active')
  get isClicked(): boolean {
    return this.active;
  }

  @HostBinding('class.fill')
  @Input()
  public fill = false;

  get classNames(): any[] {
    return ['button', this.style || '', this.size && `size-${this.size}`];
  }

  handleClick($event: Event) {
    this.active = !this.active;
    this.clickEvent?.emit($event);
  }
}
