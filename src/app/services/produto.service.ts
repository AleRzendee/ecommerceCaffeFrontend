import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private produtos: Produto[] = [
    {
      id: 1,
      nome: 'Café Arábica Premium',
      descricao: 'Sabor suave e aroma intenso',
      preco: 29.9,
      imagem: 'assets/imgs/cafe1.png'
    },
    {
      id: 2,
      nome: 'Blend Gourmet',
      descricao: 'Equilíbrio perfeito entre aroma e sabor',
      preco: 35.5,
      imagem: 'assets/imgs/cafe2.png'
    }
    // ... mais produtos se desejar
  ];

  getProdutos(): Produto[] {
    return this.produtos;
  }

  searchProdutos(query: string): Produto[] {
    return this.produtos.filter(p =>
      p.nome.toLowerCase().includes(query.toLowerCase())
    );
  }
}
