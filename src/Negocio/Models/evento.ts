export class Evento{
        public Id:number;
        public Nome:string;
        public DescricaoSimples:string;
        public Descricao:string;
        public Tags:Array<string>;
        public DataEvento        :Date;
        public DataCriacao       :Date;
        public DataAtualizacao  :Date;
        public DataFimInscricao :Date;
        public PublicoAlvo:string;
        public Valor:number;


        public IdEmpresa:number;
        public EmpresaNome:string;

        public Cep :string;
        public Logradouro :string;
        public Numero :string;
        public Complemento :string;
        public Bairro :string;
        public Cidade :string;
        public UF :string;
}