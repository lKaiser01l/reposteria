const btnSignIn = document.getElementById("sign-in"),
      btnSignUp = document.getElementById("sign-up"),
      containerFormRegister = document.querySelector(".register"),
      containerFormLogin = document.querySelector(".login");

// Alternar entre formularios
btnSignIn.addEventListener("click", () => {
    containerFormRegister.classList.add("hide");
    containerFormLogin.classList.remove("hide");
});

btnSignUp.addEventListener("click", () => {
    containerFormLogin.classList.add("hide");
    containerFormRegister.classList.remove("hide");
});

// Validar formulario de registro
document.addEventListener("DOMContentLoaded", () => {
    const formRegister = document.querySelector(".form-register");

    formRegister.addEventListener("submit", function(event) {
        if (!this.checkValidity()) {
            event.preventDefault();
            alert("Por favor, completa todos los campos correctamente.");
        }
        // Si es válido, deja que el formulario se envíe normalmente
        // El redireccionamiento lo hará el PHP si el registro fue exitoso
    });
});


 
 