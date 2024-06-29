
const $ = (element) => document.querySelector(element);

//Const para la descripción
const cutText = (text = "", long) => text.substring(0, long) + "...";

//const para convertir
const convertMoney = (num = 0) => num.toLocaleString({
    currency: "ARS",
    style: "currency",

});

const createAlertProgress = ({
    name = "Realizando la compra",
    html = " progreso <b></b> milisegundos.",
    timer = 2000
}) => {

    let timerInterval;
    return Swal.fire({
        name, html, timer, 
        timerProgressBar: true,
    didOpen: () => {
        const timer = Swal.getPopup().querySelector("b")
        timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
        }), 100
    },
    willClose: () =>{
        clearInterval(timerInterval)
    }
    })
};

//url de la api de carrito
const server = "http://http://localhost:3030/";
let productCart = [];

//Retornar los productos de la base de datos en el carrito de compras
const getShoppingCart = (server) => fetch(`${server}/api/cart?user_id`).then((res) => res.json())

const getCartStructure = (p) =>{

    return 
    `
<tr class="container-detail">
    <td class="td-img"><img src="${p.image}" alt="imagen-producto"></td>
    <td class="td-name">${p.name}</td>
    <td class="td-price">$ ${convertMoney(p.price)}</td>
    <td class="td-cantidad">${p.orderproduct.quantity}</td>                                
    <td class="td-total">2000</td>
    <td class="td-borrar onclick="removeProductCart(${p.id})"><i class="fa-solid fa-trash boton-borrar"></i></td>
</tr>
    `;
}

const paintCartInView = ( product = [], ) =>{
    e.innetHTML = "";
    product.forEach((p) =>{
        elementmodalcBody.innetHTML += getCartStructure(p);
    })
};

const reloadCart = async (server, modalcBody, outputTotal) =>{
    const {
        ok,
        data: {total, product}
    } = await getShoppingCart(server);

    ok && (productCart = product);

    paintCartInView(productCart, modalcBody);
    outputTotal.ineerHTML = total;
};

//CAPTURAR EL FURMULARIO O CARD!
window.addEventListener("load", async(event) =>{
    const modalcBody = $(".mainCarrito")
    const outputTotal =$(".total")
    const btnDelete = $(".boton-borrar")
    const btnBuy = $(".boton-comprar")
try {
    reloadCart(server, modalcBody, outputTotal)
} catch (error) {
    console.error(error.message)    
}

//BOTON PARA ELIMINAR LOS PRODUCTOS

btnDelete.addEventListener("click", async () =>{
    try {
        const {ok, msg } = await fetch(`${server}/api/cart/clear?user_id`, {
            method: "PATCH",
        }).then((res) => res.json());
        if (ok) {
            reloadCart(server, modalcBody, outputTotal);
        }
    } catch (error) {
        console.error(error.message)

    }
});

//BOTON COMPRAR
btnBuy.addEventListener("click", async () => {
    try {
      const { ok, msg } = await fetch(`${server}/api/cart/completed?user_id`, {
        method: "PATCH",
      }).then((res) => res.json());

      if (ok) {
        const result = await createAlertProgress({
          title: "Completando compra...",
          timer: 4000,
        })

        if (result.dismiss === Swal.DismissReason.timer) {
          reloadCart(server, modalcBody, outputTotal);

          setTimeout(() => {
            location.href = "/";
          }, 1000);
        }
       
      }
    } catch (error) {
      console.error(error.message);
    }
  });
});

//DISMINUIR CANTIDAD DE PRODUCTOS

const lessProduct = async (id) => {
    try {
        const modalcBody = $(".modalc-body");
        const outputTotal = $(".total")
       
        const {ok, msg} = await fetch(`${server}/api/cart/less/${id}?user_id`, {
            method: "PATCH",

        }).then((res) =>res.json());
        if(ok){
            reloadCart(server, modalcBody, outputTotal);
        }
    } catch (error) {
        console.error(error.message);

    }
};

//AUMENTAR LA CANTIDAD DE PRODUCTOS EN EL CARRITO

const moreProduct = async(id) =>{
    try {
        const modalcBody = $(".modalc-body");
        const outputTotal = $(".total")

        const {ok, msg} = await fetch(`${server}/api/cart/less/${id}?user_id`, 
            {
            method: "PATCH",
        }).then((res) =>res.json());
        if(ok){
            reloadCart(server, modalcBody, outputTotal);
        }
    } catch (error) {
        console.error(error.message);
    }
}

//ELIMINAR O VACIAR EL CARRITO

const removeProductCart = async (id) =>{
    try {
        const modalcBody = $(".modalc-body");
        const outputTotal = $(".total")

        const {ok, msg} = await fetch(`${server}/api/cart/less/${id}?user_id`, 
            {
            method: "PATCH",
        }).then((res) =>res.json());
        if(ok){
            reloadCart(server, modalcBody, outputTotal);
        }
    } catch (error) {
        console.error(error.message);
    }
}

