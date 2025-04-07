import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.sass'
})
export class CheckoutComponent {
  nome = '';
  email = '';
  endereco = '';
  enviado = false;

  finalizarCompra() {
    if (this.nome && this.email && this.endereco) {
      this.enviado = true;
      // Aqui você pode simular o envio ou integração com API futuramente
    }
  }
}
