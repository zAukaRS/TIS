describe('Авторизация - неверный логин или пароль (негативный тест)', () => {
    it('Авторизация', () => {
        cy.visit('https://dev.profteam.su/login');

        cy.get('input[placeholder="Латинские символы"]').type('testerEmployer');
        cy.get('input[placeholder="*******"]').type('Password2');
        cy.get('button').contains('Войти').click();



    });
});
