import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UsersInterface } from '../../../../../@types/users';
import { selectUsers } from '../../../../../core/store';

@Component({
  templateUrl: './likes-you.page.html',
  styleUrls: ['./likes-you.page.scss'],
  selector: 'app-likes-you-page'
})
export class LikesYouPageComponent {
  private store = inject(Store);

  cards$: Observable<UsersInterface[]> = this.store.select(selectUsers);
}
