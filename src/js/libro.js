document.addEventListener("DOMContentLoaded", function () {
  const complaintsForm = document.getElementById("complaintsForm");

  if (complaintsForm) {
    complaintsForm.addEventListener("submit", function (event) {
      const tipoDocumento = document.getElementById("tipoDocumento").value;
      const documento = document.getElementById("documento").value;

      // Validaciones específicas para cada tipo de documento
      if (tipoDocumento === "DNI" && documento.length !== 8) {
        event.preventDefault();
        alert("El DNI debe tener 8 caracteres.");
        return;
      } else if (tipoDocumento === "RUC" && documento.length !== 11) {
        event.preventDefault();
        alert("El RUC debe tener 11 caracteres.");
        return;
      } else if (tipoDocumento === "PASAPORTE" && documento.length !== 12) {
        event.preventDefault();
        alert("El Pasaporte debe tener 12 caracteres.");
        return;
      }

      // Verificar si el checkbox está marcado
      const verificationCheckbox = document.getElementById("verification");
      if (!verificationCheckbox.checked) {
        event.preventDefault();
        alert(
          "Debe marcar la opción de verificación para poder enviar el mensaje."
        );
      }
    });
  } else {
    console.error('No se encontró el formulario con el ID "complaintsForm".');
  }
});
