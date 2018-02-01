import { Action } from '@ngrx/store';

import { Pizza } from '../../models/pizza.model';

export const LOAD_PIZZA = '[Feature] Load pizza';
export const LOAD_PIZZA_FAIL = '[FAIL] Pizza not loaded';
export const LOAD_PIZZA_SUCCESS = '[SUCCESS] Pizza loaded successfully';


export class LoadPizzas implements Action {
  readonly type = LOAD_PIZZA;
  constructor(public payload: any) {}
}

export class LoadPizzasFail implements Action {
  readonly type = LOAD_PIZZA_FAIL;
  constructor(public payload: any) {}
}

export class LoadPizzasSuccess implements Action {
  readonly type = LOAD_PIZZA_SUCCESS;
  constructor(public payload: Pizza[]) {  }
}

// action types
export type PizzasAction = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess;
