import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private itensCarrinho: Produto[] = [];

  adicionarAoCarrinho(produto: Produto) {
    this.itensCarrinho.push(produto);
  }

  obterItens(): Produto[] {
    return this.itensCarrinho;
  }

  limparCarrinho() {
    this.itensCarrinho = [];
  }

  quantidadeItens(): number {
    return this.itensCarrinho.length;
  }
}
