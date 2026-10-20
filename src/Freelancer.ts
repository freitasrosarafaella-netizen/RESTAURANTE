class Freelancer extends Funcionario {
    valorPorHora: number;
    horasTrabalhadas: number;
    inicioContrato: string;
    fimContrato: string;

    constructor(nome: string, sexo: string, dataContratacao: string, cpf: string, rg: string, 
                valorPorHora: number, horasTrabalhadas: number, inicioContrato: string, fimContrato: string) {
        super(nome, sexo, dataContratacao, cpf, rg, "freelancer");
        this.valorPorHora = valorPorHora;
        this.horasTrabalhadas = horasTrabalhadas;
        this.inicioContrato = inicioContrato;
        this.fimContrato = fimContrato;
    }
}
