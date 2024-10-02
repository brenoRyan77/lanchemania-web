import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroCategoria',
  standalone: true
})
export class FiltroCategoriaPipe implements PipeTransform {

  transform(produtos: any[], categoria: string): any[] {
    if (!produtos || !categoria) {
      return produtos;
    }
    return produtos.filter(produto => produto.categoria === categoria);
  }

}
