import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isLoading, selectUser } from '../../core/store';
import { UserInterface } from '../../@types/user';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private store = inject(Store);

  isLoading$: Observable<boolean> = this.store.select(isLoading);

  user$: Observable<UserInterface> = this.store.select(selectUser);
}
