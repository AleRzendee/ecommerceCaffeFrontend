import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.sass'
})
export class ProductListComponent {
  produtos = [
    {
      id: 1,
      nome: 'Café Bourbon Amarelo',
      descricao: 'Café suave com notas florais e acidez equilibrada.',
      preco: 28.50,
      imagem: '/assets/images/cafe-bourbon.jpg'
    },
    {
      id: 2,
      nome: 'Café Catuaí Vermelho',
      descricao: 'Café encorpado com sabor achocolatado.',
      preco: 32.00,
      imagem: '/assets/images/cafe-catuai.jpg'
    },
    {
      id: 3,
      nome: 'Café Arábica Especial',
      descricao: 'Notas cítricas, doçura natural e aroma marcante.',
      preco: 35.00,
      imagem: '/assets/images/cafe-arabica.jpg'
    }
  ];
}
