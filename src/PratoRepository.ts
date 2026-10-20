class PratoRepository {
    private pratos: Prato[] = [];

    salvar(prato: Prato): void {
        this.pratos.push({
            nome: prato.nome,
            validade: prato.validade,
            nacionalidade: prato.nacionalidade
        });
    }

    consultarPratos(): void {
        console.log("--- RELATÓRIO DE PRATOS ---");
        console.log(this.pratos);
    }
}
