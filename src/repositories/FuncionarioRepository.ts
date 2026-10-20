class FuncionarioRepository {
    private funcionarios: Funcionario[] = [];

    salvar(funcionario: Funcionario): void {
        this.funcionarios.push(funcionario);
    }

    consultarFuncionarios(): void {
        console.log("--- RELATÓRIO GERAL DE FUNCIONÁRIOS ---");
        console.log(this.funcionarios);
    }

    consultarTrabalhando(): void {
        console.log("--- FUNCIONÁRIOS TRABALHANDO ---");
        console.log(this.funcionarios);
    }

    consultarSalarios(): void {
        console.log("--- RELATÓRIO DE SALÁRIOS A PAGAR ---");
    
        for (let i = 0; i < this.funcionarios.length; i++) {
            let func = this.funcionarios[i];

            if (func.tipo == "contratado") {
               
                let funcContratado = func as any; 
                console.log("Funcionário: " + func.nome + " | Salário Fixo: R$ " + funcContratado.salarioFixo);
            } else {
                let funcFreelancer = func as any;
                let totalFreelancer = funcFreelancer.valorPorHora * funcFreelancer.horasTrabalhadas;
                console.log("Freelancer: " + func.nome + " | Salário por Horas: R$ " + totalFreelancer);
            }
        }
    }

    consultarContratoFreelancer(): void {
        console.log("--- RELATÓRIO DE CONTRATOS FREELANCER ---");
        
        for (let i = 0; i < this.funcionarios.length; i++) {
            let func = this.funcionarios[i];

            if (func.tipo == "freelancer") {
                let funcFreelancer = func as any;
                console.log("Freelancer: " + func.nome);
                console.log("> Início do Contrato: " + funcFreelancer.inicioContrato);
                console.log("> Fim do Contrato: " + funcFreelancer.fimContrato);
                console.log("> Status: Contrato Ativo");
                console.log("---------------------------------------");
            }
        }
    }
}
