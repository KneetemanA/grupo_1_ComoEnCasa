module.exports = {
    getOrder: require("./getOrder.controller.api"),
    addProductToOrder: require("./addProdOrder.controller.api"),
    removeProductToOrder: require("./removeProdOrder.controller.api"),
    canceledOrder:require("./cancelarOrder.controller.api"),
    completedOrder:require("./completeOrder.controller.api"),
    moreQuantity: require("./moreQuantity.controller.api"),
    lessQuantity: require("./lessQuantity.controller.api"),
}