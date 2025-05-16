describe('Создание потребности работодателем', () => {
    it('Авторизация и создание потребности', () => {
        cy.visit('https://dev.profteam.su/login');

        cy.get('input[placeholder="Латинские символы"]').type('testerEmployer');
        cy.get('input[placeholder="*******"]').type('Password1');
        cy.get('button').contains('Войти').click();

        cy.contains('.menu-item__item-name', 'Потребности',  { timeout: 10000 }).click();
        cy.get('button')
            .filter((index, el) => {
                return Cypress.$(el).text().trim() === 'Создать потребность';
            })
            .should('be.visible')
            .click();

        cy.get('.desktop-modal__content', { timeout: 10000 }).should('be.visible');

        cy.get('.desktop-modal__content input.form-input--text[placeholder="Кладовщик"]')
            .should('be.visible')
            .clear()
            .type('Кладовщик');

        // Выбор ЗП "По договорённости"
        cy.get('.radio-component__label')
            .contains('По договорённости')
            .click();


        cy.get('.desktop-modal__content textarea[placeholder="Обязанности сотрудника"]')
            .should('have.length', 1)
            .type('Йоу');

        // Заполнение поля "Требования"
        cy.get('.desktop-modal__content textarea[placeholder="Ваши требования"]')
            .should('have.length', 1)
            .type('Да');


        cy.get('.desktop-modal').within(() => {
            cy.get('div.form-select__selected').contains('Очный').click({ force: true });
            cy.get('div.form-select__option').contains('Дистант').click({ force: true });
            cy.get('div.form-select__selected').should('contain', 'Дистант');
        });

        cy.contains('.desktop-modal__header h2', 'Создать потребность')
            .parents('.desktop-modal')
            .find('button[type="submit"]')
            .click({ force: true });
    });
});
