function dividirLucro(lucroTotal) {
    const quantidadeSocios = 3;
    let valorPorSocio = lucroTotal / quantidadeSocios;

    return {
        lucroTotal: lucroTotal,
        quantidadeSocios: quantidadeSocios,
        valorPorSocio: valorPorSocio
    };
}

function acaoDividir() {
    const inputLucro = document.getElementById('lucroTotal');
    const containerResultado = document.getElementById('resultadoDivisao');
    
    const valorDigitado = parseFloat(inputLucro.value);

    if (isNaN(valorDigitado) || valorDigitado <= 0) {
        alert("Por favor, informe um valor de lucro válido.");
        return;
    }

    const resultado = dividirLucro(valorDigitado);

    const formatar = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    document.getElementById('resTotal').innerText = formatar(resultado.lucroTotal);
    document.getElementById('resIndividual').innerText = formatar(resultado.valorPorSocio);

    containerResultado.style.display = 'block';
}

document.getElementById('btnDividir').addEventListener('click', acaoDividir);

if (typeof module !== 'undefined' && module.exports) {
    module.exports = dividirLucro;
}