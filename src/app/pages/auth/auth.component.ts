import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent {
  abaAtual: 'login' | 'cadastro' = 'login';

  usuario = {
    nome: '',
    email: '',
    senha: ''
  };

  trocarAba(aba: 'login' | 'cadastro') {
    this.abaAtual = aba;
  }

  login() {
    alert(`Login simulado para: ${this.usuario.email}`);
  }

  cadastrar() {
    alert(`Cadastro simulado para: ${this.usuario.nome}`);
  }
}
