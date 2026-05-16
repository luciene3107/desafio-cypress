const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    watchForFileChanges: false,
    specPattern: "cypress/e2e/**/*.feature",
    baseUrl: "https://www.automationexercise.com/",
    setupNodeEvents(on, config) {
      const cucumber = require('cypress-cucumber-preprocessor').default;
      const { faker } = require('@faker-js/faker');
      let pessoa = {};

      on('file:preprocessor', cucumber());
      on('task', {
        gerarDadosSignup() {
          const dataFutura = faker.date.future({ years: 5 });
          const nascimento = faker.date.birthdate({ min: 18, max: 70, mode: 'age' });
          pessoa = {
            title: faker.helpers.arrayElement(['Mr', 'Mrs', 'Miss']),
            nome: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            password: faker.internet.password({ length: 8 }),
            company: faker.company.name(),
            address: faker.location.streetAddress(),
            address2: faker.location.secondaryAddress(),
            state: faker.location.state(),
            city: faker.location.city(),
            zipcode: faker.location.zipCode(),
            country: faker.location.country(),
            phone: faker.phone.number(),
            birth_date: nascimento.getDate().toString().padStart(2, '0'),
            birth_month: (nascimento.getMonth() + 1).toString().padStart(2, '0'),
            birth_year: nascimento.getFullYear().toString(),
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
