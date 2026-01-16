[span_0](start_span)// Gerado com o prompt: "Crie uma função em Node.js que calcula o total de um pedido aplicando um desconto de 10% se o valor for acima de 100 reais"[span_0](end_span)

function calcularTotalPedido(valorBase) {
    if (valorBase >= 100) {
        return valorBase * 0.9; // Aplica 10% de desconto
    }
    return valorBase;
}

module.exports = { calcularTotalPedido };
