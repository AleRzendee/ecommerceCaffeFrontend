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
      nome: 'Caffè Byellow Média Escura',
      descricao: 'Descubra a delicadeza e a doçura do Bourbon Amarelo Média Escura.',
      preco: 119.90,
      imagem: 'bourbon-yellow-md.png'
    },
    {
      id: 2,
      nome: 'Café CatuRed Torra Clara',
      descricao: 'Descubra a leveza e a complexidade do Catuaí Vermelho com torra clara.',
      preco: 159.90,
      imagem: 'catuai-red-light.png'
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
