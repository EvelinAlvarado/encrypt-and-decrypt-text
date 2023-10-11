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
    // Create a regular expression to find the substitution and use the "g" flag to match all instances.
    var regex = new RegExp(substitutionVowels[key], "g");

    // Replace all instances of the substitution with the original vowel using the regular expression.
    message = message.replace(regex, key);
  }

  // Return the decrypted message with substitutions reversed.
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
