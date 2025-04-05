import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductDetailsComponent } from './pages/product-details.component';
import { CartComponent } from './pages/cart.component';
import { CheckoutComponent } from './pages/checkout.component';
import { AuthComponent } from './pages/auth.component';
import { NotFoundComponent } from './shared/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'CaféGourmet - Início' },
  { path: 'produtos', component: ProductListComponent, title: 'CaféGourmet - Produtos' },
  { path: 'produto/:id', component: ProductDetailsComponent },
  { path: 'carrinho', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'auth', component: AuthComponent },
  { path: '**', component: NotFoundComponent },
];
