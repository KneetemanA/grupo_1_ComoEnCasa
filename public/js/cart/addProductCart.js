const { default: Swal } = require("sweetalert2")

const createAlert = ({type, name, timer}) =>{
    Swal.fire({
        position: "top-end",
        icon: type,
        name,
        showConfirmButton: false,
        timer
    })
}

toastr.option = {
"closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-bottom-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}


const addProductCart = async (id) => {
    const server = "http//localhost:3030"
    try {
        const { ok, msg } = await fetch(`${server}/api/cart/add/${id}?idUser=2`, {
          method: "PATCH",
        }).then((res) => res.json());
    
        ok && 
        toastr["success"]("Producto agregado al carrito con éxito")
      } catch (error) {
        console.error(error.message);
      }
}