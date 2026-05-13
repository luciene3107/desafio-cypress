const BTN_CART = '.btn.btn-default.cart'
const ADD_SUCCESS =  '.modal-title.w-100'
//const VIEW_CART = '.text-center:eq(1)'

class addProduct{
    addProduct(){
        cy.get(BTN_CART).click()
        cy.get(ADD_SUCCESS).should('be.visible').contains('Added!')
        //cy.get(VIEW_CART).should('be.visible').contains('View Cart').click()
    }
}

export default new addProduct()