import { Component, HostListener } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { Cardapio } from '../../models/cardapio';
import { CardapioService } from '../../services/cardapio.service';
import { FiltroCategoriaPipe } from '../../pipes/filtro-categoria.pipe';
import { MatDialog } from '@angular/material/dialog';
import { ProdutoModalComponent } from '../../components/produto-modal/produto-modal.component';
import { CurrencyPipe } from '@angular/common';
import { Categoria } from '../../models/categoria';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [MatTabsModule, FiltroCategoriaPipe, ProdutoModalComponent, CurrencyPipe],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css',
})
export class ProdutosComponent {

  categorias: Categoria[] = [
    { chave: 'churrasco', label: 'Churrasco' },
    { chave: 'bebidas', label: 'Bebidas' },
    { chave: 'sobremesas', label: 'Sobremesas' },
    { chave: 'lanches', label: 'Lanches' },
  ];
  activeLink = this.categorias[0]?.chave;
  cardapio: Cardapio[] = [];
  produtos: Cardapio[] = [
    // Churrasco
    {
      id: 1,
      nome: 'Picanha na Brasa',
      descricao: 'Deliciosa picanha grelhada na brasa.',
      imagem: 'https://example.com/images/picanha.jpg',
      categoria: 'churrasco',
      preco: 49.9
    },
    {
      id: 2,
      nome: 'Fraldinha Grelhada',
      descricao: 'Fraldinha grelhada com tempero especial.',
      imagem: 'https://example.com/images/fraldinha.jpg',
      categoria: 'churrasco',
      preco: 39.9
    },
    {
      id: 3,
      nome: 'Costela Assada',
      descricao: 'Costela de boi assada lentamente.',
      imagem: 'https://example.com/images/costela.jpg',
      categoria: 'churrasco',
      preco: 59.9
    },
    {
      id: 4,
      nome: 'Linguiça Toscana',
      descricao: 'Linguiça toscana grelhada, perfeita para acompanhar.',
      imagem: 'https://example.com/images/linguica.jpg',
      categoria: 'churrasco',
      preco: 29.9
    },
    {
      id: 5,
      nome: 'Asa de Frango',
      descricao: 'Asas de frango temperadas e assadas.',
      imagem: 'https://example.com/images/asa-frango.jpg',
      categoria: 'churrasco',
      preco: 25.0
    },
    {
      id: 6,
      nome: 'Coração de Frango',
      descricao: 'Coração de frango grelhado no espeto.',
      imagem: 'https://example.com/images/coracao-frango.jpg',
      categoria: 'churrasco',
      preco: 20.0
    },
    {
      id: 7,
      nome: 'Carne de Sol',
      descricao: 'Carne de sol com acompanhamento de mandioca.',
      imagem: 'https://example.com/images/carne-sol.jpg',
      categoria: 'churrasco',
      preco: 45.0
    },
    {
      id: 8,
      nome: 'Espetinho de Camarão',
      descricao: 'Espetinho de camarão grelhado com temperos especiais.',
      imagem: 'https://example.com/images/espetinho-camarao.jpg',
      categoria: 'churrasco',
      preco: 55.0
    },
    {
      id: 9,
      nome: 'Picanha Suína',
      descricao: 'Picanha suína grelhada, suculenta e macia.',
      imagem: 'https://example.com/images/picanha-suina.jpg',
      categoria: 'churrasco',
      preco: 48.0
    },
    {
      id: 10,
      nome: 'Churrasco Misto',
      descricao: 'Mistura de carnes grelhadas.',
      imagem: 'https://example.com/images/churrasco-misto.jpg',
      categoria: 'churrasco',
      preco: 55.0
    },

    // Bebidas
    {
      id: 11,
      nome: 'Coca-Cola',
      descricao: 'Refrigerante gelado.',
      imagem: 'https://example.com/images/coca.jpg',
      categoria: 'bebidas',
      preco: 5.0
    },
    {
      id: 12,
      nome: 'Suco de Laranja Natural',
      descricao: 'Suco de laranja 100% natural.',
      imagem: 'https://example.com/images/suco-laranja.jpg',
      categoria: 'bebidas',
      preco: 7.0
    },
    {
      id: 13,
      nome: 'Água Mineral',
      descricao: 'Água mineral natural, gelada.',
      imagem: 'https://example.com/images/agua.jpg',
      categoria: 'bebidas',
      preco: 3.0
    },
    {
      id: 14,
      nome: 'Cerveja Lata',
      descricao: 'Cerveja gelada em lata.',
      imagem: 'https://example.com/images/cerveja-lata.jpg',
      categoria: 'bebidas',
      preco: 8.0
    },
    {
      id: 15,
      nome: 'Refrigerante de Guaraná',
      descricao: 'Refrigerante de guaraná, refrescante.',
      imagem: 'https://example.com/images/guarana.jpg',
      categoria: 'bebidas',
      preco: 6.0
    },
    {
      id: 16,
      nome: 'Suco de Abacaxi',
      descricao: 'Suco de abacaxi natural, sem adição de açúcar.',
      imagem: 'https://example.com/images/suco-abacaxi.jpg',
      categoria: 'bebidas',
      preco: 7.5
    },
    {
      id: 17,
      nome: 'Suco de Maracujá',
      descricao: 'Suco de maracujá natural, refrescante.',
      imagem: 'https://example.com/images/suco-maracuja.jpg',
      categoria: 'bebidas',
      preco: 7.0
    },
    {
      id: 18,
      nome: 'Refrigerante de Limão',
      descricao: 'Refrigerante de limão, muito refrescante.',
      imagem: 'https://example.com/images/refrigerante-limao.jpg',
      categoria: 'bebidas',
      preco: 5.5
    },
    {
      id: 19,
      nome: 'Chá Gelado',
      descricao: 'Chá gelado, sabor de pêssego.',
      imagem: 'https://example.com/images/cha-gelado.jpg',
      categoria: 'bebidas',
      preco: 4.0
    },
    {
      id: 20,
      nome: 'Milkshake de Chocolate',
      descricao: 'Delicioso milkshake de chocolate.',
      imagem: 'https://example.com/images/milkshake-chocolate.jpg',
      categoria: 'bebidas',
      preco: 10.0
    },

    // Sobremesas
    {
      id: 21,
      nome: 'Pudim de Leite',
      descricao: 'Sobremesa clássica de pudim de leite condensado.',
      imagem: 'https://example.com/images/pudim.jpg',
      categoria: 'sobremesas',
      preco: 8.0
    },
    {
      id: 22,
      nome: 'Torta de Limão',
      descricao: 'Torta gelada de limão com merengue.',
      imagem: 'https://example.com/images/torta-limao.jpg',
      categoria: 'sobremesas',
      preco: 12.0
    },
    {
      id: 23,
      nome: 'Brownie de Chocolate',
      descricao: 'Delicioso brownie com pedaços de chocolate.',
      imagem: 'https://example.com/images/brownie.jpg',
      categoria: 'sobremesas',
      preco: 10.0
    },
    {
      id: 24,
      nome: 'Mousse de Maracujá',
      descricao: 'Mousse leve e refrescante de maracujá.',
      imagem: 'https://example.com/images/mousse-maracuja.jpg',
      categoria: 'sobremesas',
      preco: 9.0
    },
    {
      id: 25,
      nome: 'Pavê de Chocolate',
      descricao: 'Pavê de chocolate com biscoitos.',
      imagem: 'https://example.com/images/pave-chocolate.jpg',
      categoria: 'sobremesas',
      preco: 14.0
    },
    {
      id: 26,
      nome: 'Gelatina Colorida',
      descricao: 'Gelatina colorida, uma opção refrescante.',
      imagem: 'https://example.com/images/gelatina.jpg',
      categoria: 'sobremesas',
      preco: 4.0
    },
    {
      id: 27,
      nome: 'Torta de Morango',
      descricao: 'Torta de morango com creme e massa crocante.',
      imagem: 'https://example.com/images/torta-morango.jpg',
      categoria: 'sobremesas',
      preco: 15.0
    },
    {
      id: 28,
      nome: 'Frutas da Estação',
      descricao: 'Salada de frutas frescas da estação.',
      imagem: 'https://example.com/images/frutas.jpg',
      categoria: 'sobremesas',
      preco: 6.0
    },
    {
      id: 29,
      nome: 'Bolo de Cenoura',
      descricao: 'Bolo de cenoura com cobertura de chocolate.',
      imagem: 'https://example.com/images/bolo-cenoura.jpg',
      categoria: 'sobremesas',
      preco: 10.0
    },
    {
      id: 30,
      nome: 'Creme Brulée',
      descricao: 'Sobremesa francesa com crosta de açúcar.',
      imagem: 'https://example.com/images/creme-brulee.jpg',
      categoria: 'sobremesas',
      preco: 11.0
    },

    // Lanches
    {
      id: 31,
      nome: 'X-Bacon',
      descricao: 'Hambúrguer artesanal com bacon, queijo, salada e maionese.',
      imagem: 'https://example.com/images/xbacon.jpg',
      categoria: 'lanches',
      preco: 20.0
    },
    {
      id: 32,
      nome: 'Cachorro Quente Completo',
      descricao: 'Pão, salsicha, carne moída, ovo de codorna e queijo ralado.',
      imagem: 'https://example.com/images/cachorro-quente.jpg',
      categoria: 'lanches',
      preco: 10.0
    },
    {
      id: 33,
      nome: 'Hambúrguer Clássico',
      descricao: 'Hambúrguer clássico com queijo e cebola.',
      imagem: 'https://example.com/images/hamburguer-classico.jpg',
      categoria: 'lanches',
      preco: 15.0
    },
    {
      id: 34,
      nome: 'Sanduíche de Frango',
      descricao: 'Sanduíche com peito de frango grelhado e salada.',
      imagem: 'https://example.com/images/sanduiche-frango.jpg',
      categoria: 'lanches',
      preco: 12.0
    },
    {
      id: 35,
      nome: 'Tapioca de Queijo',
      descricao: 'Tapioca recheada com queijo e ervas.',
      imagem: 'https://example.com/images/tapioca-queijo.jpg',
      categoria: 'lanches',
      preco: 8.0
    },
    {
      id: 36,
      nome: 'Pastel de Carne',
      descricao: 'Pastel frito com recheio de carne moída.',
      imagem: 'https://example.com/images/pastel-carne.jpg',
      categoria: 'lanches',
      preco: 5.0
    },
    {
      id: 37,
      nome: 'Wrap de Frango',
      descricao: 'Wrap com peito de frango grelhado, alface e molho.',
      imagem: 'https://example.com/images/wrap-frango.jpg',
      categoria: 'lanches',
      preco: 14.0
    },
    {
      id: 38,
      nome: 'Sanduíche de Atum',
      descricao: 'Sanduíche de atum com maionese e salada.',
      imagem: 'https://example.com/images/sanduiche-atun.jpg',
      categoria: 'lanches',
      preco: 11.0
    },
    {
      id: 39,
      nome: 'Burguer Vegetariano',
      descricao: 'Hambúrguer feito com legumes grelhados.',
      imagem: 'https://example.com/images/burguer-vegetariano.jpg',
      categoria: 'lanches',
      preco: 13.0
    },
    {
      id: 40,
      nome: 'Batata Frita',
      descricao: 'Batata frita crocante, perfeita para acompanhar.',
      imagem: 'https://example.com/images/batata-frita.jpg',
      categoria: 'lanches',
      preco: 9.0
    },
  ];

  constructor(private cardapioService: CardapioService, public dialog: MatDialog) {
    this.activeLink = this.categorias[0]?.chave
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

  ngOnInit() {
    //this.carregarProdutos();
  }

  carregarProdutos() {
    this.cardapioService.listarCardapio().subscribe(produtos => {
      this.cardapio = produtos;
    });
  }

  trackByCategoria(index: number, categoria: any): string {
    return categoria.chave; // Presumindo que 'chave' é única para cada categoria
  }

  trackByProdutoFn(index: number, produto: Cardapio): number {
    return produto.id;
  }

  abrirModal(produto: Cardapio): void {
    console.log('Abrindo modal', produto);
    const dialogRef = this.dialog.open(ProdutoModalComponent, {
      width: '400px', // Define o tamanho do modal
      data: produto // Passa o produto selecionado como dado para o modal
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('O modal foi fechado', result);
    });
  }
}
