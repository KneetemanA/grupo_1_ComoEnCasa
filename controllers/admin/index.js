module.exports = {
    admin: require("./listProducts.controller"),
    crear:require("./crearProduct.controller"),
    newProduct:require("./newProduct.controller"),
    editProduct: require("./editProduct.controller"),
    updateProduct: require("./updateProduct.controller"),
    deleteProduct: require("./deleteProduct.controller.js"),
    postDeleteProduct: require("./postDeleteProduct.controller.js"),
    logout: require("./logout-controller"),
    pedidos:require("./pedidos-controller")
}
