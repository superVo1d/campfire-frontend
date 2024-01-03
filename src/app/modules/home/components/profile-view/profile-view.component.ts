import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { UsersInterface } from '../../../../@types/users';
import { Router } from '@angular/router';
import { ApiService } from '../../../../core/services/api.service';
import { Store } from '@ngrx/store';
import { likeUser } from '../../../../core/store/users.actions';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent {
  @Input() profile: UsersInterface;

  @Input() previewMode = false;

  @Output() clickBackEvent = new EventEmitter();

  private apiService = inject(ApiService);

  private store = inject(Store);

  constructor(private router: Router) {}

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
    }
  };

  like() {
    this.store.dispatch(likeUser({ id: this.profile.id }));
    // this.apiService.likeUser(this.profile.id).subscribe((data) => console.log(data.mutual));
  }
}
