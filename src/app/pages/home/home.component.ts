import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
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
