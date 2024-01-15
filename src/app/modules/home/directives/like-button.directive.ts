import { Directive, Host, Input, OnChanges, Optional, Self } from '@angular/core';
import { ButtonComponent } from '../../../shared/components';
import { ButtonSizeType, ButtonStyleType } from '../../../@types/button';
import { UsersInterface } from '../../../@types/users';

@Directive({
  selector: '[appLikeButton]'
})
export class LikeButtonDirective implements OnChanges {
  @Input('appLikeButton') user: UsersInterface;

  constructor(@Host() @Self() @Optional() private _button: ButtonComponent) {
    _button.style = ButtonStyleType.primary;
    _button.size = ButtonSizeType.large;
    _button.iconPath = this.iconPath;
  }

  get iconPath(): string {
    const isMutual = this.user?.like && this.user?.likesYou;

    return 'assets/media/icons/' + (isMutual ? 'match.png' : this.user?.like ? 'starFilled.png' : 'star.png');
  }

  ngOnChanges() {
    this._button.iconPath = this.iconPath;
  }
}
