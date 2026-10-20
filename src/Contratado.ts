class Contratado extends Funcionario {
    salarioFixo: number;

    constructor(nome: string, sexo: string, dataContratacao: string, cpf: string, rg: string, salarioFixo: number) {
        super(nome, sexo, dataContratacao, cpf, rg, "contratado"); 
        this.salarioFixo = salarioFixo;
    }
}
