
class CadastroAPIPage {
    realizarCadastroAPI(pessoa) {
        const url = 'https://www.automationexercise.com/api/createAccount';
        return cy.request({
            method: 'POST',
            url,
            form: true,
            body: {
                name: pessoa.nome,
                email: pessoa.email,
                password: pessoa.password,
                title: pessoa.title,
                birth_date: pessoa.birth_date,
                birth_month: pessoa.birth_month,
                birth_year: pessoa.birth_year,
                firstname: pessoa.nome,
                lastname: pessoa.lastName,
                company: pessoa.company,
                address1: pessoa.address,
                address2: pessoa.address2,
                country: pessoa.country || 'United States',
                zipcode: pessoa.zipcode,
                state: pessoa.state,
                city: pessoa.city,
                mobile_number: pessoa.phone,
            },
            failOnStatusCode: false,
        }).then((response) => {
            const body = typeof response.body === 'string' ? JSON.parse(response.body) : response.body;
            expect(body).to.have.property('responseCode', 201);
            expect(body).to.have.property('message', 'User created!');
            return { pessoa, response };
        });
    }
}

module.exports = new CadastroAPIPage();
