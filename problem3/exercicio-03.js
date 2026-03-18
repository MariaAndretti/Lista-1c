
function calcularImposto(precoOriginal) {

    let percentualImposto = 0.12;
    let valorImposto = precoOriginal * percentualImposto;
    let precoFinal = precoOriginal + valorImposto;

    return {
        precoOriginal: precoOriginal,
        percentualImposto: percentualImposto,
        valorImposto: valorImposto,
        precoFinal: precoFinal
    };
}

const valorUsuario = Number(prompt("Informe o preço original do produto:"));
const resultado = calcularImposto(valorUsuario);

alert("Preço Original: R$" + resultado.precoOriginal.toFixed(2) + "\n" +
      "Valor do Imposto de 12%: R$" + resultado.valorImposto.toFixed(2) + "\n" +
      "Preço Final: R$" + resultado.precoFinal.toFixed(2));

