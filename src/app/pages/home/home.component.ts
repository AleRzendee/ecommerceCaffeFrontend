import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  cafes = [
    {
      id: 1,
      nome: 'Café Bourbon Amarelo',
      preco: 34.9,
      imagem: '/assets/cafes/bourbon.jpg'
    },
    {
      id: 2,
      nome: 'Café Catuaí Vermelho',
      preco: 29.9,
      imagem: '/assets/cafes/catuai.jpg'
    },
    {
      id: 3,
      nome: 'Blend Especial Cerrado',
      preco: 39.5,
      imagem: '/assets/cafes/blend.jpg'
    }
  ];
}
