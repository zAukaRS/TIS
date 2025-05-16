describe('Создание потребности работодателем — негативные сценарии', () => {
    beforeEach(() => {
        cy.visit('https://dev.profteam.su/login');

        cy.get('input[placeholder="Латинские символы"]').type('testerEmployer');
        cy.get('input[placeholder="*******"]').type('Password1');
        cy.get('button').contains('Войти').click();

        cy.contains('.menu-item__item-name', 'Потребности', { timeout: 10000 }).click();
        cy.get('button')
            .filter((index, el) => Cypress.$(el).text().trim() === 'Создать потребность')
            .should('be.visible')
            .click();

        cy.get('.desktop-modal__content', { timeout: 10000 }).should('be.visible');
    });

    it('Пустое поле "Название потребности" — кнопка заблокирована', () => {
        cy.get('.desktop-modal__content input.form-input--text[placeholder="Кладовщик"]')
            .should('be.visible')
            .clear();

        cy.get('.radio-component__label').contains('По договорённости').click();

        cy.get('.desktop-modal__content textarea[placeholder="Обязанности сотрудника"]')
            .type('Обязанности');

        cy.get('.desktop-modal__content textarea[placeholder="Ваши требования"]')
            .type('Требования');

        cy.get('.desktop-modal').within(() => {
            cy.get('div.form-select__selected').contains('Очный').click({ force: true });
            cy.get('div.form-select__option').contains('Дистант').click({ force: true });
            cy.get('div.form-select__selected').should('contain', 'Дистант');
        });

        cy.contains('.desktop-modal__header h2', 'Создать потребность')
            .parents('.desktop-modal')
            .find('button[type="submit"]')
            .should('be.disabled');
    });

    it('Пустое поле "Обязанности" — кнопка заблокирована', () => {
        cy.get('.desktop-modal__content input.form-input--text[placeholder="Кладовщик"]')
            .clear()
            .type('Кладовщик');

        cy.get('.radio-component__label').contains('По договорённости').click();

        cy.get('.desktop-modal__content textarea[placeholder="Обязанности сотрудника"]')
            .clear();

        cy.get('.desktop-modal__content textarea[placeholder="Ваши требования"]')
            .type('Требования');

        cy.get('.desktop-modal').within(() => {
            cy.get('div.form-select__selected').contains('Очный').click({ force: true });
            cy.get('div.form-select__option').contains('Дистант').click({ force: true });
            cy.get('div.form-select__selected').should('contain', 'Дистант');
        });

        cy.contains('.desktop-modal__header h2', 'Создать потребность')
            .parents('.desktop-modal')
            .find('button[type="submit"]')
            .should('be.disabled');
    });

    it('Пустое поле "Требования" — кнопка заблокирована', () => {
        cy.get('.desktop-modal__content input.form-input--text[placeholder="Кладовщик"]')
            .clear()
            .type('Кладовщик');

        cy.get('.radio-component__label').contains('По договорённости').click();

        cy.get('.desktop-modal__content textarea[placeholder="Обязанности сотрудника"]')
            .type('Обязанности');

        cy.get('.desktop-modal__content textarea[placeholder="Ваши требования"]')
            .clear();

        cy.get('.desktop-modal').within(() => {
            cy.get('div.form-select__selected').contains('Очный').click({ force: true });
            cy.get('div.form-select__option').contains('Дистант').click({ force: true });
            cy.get('div.form-select__selected').should('contain', 'Дистант');
        });

        cy.contains('.desktop-modal__header h2', 'Создать потребность')
            .parents('.desktop-modal')
            .find('button[type="submit"]')
            .should('be.disabled');
    });

    it('Пытаемся отправить форму с пустыми всеми полями — кнопка заблокирована', () => {
        cy.get('.desktop-modal__content input.form-input--text[placeholder="Кладовщик"]')
            .clear();

        cy.get('.desktop-modal__content textarea[placeholder="Обязанности сотрудника"]')
            .clear();

        cy.get('.desktop-modal__content textarea[placeholder="Ваши требования"]')
            .clear();

        cy.contains('.desktop-modal__header h2', 'Создать потребность')
            .parents('.desktop-modal')
            .find('button[type="submit"]')
            .should('be.disabled');
    });
});
