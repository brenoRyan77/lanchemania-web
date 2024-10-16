import { createAction, props } from '@ngrx/store';
import { Item } from '../../models/itens';

export const adicionarProduto = createAction(
    '[Carrinho] Adicionar Produto',
    props<{ item: Item }>()
)