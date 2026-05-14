const VIEW_CART = '.text-center:eq(1)'

class viewCart{
    viewCart(){
       cy.get(VIEW_CART).should('be.visible').contains('View Cart').click()
    }
}

module.exports = new viewCart()
