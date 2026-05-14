const PAYMENT = '.heading:eq(0)'
const NAME_CARD= '[data-qa = name-on-card]'
const NUMBER_CARD= '[data-qa = card-number]'
const CVC = '[data-qa = cvc]'
const EXPIRY_MONTH = '[data-qa = expiry-month]'
const EXPIRY_YEAR = '[data-qa = expiry-year]'
const BTN_PAYMENT = '[data-qa = pay-button]'

class payment{
    payment(){
        cy.task('recuperaDadosSignup').then((usuario) => {
            cy.get(PAYMENT).should('be.visible').contains('Payment')            
            cy.get(NAME_CARD).should('be.visible').type(usuario.creditCardName)
            cy.get(NUMBER_CARD).should('be.visible').type(usuario.numberCard);
            cy.get(CVC).should('be.visible').type(usuario.cvc)
            cy.get(EXPIRY_MONTH).should('be.visible').type(usuario.expiryMonth);
            cy.get(EXPIRY_YEAR).should('be.visible').type(usuario.expiryYear);
            cy.get(BTN_PAYMENT).should('be.visible').click()
        });       
              
    }
}

module.exports = new payment()
