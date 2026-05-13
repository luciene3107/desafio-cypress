const FIRST_NAME = '[data-qa="first_name"]';
const LAST_NAME = '[data-qa="last_name"]';
const ADDRESS = '[data-qa="address"]';
const COUNTRY = '[data-qa="country"]';
const STATE = '[data-qa="state"]';
const CITY = '[data-qa="city"]';
const ZIP_CODE = '[data-qa="zipcode"]';
const MOBILE_NUMBER = '[data-qa="mobile_number"]';
const BTN_CREATE = '[data-qa="create-account"]';

class addressInformation {
    addressInformation(){
        cy.get(FIRST_NAME).should('be.visible').type('Lila')
        cy.get(LAST_NAME).should('be.visible').type("Silva")
        cy.get(ADDRESS).should('be.visible').type("Rua da floresta")
        cy.get(COUNTRY).select('Canada').should('have.value', 'Canada')
        cy.get(STATE).should('be.visible').type('Rio de Janeiro')
        cy.get(CITY).should('be.visible').type('Rio de Janeiro')
        cy.get(ZIP_CODE).should('be.visible').type('5478966411')
        cy.get(MOBILE_NUMBER).should('be.visible').type('215478884')
        cy.get(BTN_CREATE).click()
       
    }
}



export default new addressInformation()


