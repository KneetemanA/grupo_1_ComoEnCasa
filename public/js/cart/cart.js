const $ = (element) => document.querySelector(element);

//Función para convertir la plata 
const convertMoney = (num = 0) => num.toLocaleString("es-AR", { style: "currency", currency: "ARS" });

const subTotal = (price, discount, OrderProduct) => {
    const { quantity } = OrderProduct;
    return (+price * quantity) - ((+price * discount / 100) * quantity);
};

const createAlertProgress = ({ name = "Realizando la compra", html = " progreso <b></b> milisegundos.", timer = 2000 }) => {
    let timerInterval;
    return Swal.fire({
        title: name,
        html: html,
        timer: timer,
        timerProgressBar: true,
        didOpen: () => {
            timerInterval = setInterval(() => {
                const timer = Swal.getPopup().querySelector("b");
                timer.textContent = `${Math.ceil(Swal.getTimerLeft() / 1000)} segundos restantes`;
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
    });
};

const server = "http://localhost:3030";
let productsCart = [];

//Función para la url de la api carrito
const getShoppingCart = async (server) => {
    try {
         return fetch(`${server}/api/carrito`).then((res) => res.json());
    } catch (error) {
        console.log(error);
    }
    }

//Estructura de la tarjeta, trae los datos de los productos
const getCartStructure = (p) => {
    const subtotal = subTotal(p.price, p.discount, p.OrderProduct);
    return `
      <td class="td-img" id="img"><img src="${p.image}" alt="imagen-producto"></td>
      <td class="td-name" id="detail">${p.detail}</td>
      <td class="td-price" id="price">$${convertMoney(p.price)}</td>
     <td class="td-cantidad" id="quantity">${p.OrderProduct.quantity}</td>
     <td class="td-total" id="total">${convertMoney(subtotal)}</td>
      `
  };


// Función para cargar y ver tarjeta del carrito, p.OrderProduct.quantity * p.price
const paintCartInView = (products = [], containerCard) => {
    containerCard.innerHTML = "";
    products.forEach((p) => {
      containerCard.innerHTML += getCartStructure(p);
    });
  };

//Función para recargar la información del carrito
const reloadCart = async (server, containerCard, outputTotal) => {
    try {
        
        const {ok, data: { total, products }} = await getShoppingCart(server);
            
            console.log(products);
            ok && (productsCart = products);
            
            paintCartInView(productsCart, containerCard);
            outputTotal.innerHTML = total;

        } catch (error) {
            console.log(error.message);
        }
};


//Capturar los selectores de la tarjeta del carrito

window.addEventListener("load", async (event) => {
    const containerCard = $("#container-card");
    const outputTotal = $("#total");
    const btnDelete = $("#boton-vaciar");
    const btnBuy = $(".boton-comprar");


    try {
        reloadCart(server, containerCard, outputTotal);
    } catch (error) {
        console.error(error.message);
    }

//Función del boton vaciar carrito
    btnDelete.addEventListener("click", async () => {
        try {
            const response = await fetch(`${server}/api/carrito/clear`, {
                method: "DELETE",
            });
            if (response.ok) {
                reloadCart(server, containerCard, outputTotal);
            } else {
                console.error("Error al vaciar el carrito");
            }
        } catch (error) {
            console.error(error.message);
        }
    });

// Función el boton comprar del carrito
    btnBuy.addEventListener("click", async () => {
        try {
            const response = await fetch(`${server}/api/carrito/completar`, {
                method: "PATCH",
            });
            if (response.ok) {
                const result = await createAlertProgress({
                    name: "Completando compra...",
                    timer: 4000,
                });
                if (result.dismiss === Swal.DismissReason.timer) {
                    await reloadCart(server, containerCard, outputTotal);
                    setTimeout(() => {
                        location.href = "/";
                    }, 1000);
                }
            } else {
                console.error("Error al completar la compra");
            }
        } catch (error) {
            console.error(error.message);
        }
    });

});

//Función para disminuir la cantidad de productos del carrito

const lessQuantity = async (id) => {
    try {
        const response = await fetch(`${server}/api/carrito/less/${id}`, {
            method: "PATCH",
        });
        if (response.ok) {
            await reloadCart(server, $("#containerCard"), $("#total"));
        } else {
            console.error("Error al disminuir la cantidad del producto");
        }
    } catch (error) {
        console.error(error.message);
    }
};

//Función para aumentar la cantidad de productos del carrito
const moreQuantity = async (id) => {
    try {
        const response = await fetch(`${server}/api/carrito/more/${id}`, {
            method: "PATCH",
        });
        if (response.ok) {
            await reloadCart(server, $("#containerCard"), $("#total"));
        } else {
            console.error("Error al aumentar la cantidad del producto");
        }
    } catch (error) {
        console.error(error.message);
    }
};

//Función para remover los productos del carrito
const removeProductToOrder = async (id) => {
    try {
        const response = await fetch(`${server}/api/carrito/remover/${id}`, 
        {
            method: "PATCH",
        });
        if (response.ok) {
            await reloadCart(server, $("#containerCard"), $("#total"));
        } else {
            console.error("Error al eliminar el producto del carrito");
        }
    } catch (error) {
        console.error(error.message);
    }
};