const NAME_PRODUCT = 'h4 > a'
const PRICE = '.cart_price'
const TOTAL_PRICE = '.cart_total_price'
const BTN_CHECKOUT = '.btn.btn-default.check_out'
const REVIEW_ORDER = '.heading:eq(1)'

class shoppingCart{
    shoppingCart(){
        cy.get(NAME_PRODUCT).should('be.visible').contains('Men Tshirt')       
        cy.get(PRICE).should('be.visible').contains('Rs. 400')
        cy.get(TOTAL_PRICE).should('be.visible')
        cy.get(BTN_CHECKOUT).should('be.visible').click()
        cy.get(REVIEW_ORDER).should('be.visible').contains('Review Your Order')
        cy.get(BTN_CHECKOUT).should('be.visible').click()        
    }
}

export default new shoppingCart()