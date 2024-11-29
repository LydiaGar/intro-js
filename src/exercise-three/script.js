function render(html) {
  const resultBox = document.getElementById("EXERCISE_RESULT");
  resultBox.innerHTML += html;
}

/**
* 1. Solicito el peso y lo guardo en una variable
* 2. Solicito la altura y la guardo en una variable
* 3. Calculo el IMC y guardo el resultado en una variable
* 4. Determino si es obesidad de clase II
* 5. Pinto el resultado
*/

// paso 1
const weight = prompt(`Introduce tu peso en kg`);

// paso 2
const heightCm = prompt(`Introduce tu altura en centímetros`);

// paso 3
const height = heightCm / 100; // conversión a metros
const imc = weight / (height * height); // cálculo del IMC

// paso 4
let resultadoIMC;
if (imc >= 35 && imc < 40) {
  resultadoIMC = `Tu IMC es ${imc.toFixed(2)}: Obesidad de clase II`;
} else {
  resultadoIMC = `Tu IMC es ${imc.toFixed(2)}: No es obesidad de clase II`;
}

// paso 5
render(`
  <style>
      .result__text {
        color: #0f0f0f;
      }
  </style>

  <p class="result__text">
      ${resultadoIMC}
  </p>
`);