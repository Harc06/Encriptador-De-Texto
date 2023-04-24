// Ocultar área de texto encriptado al inicio
document.getElementById("area-texto-encriptado").style.display = "none";

// Función para encriptar texto
function encriptar() {
  // Obtener el valor del campo de texto original
  let texto = document.getElementById("texto").value;
  let mayusculas = /[A-Z]/;
  let acentos = /[áéíóú]/;
  

  // Verificar que se haya ingresado un texto
  if (texto === "") {
    alert("Debes ingresar un texto");
  } else if (
    mayusculas.test(document.getElementById("texto").value) ||
    acentos.test(document.getElementById("texto").value)
  ) {
    alert("No puedes usar mayusculas ni acentos");
  } else {
    // Reemplazar vocales por palabras encriptadas
    let textoEncriptado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");

    // Mostrar el área de texto encriptado y asignar el valor encriptado al campo correspondiente
    document.getElementById("contenido-pantalla-encriptado").style.display =
      "none";
    document.getElementById("area-texto-encriptado").style.display = "block";
    document.getElementById("mensaje-encriptado").value = textoEncriptado;
  }
}

// Función para desencriptar texto
function desencriptar() {
  // Obtener el valor del campo de texto encriptado
  let textoEncriptado = document.getElementById("texto").value;

  // Verificar que se haya encriptado un mensaje previamente
  if (textoEncriptado === "") {
    alert("Debes agregar un texto encriptado para poder desencriptar.");
  } else {
    // Reemplazar palabras encriptadas por vocales
    let textoDesencriptado = textoEncriptado
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");

    // Asignar el valor desencriptado al campo correspondiente
    document.getElementById("mensaje-encriptado").value = textoDesencriptado;
  }
}

// Función para copiar el texto encriptado al portapapeles
function copiar() {
  let texto = document.getElementById("mensaje-encriptado");
  texto.select();
  document.execCommand("copy");
  document.getElementById("texto").value="";
  document.getElementById("mensaje-encriptado").value="";
  document.getElementById("texto").focus();
}