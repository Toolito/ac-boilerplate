import { LOAD_PIZZA } from "./../actions/pizzas.action";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { of } from "rxjs/observable/of";
import { Effect, Actions } from "@ngrx/effects";

import * as pizzaActions from "../actions/pizzas.action";
import * as fromServices from "../../services";
import { LoadPizzas } from "src/products/store";
import { map, catchError, exhaustMap, tap } from "rxjs/operators";

@Injectable()
export class PizzasEffects {
  constructor(
    private router: Router,
    private pizzaService: fromServices.PizzasService,
    private actions$: Actions
  ) {}

  @Effect()
  loadPizzas$ = this.actions$.ofType(pizzaActions.LOAD_PIZZA).pipe(
    map((action: pizzaActions.LoadPizzas) => action.payload),
    exhaustMap(pizza => {
      return this.pizzaService
        .createPizza(pizza)
        .pipe(
          map(pizza => new pizzaActions.LoadPizzasSuccess([pizza])),
          catchError(error => of(new pizzaActions.LoadPizzasFail(error)))
        );
    })
  );
}


// this.router.navigateByUrl('/products', {});