import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.sass'
})
export class ProductDetailsComponent {
  product: any;
  produtos = [
    {
      id: 1,
      nome: 'Café Bourbon Amarelo',
      descricao: 'Café suave com notas florais e acidez equilibrada.',
      preco: 28.5,
      imagem: '/assets/images/cafe-bourbon.jpg'
    },
    {
      id: 2,
      nome: 'Café Catuaí Vermelho',
      descricao: 'Café encorpado com sabor achocolatado.',
      preco: 32,
      imagem: '/assets/images/cafe-catuai.jpg'
    },
    {
      id: 3,
      nome: 'Café Arábica Especial',
      descricao: 'Notas cítricas, doçura natural e aroma marcante.',
      preco: 35,
      imagem: '/assets/images/cafe-arabica.jpg'
    }
  ];

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.produtos.find(p => p.id === id);
  }
}
