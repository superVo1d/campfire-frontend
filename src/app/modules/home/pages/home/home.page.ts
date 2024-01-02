import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UsersInterface } from '../../../../@types/users';
import { selectUsers } from '../../../../core/store';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePageComponent {
  private store = inject(Store);

  cards$: Observable<UsersInterface[]> = this.store.select(selectUsers);
}
