document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = form.nombre.value.trim();
    const email = form.email.value.trim();
    const phone = form.numero.value.trim();
    const message = form.mensaje.value.trim();

    if (!name) return alert("Por favor, ingresa tu nombre.");
    if (!email) return alert("Por favor, ingresa tu correo electrónico.");
    if (!phone) return alert("Por favor, ingresa tu número de teléfono.");
    if (!message) return alert("Por favor, escribe tu mensaje.");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) return alert("Por favor, ingresa un correo válido.");
    if (phone.length < 9) return alert("El número de teléfono debe tener al menos 9 dígitos.");

    const data = {
      nombre: name,
      email: email,
      numero: phone,
      mensaje: message
    };

    console.log("Datos enviados:", data); // 👈 verifica en consola del navegador

    try {
      const response = await fetch("/api/contacto/guardar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
      });

      const result = await response.text();
      if (response.ok) {
        alert(result); // Mensaje de éxito
        form.reset();
      } else {
        alert("⚠️ Error: " + result); // Mensaje de validación del backend
      }
    } catch (error) {
      console.error("❌ Error de red:", error);
      alert("Hubo un error al enviar el mensaje.");
    }
  });
});
