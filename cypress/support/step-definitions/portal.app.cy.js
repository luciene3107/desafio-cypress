/// <reference types='cypress'/>
const { Given, When } = require("cypress-cucumber-preprocessor/steps");
const portalPage = require("../pages/portal.page");

Given('que acessei o portal Automation Exercise', () => {
    cy.visit('/')
})

When('clicar no link Signup', () => {
   portalPage.acessarSignup()
})
