document.addEventListener('DOMContentLoaded', function() {
    const title = document.querySelector("#titulo");
    const price = document.querySelector("#precio");
    const discount = document.querySelector("#descuento");
    const detail = document.querySelector("#exampleTextarea");
    const file = document.querySelector("#fotoproducto");
    const exRegAlfanumeric = /^[a-zA-Z\s]*$/;

    let existeError = true;

    const invalid = (elementoError, msgError, elementoInput) => {
        elementoError.innerHTML = msgError;
        elementoInput.classList.add("is-invalid");
        existeError = true;
    };

    const valid = (elementoError, elementoInput) => {
        elementoError.innerHTML = null;
        elementoInput.classList.add("is-valid");
        elementoInput.classList.remove("is-invalid");
        existeError = false;
    };

    const errorTitle = document.querySelector(".error-titulo");
    const errorPrecio = document.querySelector(".error-precio");
    const errorDescuento = document.querySelector(".error-descuento");
    const errorDetail = document.querySelector(".error-detail");
    const errorImg = document.querySelector(".error-file");
    const formEdit = document.querySelector("#fromEditar");
    const errFormGeneral = document.querySelector(".err-form-general");
    const fieldsRequired = document.querySelectorAll(".field-required");

    title.addEventListener('blur', function() {
        const value = this.value.trim();

        switch (true) {
            case !value.length:
                invalid(errorTitle, "El campo debe rellenarse", this);
                break;
            case !exRegAlfanumeric.test(value):
                invalid(errorTitle, "El título debe ser alfanumérico", this);
                break;
            case value.length < 5 || value.length > 50:
                invalid(errorTitle, "El título debe contener entre 5 y 50 caracteres", this);
                break;
            default:
                valid(errorTitle, this);
                break;
        }
    });

    title.addEventListener('focus', function() {
        this.classList.remove('is-valid');
        this.classList.add('is-invalid');
        errorTitle.innerHTML = null;
    });

    price.addEventListener('blur', function() {
        const value = this.value.trim();

        switch (true) {
            case !value.length:
                invalid(errorPrecio, "El precio es requerido", this);
                break;
            case isNaN(value):
                invalid(errorPrecio, "El precio debe ser numérico", this);
                break;
            case value < 0:
                invalid(errorPrecio, "El precio debe ser positivo", this);
                break;
            default:
                valid(errorPrecio, this);
                break;
        }
    });

    price.addEventListener('focus', function() {
        this.classList.remove('is-valid');
        this.classList.add('is-invalid');
        errorPrecio.innerHTML = null;
    });

    discount.addEventListener('blur', function() {
        const value = this.value.trim();

        switch (true) {
            case !value.length:
                invalid(errorDescuento, "El descuento es requerido", this);
                break;
            case isNaN(value):
                invalid(errorDescuento, "El descuento debe ser numérico", this);
                break;
            default:
                valid(errorDescuento, this);
                break;
        }
    });

    discount.addEventListener('focus', function() {
        this.classList.remove('is-valid');
        this.classList.add('is-invalid');
        errorDescuento.innerHTML = null;
    });

    detail.addEventListener('blur', function() {
        const value = this.value.trim();

        switch (true) {
            case !value.length:
                invalid(errorDetail, "La descripción es requerida", this);
                break;
            case value.length < 20 || value.length > 150:
                invalid(errorDetail, "La descripción debe tener como mínimo 20 y máximo 150 caracteres", this);
                break;
            default:
                valid(errorDetail, this);
                break;
        }
    });

    detail.addEventListener('focus', function() {
        this.classList.remove('is-valid');
        this.classList.add('is-invalid');
        errorDetail.innerHTML = null;
    });

    file.addEventListener('change', function() {
        const regExpFiles = /.png|.jpg|.jpeg|.webp|.gif/i;
        const files = Array.from(this.files);

        switch (true) {
            case !files.length:
                invalid(errorImg, "Debe ingresar una imagen del producto", this);
                break;
            case files.some(file => !regExpFiles.test(file.name)):
                invalid(errorImg, "El formato de la imagen es inválido", this);
                break;
            default:
                valid(errorImg, this);
                break;
        }
    });

    formEdit.addEventListener("submit", function(e) {
        const isTitle = title.value.trim();
        const isPrice = price.value.trim();
        const isDiscount = discount.value.trim();
        const isDetail = detail.value.trim();
        const isFile = file.files.length;

        e.preventDefault();

        if (!isTitle || !isPrice || !isDiscount || !isDetail || !isFile) {
            existeError = true;
            errFormGeneral.innerHTML = "Todos los campos son requeridos";
            errFormGeneral.classList.add("alert", "alert-danger");
            fieldsRequired.forEach(field => field.innerHTML = "*");
        } else {
            existeError = false;
        }

        if (!existeError) {
            this.submit();
        }
    });
});