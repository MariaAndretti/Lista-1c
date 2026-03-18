// Função que processa a lógica de Juros Compostos
function calcularJurosCompostos(valorInicial, meses) {
    // 1. Define a taxa mensal de 1.5% (conforme o cálculo do seu teste)
    const taxaMensal = 1.5 / 100;

    // 2. Calcula o valor final usando a fórmula: M = P * (1 + i)^n
    // Usamos Math.pow para a potência e Number().toFixed(2) para bater com o teste
    let valorFinalBruto = valorInicial * Math.pow((1 + taxaMensal), meses);
    let valorFinal = Number(valorFinalBruto.toFixed(2));

    // 3. Calcula o valor dos juros ganhos
    let juros = Number((valorFinal - valorInicial).toFixed(2));

    // 4. Retorna o objeto com os nomes de variáveis que o teste espera
    return {
        valorInicial: valorInicial,
        meses: meses,
        valorFinal: valorFinal,
        juros: juros
    };
}


if (typeof prompt !== 'undefined') {
    const vInicial = Number(prompt("Informe o valor inicial:").replace(',', '.'));
    const tMeses = Number(prompt("Informe o número de meses:"));

    const res = calcularJurosCompostos(vInicial, tMeses);

    alert(`Investimento:
    - Inicial: R$ ${res.valorInicial.toFixed(2)}
    - Meses: ${res.meses}
    - Juros: R$ ${res.juros.toFixed(2)}
    - Final: R$ ${res.valorFinal.toFixed(2)}`);
}
