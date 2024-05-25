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
        
    },
    contrasenaCorta: function(contrasenainput, contrasenaspan, mensaje) {
      const contrasenaSinEspacios = contrasenainput.value.trim();
      
      if (contrasenaSinEspacios.length <= 8 ) {
          contrasenainput.classList.add("is-invalid");
          contrasenaspan.innerText = mensaje;
          contrasenaspan.classList.remove("d-none");
      } else {
          contrasenainput.classList.remove("is-invalid");
          contrasenainput.classList.add("is-valid");
          contrasenaspan.classList.add("d-none");
      }
  }
    
   

    

}

module.exports = validaciones;