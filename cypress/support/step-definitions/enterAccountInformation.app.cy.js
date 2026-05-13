import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import enterAccountInformation from "../pages/enterAccountInformation.page";


And ('preencher Enter Account Information', () => {
    enterAccountInformation.enterAccountInformation()
})