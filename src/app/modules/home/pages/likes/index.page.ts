import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UsersInterface } from '../../../../@types/users';
import { selectUsers } from '../../../../core/store';

@Component({
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss']
})
export class LikesPageComponent {
  private store = inject(Store);

  cards$: Observable<UsersInterface[]> = this.store.select(selectUsers);
}
