describe('Переход в рабочее пространство и комментарий', () => {
    it('Авторизация, переход в рабочее пространство и отправка комментария', () => {
        cy.visit('https://dev.profteam.su/login');

        // Авторизация
        cy.get('input[placeholder="Латинские символы"]').type('testerEmployer');
        cy.get('input[placeholder="*******"]').type('Password1');
        cy.get('button').contains('Войти').click();

        cy.url().should('include', '/account/main');

        cy.contains('.menu-item__item-name', 'Отклики')
            .should('be.visible')
            .click();

        cy.get('.responses-list-item', { timeout: 20000 }).should('have.length.greaterThan', 0);

        cy.get('.responses-list-item').each(($el) => {
            if ($el.find('button:contains("Рабочее пространство")').length) {
                cy.wrap($el).find('button:contains("Рабочее пространство")').first().click();
                return false;
            }
        });

        cy.url().should('include', '/workspaces/');

        cy.get('textarea.form-area[placeholder="Напишите комментарий..."]', { timeout: 10000 })
            .should('be.visible')
            .type('Йоу');

        cy.get('button.icon-button')
            .filter((index, el) => {
                return Cypress.$(el).find('svg.send-message-icon').length > 0;
            })
            .first()
            .click();
    });
});
