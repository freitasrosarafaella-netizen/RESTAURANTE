class Funcionario {
    nome: string;
    sexo: string;
    dataContratacao: string;
    cpf: string;
    rg: string;
    tipo: string; // "contratado" ou "freelancer"

    constructor(nome: string, sexo: string, dataContratacao: string, cpf: string, rg: string, tipo: string) {
        this.nome = nome;
        this.sexo = sexo;
        this.dataContratacao = dataContratacao;
        this.cpf = cpf;
        this.rg = rg;
        this.tipo = tipo;
    }
}
