/// <reference types='cypress'/>
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import portalPage from "../pages/portal.page";

Given('que acessei o portal Automation Exercise', () => {
    cy.visit('/')
})

When('clicar no link Signup', () => {
   portalPage.acessarSignup()
})