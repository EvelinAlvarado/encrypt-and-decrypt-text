/* 
Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

Requisitos:

Debe funcionar solo con letras minúsculas
No deben ser utilizados letras con acentos ni caracteres especiales
Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.
Por ejemplo:
"gato" => "gaitober"
gaitober" => "gato"

La página debe tener campos para
inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
El resultado debe ser mostrado en la pantalla.
Extras:

Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones.
 */

/* Function to encrypt input and display the result */
/* function encryptAndDisplayResult() {
  // Capture the text from the input textarea
  const inputTexarea = document.querySelector(".textarea-input");
  const inputValue = inputTexarea.value;

  // Encrypt the input text
  const encrytedValue = encryptedMessage(inputValue);

  // Display the encrypted text in the output textarea
  const outputTextarea = document.querySelector(".textarea-output");
  outputTextarea.value = encrytedValue;

  // show display when the "Encrypt" button is clicked
  var contenidoInicial = document.querySelector(".encriptador-output-inicial");
  var contenidoEncriptado = document.querySelector(
    ".resultado-encriptador-desencriptador"
  );

  contenidoInicial.style.display = "none";
  contenidoEncriptado.style.display = "flex";
} */

function processText(encryptOrDecrypt) {
  // show display when the "Encrypt" button is clicked
  var contenidoInicial = document.querySelector(".encriptador-output-inicial");
  var contenidoEncriptado = document.querySelector(
    ".resultado-encriptador-desencriptador"
  );

  contenidoInicial.style.display = "none";
  contenidoEncriptado.style.display = "flex";

  // Capture the text from the input textarea
  const inputTexarea = document.querySelector(".textarea-input");
  const inputValue = inputTexarea.value;

  // Capture the output textarea
  const outputTextarea = document.querySelector(".textarea-output");

  if (encryptOrDecrypt === "encrypt") {
    // Encrypt the input text
    const encryptedValue = encryptedMessage(inputValue);
    // Display the encrypt text in te output textarea
    outputTextarea.value = encryptedValue;
  } else if (encryptOrDecrypt === "decrypt") {
    // Decrypt the input text (reverse the encryption)
    const decryptedValue = decryptedMessage(inputValue);
    outputTextarea.value = decryptedValue;
  }
  //console.log(encryptOrDecrypt);
}

/* Definition of an object that contains substitutions for vowels. */
const substitutionVowels = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

// Function that encrypts a message based on the substitution object.
function encryptedMessage(message) {
  return message
    .toLowerCase()
    .split("")
    .map(function (letter) {
      // Perform the substitution if the letter is defined in the substitution object,
      // otherwise, keep the original letter.
      return substitutionVowels[letter] || letter;
    })
    .join("");
}

// Function to decrypt a message based on the reverse substitutions.
function decryptedMessage(message) {
  for (var key in substitutionVowels) {
    var regex = new RegExp(substitutionVowels[key], "g");
    message = message.replace(regex, key);
  }
  return message;
}

/* Add a click event listener to the "Encrypt" button */
const botonEncriptar = document.querySelector(".boton-encriptar");
botonEncriptar.addEventListener("click", function () {
  processText("encrypt");
});

/* Add a click event listener to the "Decrypt" button */
const botonDesencriptar = document.querySelector(".boton-desencriptar");
botonDesencriptar.addEventListener("click", function () {
  processText("decrypt");
});
