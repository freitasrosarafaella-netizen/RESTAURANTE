"use strict";
class Prato {
    constructor(nome, validade, nacionalidade) {
        this.nome = nome;
        this.validade = validade;
        this.nacionalidade = nacionalidade;
    }
}
class Funcionario {
    constructor(nome, sexo, dataContratacao, cpf, rg, tipo) {
        this.nome = nome;
        this.sexo = sexo;
        this.dataContratacao = dataContratacao;
        this.cpf = cpf;
        this.rg = rg;
        this.tipo = tipo;
    }
}
class Contratado extends Funcionario {
    constructor(nome, sexo, dataContratacao, cpf, rg, salarioFixo) {
        super(nome, sexo, dataContratacao, cpf, rg, "contratado");
        this.salarioFixo = salarioFixo;
    }
}
class Freelancer extends Funcionario {
    constructor(nome, sexo, dataContratacao, cpf, rg, valorPorHora, horasTrabalhadas, inicioContrato, fimContrato) {
        super(nome, sexo, dataContratacao, cpf, rg, "freelancer");
        this.valorPorHora = valorPorHora;
        this.horasTrabalhadas = horasTrabalhadas;
        this.inicioContrato = inicioContrato;
        this.fimContrato = fimContrato;
    }
}
class Entrega {
    constructor(dataHoraSaida, numeroPedido, endereco) {
        this.dataHoraSaida = dataHoraSaida;
        this.numeroPedido = numeroPedido;
        this.endereco = endereco;
    }
}
class PratoRepository {
    constructor() {
        this.pratos = [];
    }
    salvar(prato) {
        this.pratos.push({
            nome: prato.nome,
            validade: prato.validade,
            nacionalidade: prato.nacionalidade
        });
    }
    consultarPratos() {
        console.log("--- RELATÓRIO DE PRATOS ---");
        console.log(this.pratos);
    }
}
class FuncionarioRepository {
    constructor() {
        this.funcionarios = [];
    }
    salvar(funcionario) {
        this.funcionarios.push(funcionario);
    }
    consultarFuncionarios() {
        console.log("--- RELATÓRIO GERAL DE FUNCIONÁRIOS ---");
        console.log(this.funcionarios);
    }
    consultarTrabalhando() {
        console.log("--- FUNCIONÁRIOS TRABALHANDO ---");
        console.log(this.funcionarios);
    }
    consultarSalarios() {
        console.log("--- RELATÓRIO DE SALÁRIOS A PAGAR ---");
        for (let i = 0; i < this.funcionarios.length; i++) {
            let func = this.funcionarios[i];
            if (func.tipo == "contratado") {
                let funcContratado = func;
                console.log("Funcionário: " + func.nome + " | Salário Fixo: R$ " + funcContratado.salarioFixo);
            }
            else {
                let funcFreelancer = func;
                let totalFreelancer = funcFreelancer.valorPorHora * funcFreelancer.horasTrabalhadas;
                console.log("Freelancer: " + func.nome + " | Salário por Horas: R$ " + totalFreelancer);
            }
        }
    }
    consultarContratoFreelancer() {
        console.log("--- RELATÓRIO DE CONTRATOS FREELANCER ---");
        for (let i = 0; i < this.funcionarios.length; i++) {
            let func = this.funcionarios[i];
            if (func.tipo == "freelancer") {
                let funcFreelancer = func;
                console.log("Freelancer: " + func.nome);
                console.log("> Início do Contrato: " + funcFreelancer.inicioContrato);
                console.log("> Fim do Contrato: " + funcFreelancer.fimContrato);
                console.log("> Status: Contrato Ativo");
                console.log("---------------------------------------");
            }
        }
    }
}
class EntregaRepository {
    constructor() {
        this.entregas = [];
    }
    salvar(entrega) {
        this.entregas.push({
            dataHoraSaida: entrega.dataHoraSaida,
            numeroPedido: entrega.numeroPedido,
            endereco: entrega.endereco
        });
    }
    consultarEntregas() {
        console.log(this.entregas);
    }
}
function main() {
    const lasanha = new Prato("Lasanha", "24/10/2026", "Italiana");
    const feijoada = new Prato("Feijoada", "22/10/2026", "Brasileira");
    const rafaella = new Contratado("Rafaella Rosa", "Feminino", "10/05/2025", "461.836.528-57", "12.345.678-9", 2800);
    const caua = new Freelancer("Caua Silveira", "Masculino", "01/10/2026", "222.222.222-22", "23.456.789-0", 35, 80, "01/10/2026", "31/12/2026");
    const entrega = new Entrega("20/11/2026, 11:30:00", 1042, "Rua dos Estudantes, 123");
    const tabelaPratos = new PratoRepository();
    const tabelaFuncionarios = new FuncionarioRepository();
    const tabelaEntregas = new EntregaRepository();
    tabelaPratos.salvar(lasanha);
    tabelaPratos.salvar(feijoada);
    tabelaFuncionarios.salvar(rafaella);
    tabelaFuncionarios.salvar(caua);
    tabelaEntregas.salvar(entrega);
    tabelaPratos.consultarPratos();
    tabelaFuncionarios.consultarFuncionarios();
    tabelaFuncionarios.consultarSalarios();
    tabelaEntregas.consultarEntregas();
    tabelaFuncionarios.consultarContratoFreelancer();
}
main();
