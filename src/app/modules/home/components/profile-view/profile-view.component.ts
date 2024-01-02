import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { UsersInterface } from '../../../../@types/users';
import { Router } from '@angular/router';
import { ApiService } from '../../../../core/services/api.service';

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

  constructor(private router: Router) {}

  cardTitle(card: UsersInterface) {
    return card.firstName + (card.lastName || '') + (card.age ? `, ${card.age}` : '');
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
    this.apiService.likeUser(this.profile.id).subscribe((data) => console.log(data.mutual));
  }
}
