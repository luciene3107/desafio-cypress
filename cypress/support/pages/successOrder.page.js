const ORDER_SUCCESS = '[data-qa="order-placed"]'
const CONTINUE = '[data-qa="continue-button"]'
const LOGOUT = 'a > .fa-lock:eq(0)'

class sucessOrder {
    sucessOrder() {
        cy.get(ORDER_SUCCESS).should('be.visible').and('contain', 'Order Placed!');
        cy.get(CONTINUE).click();
        cy.get(LOGOUT).click();
    }
}
module.exports = new sucessOrder()
