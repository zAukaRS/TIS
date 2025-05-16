describe('Просмотр и фильтрация потребностей студентом — негативные сценарии', () => {
    it('Фильтры негативные', () => {
        cy.visit('https://dev.profteam.su/login');

        cy.get('input[placeholder="Латинские символы"]').type('zauka');
        cy.get('input[placeholder="*******"]').type('Dead10dead');
        cy.get('button').contains('Войти').click();
        cy.url().should('include', '/account/main');
        cy.get('a[href="/needs"]').should('be.visible').contains('Потребности').click();
        cy.url().should('include', '/needs');

        cy.get('input[placeholder="Название..."]').clear().type('Тестовая');
        cy.get('button.search-input__button').click();

        cy.get('input[type="radio"][value="По диапазону"]').check({ force: true }).should('be.checked');

        cy.get('.salary-field__form-field input[placeholder="0"]').clear().type('150000');
        cy.get('.salary-field__form-field input[placeholder="100000"]').clear().type('20000');

        cy.get('div.form-select__selected').contains('Любой').click();
        cy.get('div.form-select__option').contains('Очный').click();
        cy.get('div.form-select__selected').should('contain', 'Очный');

        cy.get('button.search-input__button').click();
    });

});