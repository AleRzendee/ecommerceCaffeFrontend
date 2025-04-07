import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {
  searchTerm: string = '';
  showSuggestions: boolean = false;

  produtos = [
    { id: 1, nome: 'Café Clássico', preco: 18.5, imagem: 'assets/produtos/cafe-classico.png' },
    { id: 2, nome: 'Café Expresso', preco: 22.0, imagem: 'assets/produtos/cafe-expresso.png' },
    { id: 3, nome: 'Café Orgânico', preco: 25.9, imagem: 'assets/produtos/cafe-organico.png' },
    { id: 4, nome: 'Café Gourmet Especial', preco: 32.4, imagem: 'assets/produtos/cafe-gourmet.png' }
  ];

  filteredProdutos = this.produtos;

  onSearch() {
    const termo = this.searchTerm.toLowerCase();
    this.filteredProdutos = this.produtos.filter(p =>
      p.nome.toLowerCase().includes(termo)
    );
  }

  hideSuggestions() {
    setTimeout(() => {
      this.showSuggestions = false;
    }, 200);
  }

  goToProduct(id: number) {
    window.location.href = `/produtos/${id}`;
  }

  isCartOpen = false;

  cartItems = [
    { id: 1, nome: 'Café Expresso', preco: 14.90, quantidade: 1 },
    { id: 2, nome: 'Café Moído', preco: 24.90, quantidade: 2 }
  ];

  get cartCount() {
    return this.cartItems.reduce((total, item) => total + item.quantidade, 0);
  }

  toggleCartSidebar() {
    this.isCartOpen = !this.isCartOpen;
  }

}
