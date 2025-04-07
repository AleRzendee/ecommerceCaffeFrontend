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
      nome: 'Café Bourbon Amarelo Torra Média Escura',
      descricao: 'Descubra a delicadeza e a doçura do Bourbon Amarelo, uma variedade nobre de café cultivada nas altitudes brasileiras. De torra média, esse grão revela um equilíbrio perfeito entre acidez suave e corpo aveludado, proporcionando uma experiência aromática envolvente.Com notas marcantes de caramelo, frutas amarelas e um toque sutil de mel, o Bourbon Amarelo encanta pela sua doçura natural e finalização limpa e elegante. Ideal para métodos filtrados, como V60 ou Chemex, é um café que valoriza os momentos de pausa e apreciação.',
      notes: 'Notas sensoriais: Caramelo, frutas amarelas, mel.',
      sourness: 'Acidez: Suave e cítrica.',
      body: 'Corpo: Médio e sedoso.',
      rise: 'Origem: Altitude média de 1.100 a 1.300m.',
      process: 'Processo: Natural.',
      recomend: 'Ideal para: Métodos filtrados.',
      peso: 250,
      preco: 119.90,
      imagem: 'bourbon-yellow-md.png'
    },
    {
      id: 2,
      nome: 'Café Catuaí Vermelho',
      descricao: 'Descubra a leveza e a complexidade do Catuaí Vermelho com torra clara, ideal para realçar suas nuances mais delicadas. Essa versão evidencia a acidez brilhante e frutada do grão, com um perfil limpo e aromático, perfeito para métodos filtrados. Com notas de frutas vermelhas, mel e chá preto, proporciona uma xícara elegante, suave e refrescante, valorizando a pureza da variedade e do terroir.',
      notes: 'Notas sensoriais: Frutas vermelhas, mel, chá preto.',
      sourness: 'Acidez: Alta e cítrica.',
      body: 'Corpo: Leve e sedoso.',
      rise: 'Origem: Altitude média de 1.000 a 1.200m.',
      process: 'Processo: Natural.',
      recomend: 'Ideal para: V60, Hario Switch, Chemex.',
      peso: 250,
      preco: 159.90,
      imagem: 'catuai-red-light.png'
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
