
function iniciarSistema() {

  // --- 1. ENTRADA Y VALIDACIÓN DEL NOMBRE ---
  const nombre = prompt("Por favor, ingresa tu nombre:");

  // Manejo de error: Si el usuario cancela, deja vacío o solo ingresa espacios
  if (nombre === null || nombre.trim() === "") {
    console.error("Error de entrada: El nombre no puede estar vacío.");
    alert("Error: Por favor, ingresa un nombre válido para continuar.");
    return;
  }


  // --- 2. ENTRADA Y VALIDACIÓN DE LA EDAD ---
  const edadEntrada = prompt("Por favor, ingresa tu edad:");

  // Manejo de error: Si el usuario cancela o deja el campo vacío
  if (edadEntrada === null || edadEntrada.trim() === "") {
    console.error("Error de entrada: No se proporcionó ninguna edad.");
    alert("Error: La edad es un dato obligatorio.");
    return;
  }

  // Convertimos el texto ingresado a un tipo de dato numérico
  const edad = Number(edadEntrada);

  // Manejo de error: Si el valor no es un número válido (NaN)
  if (isNaN(edad)) {
    console.error("Error: Por favor, ingresa una edad válida en números.");
    alert("Error: El valor introducido para la edad no es un número.");
    return;
  }

  // Manejo de error: Si la edad es un número negativo o irreal (ej. mayor a 120 años)
  if (edad < 0 || edad > 120) {
    console.error(`Error: Edad fuera de rango (${edadEntrada}).`);
    alert("Error: Por favor, ingresa una edad lógica y real.");
    return;
  }


  // --- 3. PROCESAMIENTO DE DATOS (Si todo es correcto) ---
  if (edad < 18) {
    const mensajeMenor = `Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`;
    console.log(mensajeMenor);
    alert(mensajeMenor);
  } else {
    const mensajeMayor = `Hola ${nombre}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`;
    console.log(mensajeMayor);
    alert(mensajeMayor);
  }
}
const botonIniciar = document.getElementById("btnEjecutar");
botonIniciar.addEventListener("click", iniciarSistema);
