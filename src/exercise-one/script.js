function render(html) {
    const resultBox = document.getElementById("EXERCISE_RESULT");
    resultBox.innerHTML += html;
}

/**
 * 1. Solicito el primer string y lo guardo en una variable
 * 2. Solicito el segundo string y lo guardo en una variable
 * 3. Concateno los dos string y guardo el resultado en una variable
 * 4. Obtengo la longitud del string y lo guardo en una variable
 * 5. Pinto la variable de la longitud
 */

const firstString = prompt (`Introduce el primer string`); //paso 1

const secondString = prompt(`Introduce el segundo string`); //paso 2

const concatResult = firstString + secondString; // paso 3
render(`
    <style>
        .result__text {
           color: #0f0f0f;
        }
    </style>

    <p class="result__text">
        El resultado total es: ${concatResult.length}
    </p>
`); //paso 4 y 5


//¿Qué tipo de dato me devuelve esta operación? -> concatResult.length % 2 -> número
const isLengthEven = concatResult.length % 2 === 0;
if (isLengthEven) {
  //par
  render(`<div class="square square--even"></div>`);
} else {
  //impar
  render(`<div class="square square--odd"></div>`);
}