
const { Given, When, Then } = require("cypress-cucumber-preprocessor/steps");
const cadastroApiPage = require("../../pages/API/cadastro-API.page");

let usuarioDados;
let cadastroApiResponse;

const parseBody = (response) => {
    return typeof response.body === 'string' ? JSON.parse(response.body) : response.body;
};

const realizarCadastro = () => {
    return cadastroApiPage.realizarCadastroAPI(usuarioDados).then(({ response }) => {
        cadastroApiResponse = response;
    });
};

Given('que possuo dados de usuário válidos gerados dinamicamente', () => {
    return cy.task('gerarDadosSignup').then((dados) => {
        usuarioDados = dados;
    });
});

When('cadastro o usuário via API', () => {
    return realizarCadastro();
});

Then('valido o retorno de criação do usuário via API', () => {
    const body = parseBody(cadastroApiResponse);
    expect(body).to.be.an('object');
    expect(body).to.have.property('responseCode', 201);
    expect(body).to.have.property('message', 'User created!');
});




