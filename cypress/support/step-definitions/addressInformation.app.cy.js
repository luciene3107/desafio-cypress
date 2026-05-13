import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import addressInformationPage from "../pages/addressInformation.page";


And ('preencher Address Information e clicarno botão Create Account', () => {
    addressInformationPage.addressInformation()
})

