import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent {
  cartItems = [
    {
      id: 1,
      nome: 'Café Arábica Premium',
      preco: 29.9,
      quantidade: 2,
      imagem: 'https://via.placeholder.com/100'
    },
    {
      id: 2,
      nome: 'Café Bourbon Gourmet',
      preco: 34.5,
      quantidade: 1,
      imagem: 'https://via.placeholder.com/100'
    }
  ];

  get subtotal() {
    return this.cartItems.reduce((total, item) => total + item.preco * item.quantidade, 0);
  }

  removerItem(id: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== id);
  }
}
