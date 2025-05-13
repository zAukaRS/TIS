describe('Создание потребности работодателем', () => {
    it('Авторизация и создание потребности', () => {
        cy.visit('https://dev.profteam.su/login');

        cy.get('input[placeholder="Латинские символы"]').type('testerEmployer');
        cy.get('input[placeholder="*******"]').type('Password1');
        cy.get('button').contains('Войти').click();

        cy.contains('Потребности', { timeout: 10000 }).should('be.visible').click();


    });
});
