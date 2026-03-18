function converterMoeda(valorUSD, cotacao) {
     
  let valorBRL = valorUSD * cotacao;
  
    return {
        valorUSD: valorUSD,
        cotacao: cotacao,
        valorBRL: valorBRL
      };
  }
  
  const usdUsuario = Number(prompt("Informe o valor do produto em dólar (USD):"));
  const cotacaoUsuario = Number(prompt("Informe a cotação atual do dólar:"));
  const resultado = converterMoeda(usdUsuario, cotacaoUsuario);
  
 alert(`Valor em Dólar: US$ ${resultado.valorUSD.toFixed(2)}
   Cotação Utilizada: R$ ${resultado.cotacao.toFixed(2)}
   Total em Reais: R$ ${resultado.valorBRL.toFixed(2)}`);

 