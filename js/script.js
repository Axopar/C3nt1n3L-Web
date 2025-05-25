document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("chat-form");
  const input = document.getElementById("chat-input");
  const messagesContainer = document.getElementById("chat-messages");
  const typingIndicator = document.getElementById("typing-indicator");

  // Autoajustar altura del textarea
  input.addEventListener("input", () => {
    input.style.height = "auto";
    input.style.height = input.scrollHeight + "px";
  });

  // Envío de mensaje
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const message = input.value.trim();

    if (message !== "") {
      appendMessage("user", message);
      input.value = "";
      input.style.height = "auto";

      simulateResponse(message);
    }
  });

  // Agrega el mensaje al contenedor
  function appendMessage(sender, text) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender === "user" ? "user" : "sofia");

    const content = document.createElement("p");
    content.textContent = text;

    messageDiv.appendChild(content);
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Simulación de respuesta de Sofía
  function simulateResponse(userInput) {
    showTyping();

    setTimeout(() => {
      hideTyping();
      const response = generateResponse(userInput);
      appendMessage("sofia", response);
    }, 1200);
  }

  // Mostrar indicador de escritura
  function showTyping() {
    typingIndicator.classList.add("active");
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Ocultar indicador de escritura
  function hideTyping() {
    typingIndicator.classList.remove("active");
  }

  // Simulación lógica de respuesta (aquí puede integrarse backend/IA)
  function generateResponse(userInput) {
    // Aquí puedes conectar a una API o usar lógica local
    return `Sofía ha recibido tu consulta: "${userInput}". En breve te ofrecerá una respuesta jurídica clara, estructurada y contundente.`;
  }
});
