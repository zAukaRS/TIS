describe('Негативный тест авторизации без пароля', () => {
    it('Кнопка входа должна быть неактивна, если не введён пароль', () => {
        cy.visit('https://dev.profteam.su/login');

        cy.get('input[placeholder="Латинские символы"]').type('zauka');

        cy.get('button[type="submit"]').should('be.disabled');
    });
});