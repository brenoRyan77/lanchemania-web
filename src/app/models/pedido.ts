import { Cliente } from "./cliente";
import { Item } from "./itens";

export interface Pedido {
    id: number;
    numeroPedido: number;
    total: number;
    status: string;
    cliente: Cliente;
    itens: Item[]; 
}