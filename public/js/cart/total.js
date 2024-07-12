const $ = (element) => document.querySelector(element);

const convertMoney = (num = 0) => num.toLocaleString("es-AR", { style: "currency", currency: "ARS" });

const subTotal = (price, discount, OrderProduct) => {
    const { quantity } = OrderProduct;
    return (+price * quantity) - ((+price * discount / 100) * quantity);
};

const calcularTotal = (productsCart) =>{
    let total = 0;
    productsCart.forEach((p) => {
        total += subTotal(p.price, p.discount, p.OrderProduct.quantity);
    });
    return total;
}

window.addEventListener("load", () => {
    const productsCart = JSON.parse(localStorage.getItem("productsCart"));

    const elementTotal = $("#totalFinal");
    const total= calcularTotal(productsCart);
    const descuento = total * 0.05;

    elementTotal.textContent = convertMoney(total);
    const elementDescuento = $("#descuento");
    elementDescuento.textContent = convertMoney(descuento);
})