describe('Просмотр и фильтрация потребностей студентом', () => {
    it('Авторизация, фильтрация, проверка радиокнопок, диапазона и сброса фильтров', () => {
        cy.visit('https://dev.profteam.su/login');

        cy.get('input[placeholder="Латинские символы"]').type('zauka');
        cy.get('input[placeholder="*******"]').type('Dead10dead');
        cy.get('button').contains('Войти').click();

        cy.get('a[href="/needs"]').should('be.visible').contains('Потребности').click();

        // Убедимся, что перешли на нужную страницу
        cy.url().should('include', '/needs');

        // Поиск по названию
        cy.get('input[placeholder="Название..."]').type('Тестовая');
        cy.get('button.search-input__button').click();

        // Выбор радиокнопки "По диапазону"
        cy.get('input[type="radio"][value="По диапазону"]').check({ force: true }).should('be.checked');

        // Ввод диапазона зарплаты
        cy.get('.salary-field__form-field input[placeholder="0"]')
            .clear()
            .type('50000');

        cy.get('.salary-field__form-field input[placeholder="100000"]')
            .clear()
            .type('120000');

        // Выбор типа занятости
        cy.get('div.form-select__selected').contains('Любой').click();
        cy.get('div.form-select__option').contains('Очный').click();
        cy.get('div.form-select__selected').should('contain', 'Очный');

        // Сброс фильтра
        cy.contains('button', 'Сбросить фильтр').click();

    });
});
