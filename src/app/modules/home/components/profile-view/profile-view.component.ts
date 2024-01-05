import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { UsersInterface } from '../../../../@types/users';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { likeUser } from '../../../../core/store/users.actions';
import { TelegramService } from '../../../../shared/services/telegram.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent {
  @Input() profile: UsersInterface;

  @Input() previewMode = false;

  @Output() clickBackEvent = new EventEmitter();

  private store = inject(Store);

  constructor(
    private router: Router,
    private telegramService: TelegramService
  ) {
    this.telegramService.setBackButton(() => {
      this.close();
    });
  }

  get liked() {
    return this.profile.like;
  }

  get cardTitle() {
    return this.profile.firstName + (this.profile.lastName || '') + (this.profile.age ? `, ${this.profile.age}` : '');
  }

  onClickBack = (): void => {
    this.clickBackEvent?.emit();
  };

  close = () => {
    this.onClickBack();

    if (!this.previewMode) {
      this.router.navigate(['/navigator']);
    } else {
      this.router.navigate(['/settings']);
    }
  };

  like() {
    this.store.dispatch(likeUser({ id: this.profile.id }));
  }
}
