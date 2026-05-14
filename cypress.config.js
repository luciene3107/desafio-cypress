const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    watchForFileChanges: false,
    specPattern: "cypress/e2e/*.feature",
    baseUrl: "https://www.automationexercise.com/",
    setupNodeEvents(on, config) {
      const cucumber = require('cypress-cucumber-preprocessor').default;
      const { faker } = require('@faker-js/faker');
      let pessoa = {};

      on('file:preprocessor', cucumber());
      on('task', {
        gerarDadosSignup() {
          const dataFutura = faker.date.future({ years: 5 });
          pessoa = {
            nome: faker.person.firstName(),
            email: faker.internet.email(),
            password: faker.internet.password({ length: 8 }),
            lastName: faker.person.lastName(),
            address: faker.location.streetAddress(),
            state: faker.location.state(),
            city: faker.location.city(),
            zipcode: faker.location.zipCode(),
            phone: faker.phone.number(),
            creditCardName: faker.finance.accountName(),
            numberCard: faker.finance.creditCardNumber(),
            cvc: faker.finance.creditCardCVV(),

            expiryMonth: (dataFutura.getMonth() + 1).toString().padStart(2, '0'),
            expiryYear: dataFutura.getFullYear().toString()

          };
          return pessoa;
        },
        recuperaDadosSignup() {
          return pessoa;
        },        
      });
      
      return config;
    },
    
    },
});
