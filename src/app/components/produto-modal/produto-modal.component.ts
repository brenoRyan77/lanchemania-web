import { Component, Inject, LOCALE_ID } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store, select  } from '@ngrx/store'
import { adicionarProduto } from '../../store/actions/carrinho.actions';
import { CarrinhoState } from '../../store/reducers/carrinho.reducer';
import { Item } from '../../models/itens';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-produto-modal',
  standalone: true,
  imports: [MatDialogModule, CurrencyPipe, FormsModule],
  templateUrl: './produto-modal.component.html',
  styleUrl: './produto-modal.component.css',
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
})
export class ProdutoModalComponent {

  carrinho$: Observable<CarrinhoState>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ProdutoModalComponent>,
    private store: Store<{ carrinho: CarrinhoState}>
  ) { 
    this.carrinho$ = this.store.pipe(select('carrinho'));
  }

  quantidade: number = 1;
  observacao: string = '';

  onNoClick(): void {
    this.dialogRef.close();
  }

  aumentarQuantidade() {
    this.quantidade++;
  }

  diminuirQuantidade() {
    if (this.quantidade > 1) {
      this.quantidade--;
    }
  }

  adicionarAoCarrinho() {
    const item: Item = {
      observacao: this.observacao,
      quantidade: this.quantidade,
      cardapio: this.data,
    };
    this.store.dispatch(adicionarProduto({ item }));
    this.dialogRef.close(item);
  }
}
