const { default: Swal } = require("sweetalert2");

const $ = (element) => document.querySelector(element);
const cutText = (text = "", long) => text.substring(0, long) + "...";

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

const server = "http://http://localhost:3030/";
let productCart = [];

const getShoppingCart = (server) => fetch(`${server}/api/cart?idUser`).then((res) => res.json())

const getCartStructure = (p) =>{

    return `<div class="container-table">
    <table class="table cart-items">
        <thead>
            <tr>
                <th>Productos</th>
                <th class="descripcion"></th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total</th>
                <th></th>
            </tr>
        </thead>
    </table>

    <label for="">Cantidad</label>
    <button class="btn btn-light" onclick="lessProduct(${p.id})">-</button>

    <output>${p.orderproducts.quantity}</output>

    <button class="btn btn-light" onclick="moreProduct(${p.id})">+</button>

    <span class="text-primary">$ ${convertMoney(p.price)}</span>

</div>`
}


const paintCartInView = ( products = [], elementMainCarrito) =>{
    elementMainCarrito.innetHTML = "";
    products.forEach((product) =>{
        elementMainCarrito.innetHTML += getCartStructure(product);
    })

};

const reloadCart = async (server, mainCarrito, outputTotal) =>{
    const {
        ok,
        data: {total, products}
    } = await getShoppingCart(server);

    ok && (productCart = products);

    paintCartInView(productCart, mainCarrito);
    outputTotal.ineerHTML = total;
};

//CAPTURAR EL FURMULARIO O CARD!
window.addEventListener("load", async(event) =>{
    const mainCarrito = $(".mainCarrito")
    const outputTotal =$()

try {
    reloadCart(server, mainCarrito, outputTotal)
} catch (error) {
    console.error(error.message)    
}


//PARA ELIMINAR LOS PRODUCTOS

botonDelete.addEventListener("click", async () =>{
    try {
        const {ok, msg } = await fetch(`${server}/api/cart/clear?idUser`, {
            method: "PATCH",
        }).then((res) => res.json());
        if (ok) {
            reloadCart(server, mainCarrito);
        }
    } catch (error) {
        console.error(error.message)

    }
});

//BOTON COMPRAR
btnBuy.addEventListener("click", async () => {
    try {
      const { ok, msg } = await fetch(`${server}/api/cart/completed?idUser`, {
        method: "PATCH",
      }).then((res) => res.json());

      if (ok) {
        const result = await createAlertProgress({
          title: "Completando compra...",
          timer: 4000,
        })

        if (result.dismiss === Swal.DismissReason.timer) {
          reloadCart(server, mainCarrito, outputTotal);

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
        const mainCarrito = $(".mainCarrito");
        const outputTotal = $("IMPUT DEL TOTAL")
        const {ok, msg} = await fetch(`${server}/api/cart/less/${id}?idUser`, {
            method: "PATCH",

        }).then((res) =>res.json());
        if(ok){
            reloadCart(server, mainCarrito, outputTotal);
        }
    } catch (error) {
        console.error(error.message);

    }
};

//AUMENTAR LA CANTIDAD DE PRODUCTOS EN EL CARRITO

const moreProduct = async(id) =>{
    try {
        const mainCarrito = $(".mainCarrito");
        const outputTotal = $("IMPUT DEL TOTAL")
        const {ok, msg} = await fetch(`${server}/api/cart/less/${id}?idUser`, 
            {
            method: "PATCH",
        }).then((res) =>res.json());
        if(ok){
            reloadCart(server, mainCarrito, outputTotal);
        }
    } catch (error) {
        console.error(error.message);
    }
}



//ELIMINAR O VACIAR EL CARRITO

const removeProductCart = async (id) =>{
    try {
        const mainCarrito = $(".mainCarrito");
        const outputTotal = $("IMPUT DEL TOTAL")
        const {ok, msg} = await fetch(`${server}/api/cart/less/${id}?idUser`, 
            {
            method: "PATCH",
        }).then((res) =>res.json());
        if(ok){
            reloadCart(server, mainCarrito, outputTotal);
        }
    } catch (error) {
        console.error(error.message);
    }
}

