import { Pagamento } from "./pagamento";

export class Compra {

    public id: number
    public guidCompra: string;
    public codEvento: number;
    public nomeEvento: string;
    public dataEvento:Date;
    public qtdIngressos: number;
    public valorTotal: number;
    public guidUsuario: string;
    public nomeUsuario: string;
    public codEmpresa: number;

    public pagamento:Pagamento;
}