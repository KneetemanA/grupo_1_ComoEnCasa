
window.addEventListener("load", function () {
    const formRegistro = document.querySelector("#formularioRegistro");
    const spanForm=this.document.querySelector(".spanForm")
    const allInput=document.querySelectorAll("input");
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
        allInput.forEach((input)=>{
            input.classList.add("is-invalid")
        })
     break;
    }
    if(!hayErrores){
        this.submit()
    }
    
    })


    
});

  