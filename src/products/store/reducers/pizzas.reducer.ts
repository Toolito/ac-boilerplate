import { PizzaState } from "./pizzas.reducer";
import * as fromPizzas from "../actions/pizzas.action";
import { Pizza } from "../../models/pizza.model";

export interface PizzaState {
  loaded: boolean;
  loading: boolean;
  pizzas: Pizza[];
  selected: Pizza;
}

const initialState: PizzaState = {
  loaded: false,
  loading: false,
  pizzas: [],
  selected: null
};

export function reducer(
  state = initialState,
  action: fromPizzas.PizzasAction
): PizzaState {
  switch (action.type) {
    case fromPizzas.LOAD_PIZZA: {
      console.log("LoadPizzas", state);
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }
    case fromPizzas.LOAD_PIZZA_SUCCESS: {
      console.log("LoadPizzasSuccess", action.payload);
      return {
        pizzas: action.payload,
        loaded: true,
        loading: false,
        selected: null
      };
    }
    case fromPizzas.CREATE_PIZZA_SUCCESS: {
      console.log("CreatePizzaSuccess", action.payload);
      return {
        ...state,
        pizzas: [...state.pizzas, action.payload]
      };
    }
    case fromPizzas.UPDATE_PIZZA_SUCCESS: {
      console.log("UpdatePizzaSuccess", action.payload);
      const newPizza = action.payload;
      const pizzas = state.pizzas.map(
        pizza => (newPizza.id === pizza.id ? newPizza : pizza)
      );
      return {
        ...state,
        selected: null,
        pizzas
      };
    }
    case fromPizzas.REMOVE_PIZZA_SUCCESS: {
        console.log("RemovePizzaSuccess", action.payload);
        const pizzaToRemove = action.payload;
        const pizzas = state.pizzas.filter(
            pizza => pizza.id !== pizzaToRemove.id
        );
        return {
            ...state,
            selected: null,
            pizzas
        }
    }
    case fromPizzas.SELECT_PIZZA: {
      console.log("SelectPizza", action.payload);
      return {
        ...state,
        selected: action.payload
      };
    }
  }

  return state;
}

export const getPizzas = (state: PizzaState) => state.pizzas;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getSelectedPizza = (state: PizzaState) => state.selected;