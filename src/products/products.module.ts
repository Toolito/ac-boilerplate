import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {effects, reducers} from './store';

// components
import * as fromComponents from './components';

// containers
import * as fromContainers from './containers';

// guards
import * as fromGuards from './guards';

// services
import * as fromServices from './services';

// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: fromContainers.ProductsComponent,
    canActivate: [fromGuards.PizzasGuard]
  },
  {
    path: ':id',
    component: fromContainers.ProductItemComponent,
    canActivate: [fromGuards.PizzasGuard, fromGuards.ToppingsGuard]
  },
  {
    path: 'new',
    component: fromContainers.ProductItemComponent,
    canActivate: [fromGuards.PizzasGuard, fromGuards.ToppingsGuard]
  },
];
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('products', reducers),
    EffectsModule.forFeature(effects)
  ],
  providers: [...fromGuards.guards, ...fromServices.services],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  exports: [...fromContainers.containers, ...fromComponents.components],
})
export class ProductsModule {}



