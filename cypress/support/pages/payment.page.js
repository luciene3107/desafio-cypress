const PAYMENT = '.heading:eq(0)'
const NAME_CARD= '[data-qa = name-on-card]'
const NUMBER_CARD= '[data-qa = card-number]'
const CVC = '[data-qa = cvc]'
const EXPIRY_MONTH = '[data-qa = expiry-month]'
const EXPIRY_YEAR = '[data-qa = expiry-year]'
const BTN_PAYMENT = '[data-qa = pay-button]'

class payment{
    payment(){
        cy.get(PAYMENT).should('be.visible').contains('Payment')
        cy.get(NAME_CARD).should('be.visible').type('Luciene')
        cy.get(NUMBER_CARD).should('be.visible').type('123456789')
        cy.get(CVC).should('be.visible').type('159')
        cy.get(EXPIRY_MONTH).should('be.visible').type('12')
        cy.get(EXPIRY_YEAR).should('be.visible').type('2027')
        cy.get(BTN_PAYMENT).should('be.visible').click()
              
    }
}

export default new payment()