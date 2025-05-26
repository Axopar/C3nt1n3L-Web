// Función de traducción del lenguaje legal al lenguaje del pueblo
function traducirLenguajeLegal(textoLegal) {
  const traducciones = {
    "derecho civil": "leyes que rigen las relaciones entre personas",
    "contrato": "acuerdo entre dos o más personas",
    "jurisprudencia": "decisiones judiciales que sirven como precedente",
    const traducciones = {
  // Términos legales adicionales
  "abogado": "profesional del derecho que representa a clientes en juicios y asuntos legales",
  "acuerdo": "entendimiento entre dos o más partes que establece términos y condiciones",
  "apelación": "recurso legal para impugnar una decisión judicial",
  "autoridad judicial": "órgano que ejerce la función de administrar justicia",
  "código civil": "conjunto de leyes que regulan las relaciones entre personas",
  "contrato laboral": "acuerdo entre un empleador y un empleado que establece términos y condiciones de trabajo",
  "demandante": "persona que inicia un juicio o proceso legal",
  "demandado": "persona contra la que se inicia un juicio o proceso legal",
  "derecho constitucional": "rama del derecho que se ocupa de la interpretación y aplicación de la constitución",
  "derecho penal": "rama del derecho que se ocupa de los delitos y sus consecuencias",
  "derechos humanos": "conjunto de derechos fundamentales que pertenecen a todas las personas",
  "documentación legal": "conjunto de documentos que se requieren para un proceso legal",
  "empleado": "persona que trabaja para otra persona o empresa",
  "empleador": "persona o empresa que contrata a un empleado",
  "estado de derecho": "sistema en el que el Estado se rige por leyes y principios jurídicos",
  "evidencia": "hechos o pruebas que se presentan en un juicio o proceso legal",
  "firma": "signo o marca que se utiliza para autenticar un documento",
  "juicio": "proceso legal en el que se juzga a una persona o se resuelve un conflicto",
  "jurisdicción": "área geográfica en la que un tribunal o autoridad judicial tiene competencia",
  "ley": "norma o regla que se establece para regular la conducta de las personas",
  "licitación": "proceso por el que se selecciona a un proveedor o contratista",
  "mediación": "proceso en el que un tercero neutral ayuda a resolver un conflicto",
  "notario": "profesional que autentica y certifica documentos",
  "obligación": "deber o responsabilidad que una persona tiene hacia otra",
  "poder judicial": "rama del Estado que se ocupa de la administración de justicia",
  "prueba": "hecho o evidencia que se presenta para demostrar algo",
  "reclamación": "demanda o petición que se hace para obtener algo",
  "reglamento": "norma o regla que se establece para regular una actividad o conducta",
  "sentencia": "decisión final de un tribunal en un juicio o proceso legal",
  "testigo": "persona que da testimonio en un juicio o proceso legal",
  "tribunal": "órgano que ejerce la función de administrar justicia",
};
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