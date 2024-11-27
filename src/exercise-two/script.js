function render(html) {
    const resultBox = document.getElementById("EXERCISE_RESULT");
    resultBox.innerHTML += html;
}

/**
 * 1. Solicito los grados Celsius y lo guardo en una variable
 * 2. Convierto los grados Celsius a Fahrenheit y lo guardo en una variable
 * 3. Muestro el resultado
 */

const celsius = prompt("Introduce la temperatura en grados Celsius"); //paso 1
const fahrenheit = (celsius * 9 / 5) + 32; //paso 2
render(`
    <style>
        .result__text {
           color: #0f0f0f;
        }
    </style>

    <p class="result__text">
        ${celsius + "°C son " + fahrenheit + "°F."}
    </p>
`); //paso 3