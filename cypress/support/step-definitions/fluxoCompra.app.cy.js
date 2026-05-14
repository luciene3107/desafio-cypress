const { And, Then } = require("cypress-cucumber-preprocessor/steps");
const fluxoCompraPage = require("../pages/fluxoCompra.page");
const addCartPage = require("../pages/addCart.page");
const shoppingCartPage = require("../pages/shoppingCart.page");
const viewCartPage = require("../pages/viewCart.page");
const paymentPage = require("../pages/payment.page");
const successOrderPage = require("../pages/successOrder.page");

And('visualizo os detalhes do produto Men Tshirt', () => {
    fluxoCompraPage.fluxoCompra()
})

And('adiciono o produto no carrinho', () => {
    addCartPage.addProduct()
})

And ('clico no link do carrinho', () => {
    viewCartPage.viewCart()
})

And('valido nome, preço unitário e o total devem corresponder ao valor anotado', () =>{
    shoppingCartPage.shoppingCart()
})

And('adiciono o numero do cartão e clico no botão Pay and Confirm Order', () => {
    paymentPage.payment()
})

Then('valido que o pedido foi realizado com sucesso', () => {
    successOrderPage.sucessOrder()
})
