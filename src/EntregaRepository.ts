class EntregaRepository {
    private entregas: Entrega[] = [];

    salvar(entrega: Entrega): void {
        this.entregas.push({
            dataHoraSaida: entrega.dataHoraSaida,
            numeroPedido: entrega.numeroPedido,
            endereco: entrega.endereco
        });
    }

    consultarEntregas(): void {
        console.log(this.entregas);
    }
}
