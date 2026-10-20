function main(): void {
    const lasanha = new Prato("Lasanha", "24/10/2026", "Italiana");
    const feijoada = new Prato("Feijoada", "22/10/2026", "Brasileira");

    const rafaella = new Contratado(
        "Rafaella Rosa",
        "Feminino",
        "10/05/2025",
        "461.836.528-57",
        "12.345.678-9",
        2800
    );

    const caua = new Freelancer(
        "Caua Silveira",
        "Masculino",
        "01/10/2026",
        "222.222.222-22",
        "23.456.789-0",
        35,
        80,
        "01/10/2026",
        "31/12/2026"
    );

    const entrega = new Entrega(
        "20/11/2026, 11:30:00",
        1042,
        "Rua dos Estudantes, 123"
    );

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