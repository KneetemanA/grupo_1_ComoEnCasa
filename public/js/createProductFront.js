const inputTitulo = document.querySelector("#titulo");
const inputPrecio = document.querySelector("#precio");
const inputDescuento = document.querySelector("#descuento")
const inputDetail = document.querySelector("#exampleTextarea");
const inputFile = document.querySelector("#fotoproducto");

window.addEventListener("load", () => {
  let existError = true;

  inputTitulo.addEventListener("blur", function () {
    const value = this.value.trim();
    const errorTitle = document.querySelector(".error-titulo");
    
    switch (true) {
      case value.length === 0:
        errorTitle.innerHTML = "El campo debe rellenarse";
        this.classList.add("is-invalid");
        break;

      case value.length < 5 || value.length > 100:
        errorTitle.innerHTML = "El titulo debe contener entre 5 y 50 caracteres";
        this.classList.add("is-invalid");
        break;

      default:
        errorTitle.innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        existError = false;
        break;
    }
  });

  inputTitulo.addEventListener("focus", function () {
    this.classList.remove("is-valid");
    this.classList.remove("is-invalid");
    errorTitle.innerHTML = null;
  });
});
  
  inputPrecio.addEventListener("blur", function () {
  
  const errorPrecio = document.querySelector(".error-precio");  
  
  switch (true) {
      case this.value.length === 0:
        errorPrecio.innerHTML = "El precio es requerido";
        this.classList.add("is-invalid");
        break;
      case isNaN(this.value):
        errorPrecio.innerHTML = "El precio debe ser numérico";
        this.classList.add("is-invalid");
        break;
      case +this.value < 0:
        errorPrecio.innerHTML = "El precio debe tener un valor positivo";
        this.classList.add("is-invalid");
        break;
      default:
        errorPrecio.innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        existError = false;
        break;
    }
  });

  inputPrecio.addEventListener("focus", function () {
    this.classList.remove("is-valid");
    this.classList.remove("is-invalid");
    errorPrecio.innerHTML = null;
  });

  
  inputPrecio.addEventListener("blur", function () {
    const errorDescuento = document.querySelector(".error-descuento");
    
    switch (true) {
      case this.value.length === 0:
        errorDescuento.innerHTML = "El descuento es requerido";
        this.classList.add("is-invalid");
        break;
      case isNaN(this.value):
        errorDescuento.innerHTML = "El descuento debe ser numérico";
        this.classList.add("is-invalid");
        break;
    }

    inputDescuento.addEventListener("focus", function () {
      this.classList.remove("is-valid");
      this.classList.remove("is-invalid");
      errorDescuento.innerHTML = null;
    });

  inputDetail.addEventListener("blur", function () {
   
    const value = this.value.trim();
    const errorDetail = document.querySelector(".error-detail");
    const exRegAlfanumeric = /^[a-zA-Z0-9\s]*$/;

    switch (true) {
      case value.length === 0:
        errorDetail.innerHTML = "La descripción es requerido";
        this.classList.add("is-invalid");
        break;

      case !exRegAlfanumeric.test(value):
        errorDetail.innerHTML = "La descripción debe ser alfanumérico";
        this.classList.add("is-invalid");
        break;

      case value.length < 30 || value.length > 500:
        errorDetail.innerHTML =
          "El detalle del producto debe tener un mínimo de 30 y un máximo de 500 caracteres";
        this.classList.add("is-invalid");
        break;

      default:
        errorDetail.innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        existError = false;
        break;
    }
  });

  inputDetail.addEventListener("focus", function () {
    this.classList.remove("is-valid");
    this.classList.remove("is-invalid");or
    errDetail.innerHTML = null;
  });
 
  inputFile.addEventListener("change", function () {
    const regExpFiles = /.png|.jpg|.jpeg|.webp|.gif/i;
    const files = Array.from(this.files);
    const errorImg = document.querySelector(".error-file");
    
    switch (true) {
      case !files.length:
        errorImg.innerHTML = "Ingrese una imagen";
        this.classList.add("is-invalid");
        break;

      case files.length > 1:
        errorImg.innerHTML = "No puedes ingresar más de 1 archivo";
        this.classList.add("is-invalid");
        break;

      case files.some(file => !regExpFiles.test(file.name)):
        errorImg.innerHTML = "El formato de la imagen es invalido";
        this.classList.add("is-invalid");
        break;
    
      default:
        errorImg.innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        existError = false;
        break;
    }
  })

  inputFile.addEventListener("blur", function () {
    const files = Array.from(this.files);

    switch (true) {
      case !files.length:
        errorImg.innerHTML = "Debes ingresar una imagen principal";
        this.classList.add("is-invalid");
        break;
      default:
        errorImg.innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        existError = false;
        break;
    }
  });

  /* FORMULARIO */
  const formCreate = document.querySelector("#form-create");
  const errFormGeneral = document.querySelector(".err-form-general");
  const fieldsRequired = document.querySelectorAll(".field-required");
  
  formCreate.addEventListener("submit", function (event) {
    const isTitulo = inputTitulo.value?.trim();
    const isPrecio = inputPrecio.value?.trim();
    const isDescuento = inputDescuento.value?.trim();
    const isDetail = inputDetail.value?.trim();
    const isImage = inputFile.files.length;
    
    event.preventDefault();

    switch (true) {
      case !isTitulo:
      case !isPrecio:
      case !isDescuento:
      case !isDetail:
      case !isImage:

        existError = true;
        errFormGeneral.innerHTML = "Todos los campos son requeridos";
        errFormGeneral.classList.add("alert","alert-danger");
        fieldsRequired.forEach(field => {
          field.innerHTML = "*";
        });
        break;
    }

    if (!existError) {
      this.submit();
    }
  })
})