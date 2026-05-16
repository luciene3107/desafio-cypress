const BTN_CART = '.btn.btn-default.cart'
const ADD_SUCCESS =  '.modal-title.w-100'


class addProduct{
    addProduct(){
        cy.get(BTN_CART).click()
        cy.get(ADD_SUCCESS).should('be.visible').contains('Added!')
    
    }
}

module.exports = new addProduct()
