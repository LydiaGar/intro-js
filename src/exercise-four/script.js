function render(html) {
  const resultBox = document.getElementById("EXERCISE_RESULT");
  resultBox.innerHTML += html;
}

/**
* 1. Solicito el nivel de contaminación y lo guardo en una variable
* 2. Determino el límite de velocidad (depende del nivel de contaminación)
* 3. Pinto el resultado
*/

// paso 1
const pollution = prompt(`Introduce el nivel de contaminación en %`);

// paso 2
let speedLimit = 90; // límite por defecto
if (pollution > 65){
  speedLimit = 70; // si la contaminación es mayor que 65%, el límite es 70km/h
}

// paso 3
render(`
  <style>
    .result__text {
      color: #0f0f0f;
    }
  </style>

  <p class="result__text">
      El límite de velocidad es ${speedLimit} km/h porque la contaminación es ${pollution}%.
  </p>
`)