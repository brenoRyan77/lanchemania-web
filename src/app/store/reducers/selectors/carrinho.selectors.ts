import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CarrinhoState } from '../carrinho.reducer';

export const selectCarrinhoState = createFeatureSelector<CarrinhoState>('carrinho');

export const selectCarrinhoItens = createSelector(
  selectCarrinhoState,
  (state: CarrinhoState) => state.itens
);