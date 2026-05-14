const { And } = require("cypress-cucumber-preprocessor/steps");
const addressInformationPage = require("../pages/addressInformation.page");


And ('preencher Address Information e clicarno botão Create Account', () => {
    addressInformationPage.addressInformation()
})

