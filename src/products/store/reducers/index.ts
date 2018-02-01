import { ActionReducerMap } from '@ngrx/store';

import * as fromPizzas from './pizzas.reducer';
import * as fromToppings from './toppings.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store/src/selector';

// feature state
export interface ProductsState {
    pizzas: fromPizzas.PizzaState
}

// reducers
export const reducers: ActionReducerMap<ProductsState> = {
    pizzas: fromPizzas.reducer
};

export const getProductsState = createFeatureSelector<ProductsState>('products');
export const getPizzaState = createSelector(getProductsState, (state: ProductsState) => state.pizzas);
export const getPizzas = createSelector(getPizzaState, fromPizzas.getPizzas);