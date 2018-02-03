import { Action } from "@ngrx/store";

import { Pizza } from "../../models/pizza.model";

// load
export const LOAD_PIZZA = "[Feature] Load pizza";
export const LOAD_PIZZA_FAIL = "[FAIL] Pizza not loaded";
export const LOAD_PIZZA_SUCCESS = "[SUCCESS] Pizza loaded successfully";

export class LoadPizzas implements Action {
  readonly type = LOAD_PIZZA;
}

export class LoadPizzasFail implements Action {
  readonly type = LOAD_PIZZA_FAIL;
  constructor(public payload: any) {}
}

export class LoadPizzasSuccess implements Action {
  readonly type = LOAD_PIZZA_SUCCESS;
  constructor(public payload: Pizza[]) {}
}

// create
export const CREATE_PIZZA = "[Feature] Create pizza";
export const CREATE_PIZZA_FAIL = "[Feature] Create pizza failed";
export const CREATE_PIZZA_SUCCESS = "[Feature] Create pizza successfully";

export class CreatePizza implements Action {
  readonly type = CREATE_PIZZA;
  constructor(public payload: Pizza) {}
}

export class CreatePizzaFail implements Action {
  readonly type = CREATE_PIZZA_FAIL;
  constructor(public payload: Pizza) {}
}

export class CreatePizzaSuccess implements Action {
  readonly type = CREATE_PIZZA_SUCCESS;
  constructor(public payload: Pizza) {}
}

// Update
export const UPDATE_PIZZA = "[Feature] Update pizza";
export const UPDATE_PIZZA_FAIL = "[Feature] Update pizza failed";
export const UPDATE_PIZZA_SUCCESS = "[Feature] Update pizza successfully";

export class UpdatePizza implements Action {
  readonly type = UPDATE_PIZZA;
  constructor(public payload: Pizza) {}
}

export class UpdatePizzaSuccess implements Action {
  readonly type = UPDATE_PIZZA_SUCCESS;
  constructor(public payload: Pizza) {}
}

export class UpdatePizzaFail implements Action {
  readonly type = UPDATE_PIZZA_FAIL;
  constructor(public payload: Pizza) {}
}

// remove
export const REMOVE_PIZZA = "[Feature] REMOVE pizza";
export const REMOVE_PIZZA_FAIL = "[Feature] REMOVE pizza failed";
export const REMOVE_PIZZA_SUCCESS = "[Feature] REMOVE pizza successfully";

export class RemovePizza implements Action {
  readonly type = REMOVE_PIZZA;
  constructor(public payload: Pizza) {}
}

export class RemovePizzaSuccess implements Action {
  readonly type = REMOVE_PIZZA_SUCCESS;
  constructor(public payload: Pizza) {}
}

export class RemovePizzaFail implements Action {
  readonly type = REMOVE_PIZZA_FAIL;
  constructor(public payload: Pizza) {}
}

// select
export const SELECT_PIZZA = "[Feature] Pizza selected";

export class SelectPizza implements Action {
  readonly type = SELECT_PIZZA;
  constructor(public payload: Pizza) {}
}

// action types
export type PizzasAction =
  | LoadPizzas
  | LoadPizzasFail
  | LoadPizzasSuccess
  | CreatePizza
  | CreatePizzaFail
  | CreatePizzaSuccess
  | UpdatePizza
  | UpdatePizzaFail
  | UpdatePizzaSuccess
  | RemovePizza
  | RemovePizzaFail
  | RemovePizzaSuccess
  | SelectPizza;
