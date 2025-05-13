describe('Изменения статуса потребности', () => {
    it('Авторизация и публикация первой доступной потребности', () => {
        cy.visit('https://dev.profteam.su/login');

        cy.get('input[placeholder="Латинские символы"]').type('testerEmployer');
        cy.get('input[placeholder="*******"]').type('Password1');
        cy.get('button').contains('Войти').click();

        cy.url().should('include', '/account/main');

        cy.contains('.menu-item__item-name', 'Потребности')
            .should('be.visible')
            .click();

        cy.get('button')
            .contains('Опубликовать')
            .should('exist');

        cy.get('button')
            .filter((index, el) => {
                return Cypress.$(el).text().trim() === 'Опубликовать';
            })
            .filter(':visible')
            .first()
            .click();
    });
});
