import { Component, OnInit } from '@angular/core';
import { Produto } from '../../models/produto.model';
import { ProdutoService } from '../../services/produto.service';
import { CarrinhoService } from '../../services/carrinho.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  pesquisa: string = '';
  produtosFiltrados: Produto[] = [];
  sidebarAberta: boolean = false;

  constructor(
    private produtoService: ProdutoService,
    private carrinhoService: CarrinhoService
  ) {}

  ngOnInit(): void {}

  buscarProdutos() {
    this.produtosFiltrados = this.pesquisa
      ? this.produtoService.searchProdutos(this.pesquisa)
      : [];
  }

  toggleCartSidebar() {
    this.sidebarAberta = !this.sidebarAberta;
  }

  get cartQuantity(): number {
    return this.carrinhoService.quantidadeItens();
  }

  get itensCarrinho(): Produto[] {
    return this.carrinhoService.obterItens();
  }
}
