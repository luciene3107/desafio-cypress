import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import fluxoCompraPage from "../pages/fluxoCompra.page";
import addCartPage from "../pages/addCart.page";
import shoppingCartPage from "../pages/shoppingCart.page";
import viewCartPage from "../pages/viewCart.page";
import paymentPage from "../pages/payment.page";
import successOrderPage from "../pages/successOrder.page";

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
