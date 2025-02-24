function gerarConsumo() {
    return Math.floor(Math.random() * (500 - 200 + 1) + 200);
}

function gerarDadosConsumo() {
    const hoje = new Date()
    const dados = []

    for (let i = 0; i < 6; i++) {
        const mes = new Date(hoje)
        const id = i + 1
        mes.setMonth(hoje.getMonth() - i)
        for (let j = 0; j < 6; j++) {
            dados.push({
                usuarioId: id,
                data: mes.toISOString(),
                consumo_kwh: gerarConsumo()
            })
        }
    }
    return dados
}

export default gerarDadosConsumo