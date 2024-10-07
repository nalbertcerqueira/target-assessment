/**
 * Retorna o número de ocorrências da string 'A' ou 'a' para uma dada
 * entrada.
 * @param input String informada.
 * @returns
 */
function countLetterA(input: string): number {
  let counter = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "A" || input[i] === "a") {
      counter += 1;
    }
  }

  return counter;
}

function generateMessage(n: number, input: string): string {
  return `${n} ${
    n === 1 ? "ocorrência" : "ocorrências"
  } da letra 'a' ou 'A' na string '${input}'`;
}

const input1 = "Testando.";
console.log(generateMessage(countLetterA(input1), input1));

const input2 = "Ana Carolina resolveu dar uma festa.";
console.log(generateMessage(countLetterA(input2), input2));

const input3 = "Ontem fez sol. Hoje provavelmente irá chover.";
console.log(generateMessage(countLetterA(input3), input3));
