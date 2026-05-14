//const VIEW_PRODUCT = 'a > .nav.nav-pills.nav-justified:eq(0)'


class fluxoCompraPage {
    fluxoCompra() {
        cy.get(':nth-child(4) > .product-image-wrapper > .choose > .nav > li > a').click();
        cy.get('h2').should('be.visible').contains('Men Tshirt');
        cy.get('span').should('be.visible').contains('Rs. 400')
    }

}
module.exports = new fluxoCompraPage()



