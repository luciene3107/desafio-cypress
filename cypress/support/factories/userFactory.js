//import { faker } from '@faker-js/faker';
const { faker } = require('@faker-js/faker');

module.exports = {
  gerarDadosDeUsuario: () => {
    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password({ length: 10 }),
      address: faker.location.streetAddress(),
      // Exemplo de lógica para campos brasileiros se necessário
      phone: faker.phone.number()
    };
  }
};
