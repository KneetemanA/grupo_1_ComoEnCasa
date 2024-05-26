window.addEventListener("load", function () {

   const formLogin = document.querySelector(".formLogin");
   const spanLogin = document.querySelector(".spanFormLogin");
   const userLogin = document.querySelector(".inputLogin");
   const contrasenaLogin = document.querySelector(".inputContrasena");

   let hayErrores = false;

   if (userLogin) {
       userLogin.addEventListener("input", function () {
           validaciones.validarVacio(userLogin, document.querySelector(".spanFormLogin"), "El usuario es requerido");
           hayErrores = userLogin.classList.contains("is-invalid");
       });
   }

   if (contrasenaLogin) {
       contrasenaLogin.addEventListener("input", function () {
           validaciones.validarVacio(contrasenaLogin, document.querySelector(".spanContrasenaLogin"), "La contraseña es requerida");
        //    validaciones.contrasenaCorta(contrasenaLogin, document.querySelector(".spanContrasenaLogin2"), "");

           hayErrores = contrasenaLogin.classList.contains("is-invalid");
       });
   }

   formLogin.addEventListener("submit", function (event) {
       const inputUser = userLogin.value?.trim();
       const inputContrasena = contrasenaLogin.value?.trim();
       event.preventDefault();
       switch (true) {
           case !inputUser:
           case !inputContrasena:
               hayErrores = true;
               spanLogin.classList.remove("d-none");
               spanLogin.classList.add("d-block");
               spanLogin.innerText = "*Rellena los campos";
               userLogin.classList.add("is-invalid");
               contrasenaLogin.classList.add("is-invalid");
               break;
       }
       if (!hayErrores) {
           this.submit();
       }
   });
});
