[span_1](start_span)[span_2](start_span)// Gerado com o prompt: "Crie testes unitários usando Jest para a função calcularTotalPedido"[span_1](end_span)[span_2](end_span)

const { calcularTotalPedido } = require('./index');

test('Deve aplicar desconto de 10% para 100 reais', () => {
    expect(calcularTotalPedido(100)).toBe(90);
});

test('Não deve aplicar desconto para 50 reais', () => {
    expect(calcularTotalPedido(50)).toBe(50);
});
