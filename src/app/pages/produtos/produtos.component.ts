import { Component, HostListener } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { Cardapio } from '../../models/cardapio';
import { CardapioService } from '../../services/cardapio.service';
import { FiltroCategoriaPipe } from '../../pipes/filtro-categoria.pipe';
import { MatDialog } from '@angular/material/dialog';
import { ProdutoModalComponent } from '../../components/produto-modal/produto-modal.component';
import { CurrencyPipe } from '@angular/common';
import { Categoria } from '../../models/categoria';
import { ConstantesService } from '../../services/constantes.service';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [MatTabsModule, FiltroCategoriaPipe, ProdutoModalComponent, CurrencyPipe],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css',
  providers: [CardapioService, ConstantesService]
})
export class ProdutosComponent {

  categorias: Categoria[] = [];
  activeLink = this.categorias[0]?.chave;
  cardapio: Cardapio[] = [];
  produtos: Cardapio[] = [];

  constructor(private cardapioService: CardapioService, public dialog: MatDialog, private constanteService: ConstantesService) {
    this.activeLink = this.categorias[0]?.chave
  }

  ngOnInit() {
    this.carregarConstantes()
    this.carregarCardapios();
  }

  carregarCardapios() {
    this.cardapioService.listarCardapio().subscribe(
      (data: Cardapio[]) => {
        this.produtos = data;
      },
      (error) => {
        console.error('Erro ao carregar cardápios', error);
      }
    );
  }

  carregarConstantes(){
    this.constanteService.listarConstantes().subscribe((data: Categoria[]) => {
      this.categorias = data
    })
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.categorias.forEach(categoria => {
      const section = document.getElementById(categoria.chave);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight) {
          this.activeLink = categoria.chave;
        }
      }
    });
  }

  scrollToSection(category: string) {
    this.activeLink = category;
    const element = document.getElementById(category);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  trackByCategoria(index: number, categoria: any): string {
    return categoria.chave;
  }

  trackByProdutoFn(index: number, produto: Cardapio): number {
    return produto.id;
  }

  abrirModal(produto: Cardapio): void {
    const dialogRef = this.dialog.open(ProdutoModalComponent, {
      width: '400px',
      data: produto
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('O modal foi fechado', result);
    });
  }
}
