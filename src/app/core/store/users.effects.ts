// noinspection TypeScriptValidateTypes

import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import { likeUserSuccess, loadUsersSuccess, UsersActions } from './users.actions';

@Injectable()
export class UsersEffects {
  private apiService = inject(ApiService);

  private actions$ = inject(Actions);

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.LoadUsers),
      exhaustMap(() => {
        return this.apiService.getUsers().pipe(
          map((data) => {
            return loadUsersSuccess({ users: data });
          })
        );
      })
    )
  );

  likeUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.LikeUser),
      switchMap((action) => {
        return this.apiService.likeUser(action.id).pipe(
          map((data) => {
            console.log(data.mutual);
            return likeUserSuccess({ id: action.id });
          })
        );
      })
    )
  );
}
