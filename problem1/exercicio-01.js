function calcularJurosCompostos(valorInicial, meses) {

    const taxaMensal = 1.5 / 100;
    let valorFinalBruto = valorInicial * Math.pow((1 + taxaMensal), meses);
    let valorFinal = Number(valorFinalBruto.toFixed(2));
    let juros = Number((valorFinal - valorInicial).toFixed(2));
    
    return {
        valorInicial: valorInicial,
        meses: meses,
        valorFinal: valorFinal,
        juros: juros
    };
}


function executarSimulacao() {
    
    const inputValor = document.getElementById('valorInicial');
    const inputMeses = document.getElementById('mesesInput');
    const displayResultado = document.getElementById('resultadoGeral');
    const vInicial = parseFloat(inputValor.value);
    const tMeses = parseInt(inputMeses.value);

    if (isNaN(vInicial) || isNaN(tMeses)) {
        alert("Por favor, insira valores válidos nos campos.");
        return;
    }

    const resultado = calcularJurosCompostos(vInicial, tMeses);


    displayResultado.style.display = 'block';
    displayResultado.innerHTML = `
        <strong>Resumo:</strong><br>
         Capital Inicial: R$ ${resultado.valorInicial.toLocaleString('pt-BR', {minimumFractionDigits: 2})}<br>
         Período: ${resultado.meses} meses<br>
         Juros Acumulados: R$ ${resultado.juros.toLocaleString('pt-BR', {minimumFractionDigits: 2})}<br> <br>
        <strong>Valor Final: R$ ${resultado.valorFinal.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</strong>
    `;
}

document.getElementById('btnCalcular').addEventListener('click', executarSimulacao);