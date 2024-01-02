// noinspection TypeScriptValidateTypes

import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import { loadUserSuccess, UserActions } from './user.actions';

@Injectable()
export class UserEffects {
  private apiService = inject(ApiService);

  private actions$ = inject(Actions);

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.LoadUser),
      exhaustMap(() => {
        return this.apiService.getUser().pipe(
          map((data) => {
            return loadUserSuccess({ user: data });
          })
        );
      })
    )
  );
}
