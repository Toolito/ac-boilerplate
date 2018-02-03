import { LoadToppings } from "./../../store/actions/toppings.action";
import { of } from "rxjs/observable/of";
import { map } from "rxjs/operators";
import { Observable } from "rxjs/Observable";
import { PizzaState } from "./../../store/reducers/pizzas.reducer";
import { Store } from "@ngrx/store";
import { SelectPizza } from "./../../store/actions/pizzas.action";
import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { Pizza } from "../../models/pizza.model";
import { PizzasService } from "../../services/pizzas.service";
import * as fromStore from "../../store";
import { switchMap } from "rxjs/operators/switchMap";
import { tap } from "rxjs/operators/tap";

@Component({
  selector: "product-item",
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ["product-item.component.scss"],
  template: `
    <div 
      class="product-item">
      <pizza-form
        [pizza]="pizza$ | async"
        [toppings]="toppings$ | async"
        (selected)="onSelect($event)"
        (create)="onCreate($event)"
        (update)="onUpdate($event)"
        (remove)="onRemove($event)">
        <pizza-display
          [pizza]="selected$ | async">
        </pizza-display>
      </pizza-form>
    </div>
  `
})
export class ProductItemComponent implements OnInit {
  pizza$: Observable<Pizza>;
  selected$: Observable<Pizza>;
  toppings$: Observable<string[]>;

  constructor(
    private pizzaService: PizzasService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromStore.ProductsState>
  ) {}

  ngOnInit() {
    this.selected$ = this.store.select(fromStore.getSelectedPizza);
    this.toppings$ = this.store.select(fromStore.getToppings);
    
    this.pizza$ = this.route.params.pipe(
      switchMap(params => {
        if (params.id === "new") {
          this.store.dispatch(new fromStore.SelectPizza({}));
          return of({});
        }

        return this.store.select(fromStore.getPizzas).pipe(
          map(pizzas => 
            pizzas.find(pizza => pizza.id == parseInt(params.id, 10))
          ),
          tap((pizza: Pizza) => 
            this.store.dispatch(new fromStore.SelectPizza(pizza))
          )
        );
      })
    );

  }

  onSelect(event: Pizza) {
    this.store.dispatch(new fromStore.SelectPizza(event));
  }

  onCreate(event: Pizza) {
    this.store.dispatch(new fromStore.CreatePizza(event));
  }

  onUpdate(event: Pizza) {
    this.store.dispatch(new fromStore.UpdatePizza(event));
  }

  onRemove(event: Pizza) {
    const remove = window.confirm("Are you sure?");
    if (remove) {
      this.store.dispatch(new fromStore.RemovePizza(event));
    }
  }
}
