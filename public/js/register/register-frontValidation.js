//FUNCIONES
const validaciones={
    validarVacio: function (nombreinput, nombrespan,mensaje) {
        if (nombreinput.value.trim() === "") {
            nombreinput.classList.add("is-invalid");
          nombrespan.innerText = mensaje;
          nombrespan.classList.remove("d-none");
        } else {
          nombrespan.classList.add("d-none");
          nombreinput.classList.remove("is-invalid");
          nombreinput.classList.add("is-valid");
        }
      },
    validarCaracteres: function (nombreinput, nombrespan, mensaje) {
        if (nombreinput.value.length < 5 || nombreinput.value.length > 16) {
            nombreinput.classList.add("is-invalid");
            nombrespan.innerText = mensaje;
          nombrespan.classList.remove("d-none");
        } else {
          nombrespan.classList.add("d-none");
        }
    },
    caracteresPermitidos: function (nombreinput, nombrespan, mensaje) {
        if (!/^[a-zA-Z]+$/.test(nombreinput.value)) {
            nombreinput.classList.add("is-invalid");
            nombrespan.innerText = mensaje;
          nombrespan.classList.remove("d-none");
        } else {
          nombrespan.classList.add("d-none");
        }
    },
    validarEmail: function (emailinput, emailspan, mensaje) {
        if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(emailinput.value)) {
            emailinput.classList.add("is-invalid");
            emailspan.innerText = mensaje;
          emailspan.classList.remove("d-none");
        } else {
          emailinput.classList.remove("is-invalid");
          emailinput.classList.add("is-valid");
          emailspan.classList.add("d-none");
        }
    },
    validarContrasena: function(contrasenainput, contrasenaspan, mensaje) {
        const contrasenaSinEspacios = contrasenainput.value.trim();
        
        if (contrasenaSinEspacios.length < 8 || contrasenaSinEspacios.length > 20) {
            contrasenainput.classList.add("is-invalid");
            contrasenaspan.innerText = mensaje;
            contrasenaspan.classList.remove("d-none");
        } else {
            contrasenainput.classList.remove("is-invalid");
            contrasenainput.classList.add("is-valid");
            contrasenaspan.classList.add("d-none");
        }
    },
    caracterEspecial: function (contrasenainput, contrasenaspan, mensaje) {
        if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(contrasenainput.value)) {
            contrasenainput.classList.add("is-invalid");
            contrasenaspan.innerText = mensaje;
            contrasenaspan.classList.remove("d-none");
        } else {
            contrasenainput.classList.remove("is-invalid");
            contrasenainput.classList.add("is-valid");
            contrasenaspan.classList.add("d-none");
        }
    
    },
    validarImagen: function (imageninput, imagenspan, mensaje) {
        if (imageninput.value === "") {
            imageninput.classList.add("is-invalid");
            imagenspan.innerText = mensaje;
            imagenspan.classList.remove("d-none");
        } else {
            imageninput.classList.remove("is-invalid");
            imageninput.classList.add("is-valid");
            imagenspan.classList.add("d-none");
        }
    }
    
   

    

}

  



window.addEventListener("load", function () {
    const formRegistro = document.querySelector("#formularioRegistro");
    const spanForm=this.document.querySelector(".spanForm")

    const nombreRegistro = document.querySelector("#nombreRegister");
    const usuarioRegistro = document.querySelector("#usuarioRegister");
    const emailRegistro = document.querySelector("#emailRegister");
    const contrasenaRegistro = document.querySelector("#contrasenaRegister");
    const imagenRegistro = document.querySelector("#fotoperfil");
    
    
    let hayErrores = false;


if (nombreRegistro) {
        nombreRegistro.addEventListener("input", function () {
            validaciones.validarVacio(nombreRegistro, document.querySelector(".spanNombre"), "El nombre es requerido");
            validaciones.validarCaracteres(nombreRegistro, document.querySelector(".spanNombre2"), "El nombre debe tener entre 5 y 16 caracteres");
            validaciones.caracteresPermitidos(nombreRegistro, document.querySelector(".spanNombre3"), "El nombre solo puede contener letras");
            hayErrores = nombreRegistro.classList.contains("is-invalid");
        });
    }

    if (usuarioRegistro) {
        usuarioRegistro.addEventListener("input", function () {
            validaciones.validarVacio(usuarioRegistro, document.querySelector(".spanUsuario"), "El usuario es requerido");
            validaciones.validarCaracteres(usuarioRegistro, document.querySelector(".spanUsuario2"), "El usuario debe tener entre 5 y 16 caracteres");
            validaciones.caracteresPermitidos(usuarioRegistro, document.querySelector(".spanUsuario3"), "El usuario solo puede contener letras");
            hayErrores = usuarioRegistro.classList.contains("is-invalid");
        });
    }

    if (emailRegistro) {
        emailRegistro.addEventListener("input", function () {
            validaciones.validarEmail(emailRegistro, document.querySelector(".spanEmail"), "El email no es válido");
            hayErrores = emailRegistro.classList.contains("is-invalid");
        });
    }

    if (contrasenaRegistro) {
        contrasenaRegistro.addEventListener("input", function () {
            validaciones.validarVacio(contrasenaRegistro, document.querySelector(".spanContrasena"), "La contraseña es requerida");
            validaciones.validarContrasena(contrasenaRegistro, document.querySelector(".spanContrasena2"), "La contraseña debe tener entre 8 y 20 caracteres.");
            validaciones.caracterEspecial(contrasenaRegistro, document.querySelector(".spanContrasena3"), "La contraseña debe tener al menos un caracter especial");
            hayErrores = contrasenaRegistro.classList.contains("is-invalid");
        });
    }

    if (imagenRegistro) {
        imagenRegistro.addEventListener("input", function () {
            validaciones.validarImagen(imagenRegistro, document.querySelector(".spanImag"), "La imagen es requerida");
            hayErrores = imagenRegistro.classList.contains("is-invalid");
        });
    }



    formRegistro.addEventListener("submit",function(event){
        const inputNombre = nombreRegistro.value?.trim();
        const inputUsuario = usuarioRegistro.value?.trim();
        const inputEmail = emailRegistro.value?.trim();
        const inputContrasena = contrasenaRegistro.value?.trim();
        const inputImagen = imagenRegistro.value?.trim();
        event.preventDefault();
    
    switch(true){
        case !inputNombre:
        case !inputUsuario:
        case !inputEmail:
        case !inputContrasena:
        case !inputImagen: 
             
        hayErrores=true;
        spanForm.classList.remove("d-none")
        spanForm.classList.add("d-block")
        spanForm.innerText=("*Rellena los campos")
     break;
    }
    if(!hayErrores){
        this.submit()
    }
    
    })


    
});

  