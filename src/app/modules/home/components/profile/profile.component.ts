import { Component, inject } from '@angular/core';
import { UserInterface } from '../../../../@types/user';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUser } from '../../../../core/store';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  private store = inject(Store);

  user$: Observable<UserInterface> = this.store.select(selectUser);
}
