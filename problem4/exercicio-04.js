function calcularVendaComFrete(valorProdutos) {
    const frete = 20;
    let valorTotal = valorProdutos + frete;

    return {
        valorProdutos: valorProdutos,
        frete: frete,
        valorTotal: valorTotal
    };
}

function tratarClique() {
    const input = document.getElementById('valorProdutos');
    const boxResultado = document.getElementById('resultadoVenda');
    
    const valorDigitado = parseFloat(input.value);

    if (isNaN(valorDigitado) || valorDigitado < 0) {
        alert("Por favor, insira um valor válido para os produtos.");
        return;
    }

    const resultado = calcularVendaComFrete(valorDigitado);

    const formatarBRL = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    document.getElementById('resSubtotal').innerText = formatarBRL(resultado.valorProdutos);
    document.getElementById('resFrete').innerText = formatarBRL(resultado.frete);
    document.getElementById('resTotal').innerText = formatarBRL(resultado.valorTotal);

    boxResultado.style.display = 'block';
}

document.getElementById('btnCalcular').addEventListener('click', tratarClique);