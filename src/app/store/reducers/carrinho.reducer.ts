import { createReducer, on } from '@ngrx/store';
import { adicionarProduto } from '../actions/carrinho.actions';
import { Item } from '../../models/itens';


export interface CarrinhoState {
    itens: Item[];
}
export const initialState: CarrinhoState = {
    itens: []
}

export const carrinhoReducer = createReducer(
    initialState,
    on(adicionarProduto, (state, { item }) => ({
        ...state,
        itens: [ ...state.itens, item ]
    }))
)