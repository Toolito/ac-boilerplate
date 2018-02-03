import { Action } from '@ngrx/store';

export const LOAD_TOPPINGS = '[Feature] Load toppings';
export const LOAD_TOPPINGS_FAIL = '[Feature] Load toppings failed';
export const LOAD_TOPPINGS_SUCCESS = '[Feature] Load toppings success';


export class LoadToppings implements Action {
  readonly type = LOAD_TOPPINGS;
}
export class LoadToppingsSuccess implements Action {
  readonly type = LOAD_TOPPINGS_SUCCESS;
  constructor(public payload: any) {}
}
export class LoadToppingsFail implements Action {
  readonly type = LOAD_TOPPINGS_FAIL;
  constructor(public payload: any) {}
}


// action types
export type ToppingsAction = LoadToppings | LoadToppingsSuccess | LoadToppingsFail;
