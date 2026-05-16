const { And, Then } = require("cypress-cucumber-preprocessor/steps");
const loginPage = require("../pages/login.page");

Then('visualizo a opção de logout e o nome do usuário logado', () => {
    cy.task('recuperaDadosSignup').then((usuarioCriado) => {     
        cy.contains('Logged in as').should('be.visible');
        cy.contains(usuarioCriado.nome).should('be.visible');
    });
});
