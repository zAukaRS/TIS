describe('Просмотр и фильтрация потребностей студентом', () => {
    it('Авторизация, фильтрация, проверка радиокнопок, диапазона и сброса фильтров', () => {
        cy.visit('https://dev.profteam.su/login');

        cy.get('input[placeholder="Латинские символы"]').type('testerEmployer');
        cy.get('input[placeholder="*******"]').type('Password1');
        cy.get('button').contains('Войти').click();

        cy.url().should('include', '/account/main');

        cy.contains('.menu-item__item-name', 'Отклики')
            .should('be.visible')
            .click();

        cy.get('.responses-list-item__action', { timeout: 10000 }).should('exist');

        cy.get('.responses-list-item__action')
            .filter((index, el) => {
                return Cypress.$(el).find('svg').length > 0;
            })
            .first()
            .click();

    });
});
