describe('Просмотр и фильтрация потребностей студентом', () => {
    it('Авторизация, фильтрация, проверка радиокнопок, диапазона и сброса фильтров', () => {
        cy.visit('https://dev.profteam.su/login');

        cy.get('input[placeholder="Латинские символы"]').type('ZaukaRS');
        cy.get('input[placeholder="*******"]').type('Dead10dead');
        cy.get('button').contains('Войти').click();

        cy.url().should('include', '/account/main');

        cy.get('a[href="/needs"]').should('be.visible').contains('Потребности').click();

        cy.url({ timeout: 10000 }).should('include', '/needs');

        cy.get('.need-item', { timeout: 10000 }).should('exist');

        cy.get('.need-item').filter((index, el) => {
            return Cypress.$(el).find('button:contains("Откликнуться")').length > 0;
        }).first().within(() => {
            cy.contains('button', 'Откликнуться').click();
        });

    });
});
