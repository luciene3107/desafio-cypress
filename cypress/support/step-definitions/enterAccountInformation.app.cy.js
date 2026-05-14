const { And } = require("cypress-cucumber-preprocessor/steps");
const enterAccountInformation = require("../pages/enterAccountInformation.page");


And ('preencher Enter Account Information', () => {
    enterAccountInformation.enterAccountInformation()
})
