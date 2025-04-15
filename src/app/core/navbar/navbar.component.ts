import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../../models/produto.model';
import { ProdutoService } from '../../services/produto.service';
import { CarrinhoService } from '../../services/carrinho.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  searchTerm: string = '';
  filteredProdutos: Produto[] = [];
  sidebarAberta: boolean = false;

  constructor(
    private router: Router,
    private produtoService: ProdutoService,
    private carrinhoService: CarrinhoService
  ) {}

  ngOnInit(): void {}

  filterProducts() {
    if (!this.searchTerm.trim()) {
      this.filteredProdutos = [];
      return;
    }

    this.filteredProdutos = this.produtoService.searchProdutos(this.searchTerm);
  }

  goToProduct(id: number) {
    this.router.navigate(['/produtos', id]);
    this.filteredProdutos = [];
    this.searchTerm = '';
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
