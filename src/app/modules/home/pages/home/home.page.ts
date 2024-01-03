import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UsersInterface } from '../../../../@types/users';
import { selectUser, selectUsers } from '../../../../core/store';
import { UserInterface } from '../../../../@types/user';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePageComponent {
  private store = inject(Store);

  cards$: Observable<UsersInterface[]> = this.store.select(selectUsers);

  user$: Observable<UserInterface> = this.store.select(selectUser);
}
