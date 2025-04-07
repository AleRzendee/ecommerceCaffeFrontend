import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.sass'
})
export class AuthComponent {
  isLogin = true;

  email = '';
  senha = '';
  nome = '';

  alternarModo() {
    this.isLogin = !this.isLogin;
  }

  autenticar() {
    if (this.isLogin) {
      console.log('Login simulado:', this.email, this.senha);
    } else {
      console.log('Cadastro simulado:', this.nome, this.email, this.senha);
    }

    alert(`${this.isLogin ? 'Login' : 'Cadastro'} realizado com sucesso (simulado)!`);
  }
}
