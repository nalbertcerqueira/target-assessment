//Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA). Ao final do processamento, qual será o valor da variável SOMA?

function soma(): number {
  const indice = 12;
  let soma = 0;
  let k = 1;

  while (k < indice) {
    k++;
    soma += k;
  }

  return soma;
}
console.log(`A soma é igual ${soma()}`);

//RESPOSTA: O valor da soma será de 77.
