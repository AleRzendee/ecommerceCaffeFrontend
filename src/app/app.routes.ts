import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { AuthComponent } from './pages/auth/auth.component';
import { NotFoundComponent } from './shared/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Caffè Co.' },
  { path: 'produtos', component: ProductListComponent, title: 'Caffè Co. - Nossos Produtos' },
  { path: 'produtos/:id', loadComponent: () => import('./pages/product-details/product-details.component').then(m => m.ProductDetailsComponent) },
  { path: 'carrinho', loadComponent: () => import('./pages/cart/cart.component').then(m => m.CartComponent) },
  { path: 'checkout', loadComponent: () => import('./pages/checkout/checkout.component').then(m => m.CheckoutComponent) },
  { path: 'auth', loadComponent: () => import('./pages/auth/auth.component').then(m => m.AuthComponent) },
  { path: '**', component: NotFoundComponent },
];
