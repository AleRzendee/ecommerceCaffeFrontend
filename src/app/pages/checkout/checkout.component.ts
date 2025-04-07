import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass']
})
export class CheckoutComponent {
  nome = ''
  endereco = ''
  pagamento = 'cartao'

  cartItems = [
    { id: 1, nome: 'Café Arábica Premium', preco: 29.9, quantidade: 2 },
    { id: 2, nome: 'Café Bourbon Gourmet', preco: 34.5, quantidade: 1 }
  ]

  get total() {
    return this.cartItems.reduce((sum, item) => sum + item.preco * item.quantidade, 0)
  }

  finalizarPedido() {
    alert('Pedido finalizado com sucesso! Obrigado por comprar com a gente ☕️')
  }
}
