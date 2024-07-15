const server_ = "http://localhost:3030";

const getShoppingCart = async (server_) => {
    try {
        return fetch(`${server_}/api/carrito`).then((res) => res.json());
   } catch (error) {
       console.log(error);
   }
}

const getCartStructura = (p) => {
    return `
    <div class="product-item d-flex justify-content-between align-items-center p-2 my-2 bg-white rounded shadow-sm">
      <div class="d-flex align-items-center">
        <img class="product-image me-2 rounded" src="${p.image}" alt="Product image">
        <span class="product-name fs-6 fw-semibold">${p.name}</span>
      </div>
      <div class="d-flex align-items-center gap-2 agregar-items rounded shadow-sm bg-light">
        <button class="btn bg-secondary btn-sm fw-bold fs-6 boton-agregar-restar rounded" onclick="menQuantity('${p.id}')">-</button>
        <span class="quantity fs-5 fw-bold">${p.OrderProduct.quantity}</span>
        <button class="btn bg-primary btn-sm fw-bold fs-6 boton-agregar-restar rounded" onclick="masQuantity('${p.id}')">+</button>
        <button class="btn btn-outline-danger bg-danger btn-sm fs-6 ms-1 boton-agregar-restar rounded" onclick="removeProductOrder('${p.id}')">
          <i class="fas fa-trash fs-6"></i>
        </button>
      </div>
    </div>
  `;
};


const paintCartInView = (products = [], containerCard) => {
    containerCard.innerHTML = "";
    products.forEach((p) => {
        containerCard.innerHTML += getCartStructura(p);
    });
};


const reloadCart = async (server_, modalc, outputTotal = null) => {
    try {
        const { ok, data: { total, products } } = await getShoppingCart(server_);

        if (ok) {
            paintCartInView(products, modalc);
            outputTotal && (outputTotal.innerHTML = `Total: ${total}`);
        }
    } catch (error) {
        console.error(error.message);
    }
};


window.addEventListener("load", async function() {
    // let carritoBoton = document.querySelector("#modal-carrito");
    let modalc = document.querySelector("#modalc-body");
    let botonclose = document.querySelector(".closeModal");

    if (/* carritoBoton && */ modalc && botonclose) {
        /* carritoBoton.addEventListener("click", async (event) => {
            event.preventDefault();
            modalc.style.display = "flex";
            }); */
            await reloadCart(server_, modalc);

        botonclose.addEventListener("click", function() {
            modalc.style.display = "none";
        });

        window.addEventListener("click", function(e) {
            if (e.target == modalc) {
                modalc.style.display = "none";
            }
        });
    } else {
        console.error("Elementos del modal del carrito no encontrados");
    }
});

// Funciones que necesitas definir para las acciones de los botones
const menQuantity = async (id) => {
    try {
        let modalc = document.querySelector("#modalc-body");
    // let carritoBoton = document.querySelector("#modal-carrito");

    const { ok, msg } = await fetch(`${server_}/api/carrito/less/${id}`, {
        method: "PATCH",
      }).then((res) => res.json());
  
      if (ok) {
        reloadCart(server_, modalc);
      }
      // console.log({ok, msg})
    } catch (error) {
      console.error(error.message);
    }
};

const masQuantity = async (id) => {
    try {
        let modalc = document.querySelector("#modalc-body");
    // let carritoBoton = document.querySelector("#modal-carrito");

    const { ok, msg } = await fetch(`${server_}/api/carrito/more/${id}`, {
        method: "PATCH",
      }).then((res) => res.json());
  
      if (ok) {
        reloadCart(server_, modalc);
      }
      // console.log({ok, msg})
    } catch (error) {
      console.error(error.message);
    }
};

const removeProductOrder = async (id) => {
    try {
        let modalc = document.querySelector("#modalc-body");
      // let carritoBoton = document.querySelector("#modal-carrito");

    const { ok, msg } = await fetch(`${server_}/api/carrito/remover/${id}`, {
        method: "PATCH",
      }).then((res) => res.json());
  
      if (ok) {
        reloadCart(server_, modalc);
      }
      // console.log({ok, msg})
    } catch (error) {
      console.error(error.message);
    }
};