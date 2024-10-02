import { Component, Inject, LOCALE_ID } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ProdutoModalComponent>
  ) { }

  quantidade: number = 1;
  observacao: string = '';

  onNoClick(): void {
    this.dialogRef.close(); // Fecha o modal
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
    const pedido = {
      produto: this.data,
      quantidade: this.quantidade,
      observacao: this.observacao
    };
    this.dialogRef.close(pedido);
  }
}
