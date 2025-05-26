// Función de traducción del lenguaje legal al lenguaje del pueblo
function traducirLenguajeLegal(textoLegal) {
  const traducciones = {
    "derecho civil": "leyes que rigen las relaciones entre personas",
    "contrato": "acuerdo entre dos o más personas",
    "jurisprudencia": "decisiones judiciales que sirven como precedente",
    // Agregamos más términos legales y sus traducciones aquí
  };

  return textoLegal.replace(/palabra|contrato|derecho civil|jurisprudencia/gi, function(palabra) {
    return traducciones[palabra.toLowerCase()] || palabra;
  });
}

// Función para generar la respuesta del chatbot
function generarRespuesta(pregunta) {
  let respuesta = "";

  // Llamamos a la función de traducción para traducir el texto legal
  if (pregunta.toLowerCase().includes("contrato")) {
    respuesta = traducirLenguajeLegal(conocimientoJuridico.derechoCivil.contratos.respuesta);
  } else if (pregunta.toLowerCase().includes("derecho civil")) {
    respuesta = traducirLenguajeLegal(conocimientoJuridico.derechoCivil.general.respuesta);
  } else {
    respuesta = conocimientoJuridico.general.respuesta;
  }

  return respuesta;
}

// Función para manejar el envío de la pregunta y la respuesta del chatbot
function enviarPregunta() {
  const pregunta = document.getElementById("pregunta").value;
  const respuesta = generarRespuesta(pregunta);

  document.getElementById("respuesta").innerHTML = respuesta;
}

// Evento para enviar la pregunta y mostrar la respuesta
document.getElementById("enviar").addEventListener("click", enviarPregunta);