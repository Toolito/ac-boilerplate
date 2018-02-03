import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { of } from 'rxjs/observable/of';

import * as toppingsActions from '../actions/toppings.action';
import * as fromServices from '../../services';
import { Effect, Actions } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs/operators';

@Injectable()
export class ToppingsEffects {
  constructor(
    private toppingsService: fromServices.ToppingsService,
    private actions$: Actions
  ) {}

  @Effect()
  loadToppings$ = this.actions$
    .ofType(toppingsActions.LOAD_TOPPINGS)
    .pipe(
      exhaustMap(() =>
        this.toppingsService
          .getToppings()
          .pipe(
            map(toppings => new toppingsActions.LoadToppingsSuccess(toppings)),
            catchError(error => of(new toppingsActions.LoadToppingsFail(error)))
          )
      )
    );
}
