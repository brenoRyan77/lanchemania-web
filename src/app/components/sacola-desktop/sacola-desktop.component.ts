import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Observable, of } from 'rxjs';
import { Item } from '../../models/itens';
import { Store } from '@ngrx/store';
import { selectCarrinhoItens } from '../../store/reducers/selectors/carrinho.selectors';

@Component({
  selector: 'app-sacola-desktop',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './sacola-desktop.component.html',
  styleUrl: './sacola-desktop.component.css'
})
export class SacolaDesktopComponent {

  carrinho: Item[] = [];

  itensCarrinho: Observable<Item[]> = of([]);	

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.itensCarrinho = this.store.select(selectCarrinhoItens);
    this.itensCarrinho.subscribe(itens => {
      this.carrinho = itens;  // Atribui os itens diretamente, ao invés de usar push
      console.log(this.carrinho); 
    });
  }

  calcularSubtotal(): number {
    return this.carrinho.reduce((acc, item) => acc + (item.cardapio.preco * item.quantidade), 0);
  }

  calcularTotal(): number {
    return this.calcularSubtotal();
  }
}
