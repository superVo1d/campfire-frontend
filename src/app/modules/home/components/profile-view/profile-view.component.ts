import { Component, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { UsersInterface } from '../../../../@types/users';
import animations from '../settings/settings-animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
  // animations: [animations]
})
export class ProfileViewComponent {
  @Input() profile: UsersInterface;

  @Input() previewMode = false;

  @Output() clickBackEvent = new EventEmitter();

  // @HostBinding('@openClose')
  // public animationState = 'open';

  // @HostListener('@openClose.done', ['$event'])
  // animationEnded(e: AnimationEvent) {
  //   /* @ts-ignore */
  //   if (e.toState === 'void') {
  //   }
  // }

  constructor(private router: Router) {}

  onClickBack = (): void => {
    this.clickBackEvent?.emit();
  };

  close = () => {
    this.onClickBack();

    if (!this.previewMode) {
      this.router.navigate(['/navigator']);
    }
  };
}
