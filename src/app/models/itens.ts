import { Cardapio } from "./cardapio";

export interface Item{
    id?: number;
    observacao: string;
    quantidade: number;
    subtotal?: number;
    cardapio: Cardapio
}