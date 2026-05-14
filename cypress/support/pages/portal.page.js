const SIGNUP = 'a > .fa-lock:eq(0)'

class portal{
    acessarSignup(){
       cy.get(SIGNUP).click()
    }
}

module.exports = new portal()
