import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.sass'
})
export class CartComponent {
  cartItems = [
    {
      id: 1,
      nome: 'Café Bourbon Amarelo',
      preco: 28.5,
      quantidade: 1
    },
    {
      id: 2,
      nome: 'Café Catuaí Vermelho',
      preco: 32,
      quantidade: 2
    }
  ];

  get total(): number {
    return this.cartItems.reduce((sum, item) => sum + item.preco * item.quantidade, 0);
  }
}
