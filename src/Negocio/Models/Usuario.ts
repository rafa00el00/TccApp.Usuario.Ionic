export class Usuario{
    

        /**
         *
         */
        constructor() {
                this.tags = [];
        }
        public name:string;
        public cpf:string;
        public dataNascimento:Date;
        public email:string;
        public telefone:string;
        public celular:string;
        public password:string;

        public tags:Array<string>
}