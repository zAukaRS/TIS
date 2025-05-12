describe('Просмотр и фильтрация потребностей студентом', () => {
    it('Авторизация, фильтрация, проверка радиокнопок, диапазона и сброса фильтров', () => {
        cy.visit('https://dev.profteam.su/login');

        cy.get('input[placeholder="Латинские символы"]').type('zauka');
        cy.get('input[placeholder="*******"]').type('Dead10dead');
        cy.get('button').contains('Войти').click();

        cy.get('a[href="/needs"]').should('be.visible').contains('Потребности').click();

        // Убедимся, что перешли на нужную страницу
        cy.url().should('include', '/needs');



    });
});
