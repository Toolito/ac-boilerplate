import { ActionReducerMap } from '@ngrx/store';

import * as fromPizzas from './pizzas.reducer';
import * as fromToppings from './toppings.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store/src/selector';

// feature state
export interface ProductsState {
    pizzas: fromPizzas.PizzaState,
    toppings: fromToppings.ToppingsState
}

// reducers
export const reducers: ActionReducerMap<ProductsState> = {
    pizzas: fromPizzas.reducer,
    toppings: fromToppings.reducer
};

export const getProductsState = createFeatureSelector<ProductsState>('products');
export const getPizzaState = createSelector(getProductsState, (state: ProductsState) => state.pizzas);
export const getPizzas = createSelector(getPizzaState, fromPizzas.getPizzas);
export const getSelectedPizza = createSelector(getPizzaState, fromPizzas.getSelectedPizza);
export const getToppingsState = createSelector(getProductsState, (state: ProductsState) => state.toppings);
export const getToppings = createSelector(getToppingsState, fromToppings.getToppings);
export const getToppingsLoaded = createSelector(getToppingsState, fromToppings.getToppingsLoaded);
export const getPizzasLoaded = createSelector(getPizzaState, fromPizzas.getPizzasLoaded);