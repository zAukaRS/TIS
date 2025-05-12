describe('Создание потребности работодателем', () => {
    it('Авторизация и создание потребности', () => {
        cy.visit('https://dev.profteam.su/login');

        cy.get('input[placeholder="Латинские символы"]').type('testerEmployer');
        cy.get('input[placeholder="*******"]').type('Password1');
        cy.get('button').contains('Войти').click();

        cy.contains('Потребности', { timeout: 10000 }).should('be.visible').click();

        const title = 'Тестовая потребность ' + Date.now();
        cy.get('input[placeholder="Название"]').type(title);
        cy.get('textarea').type('Описание автотеста');
        cy.get('select').first().select(1); // 1 — любой пункт
        cy.contains('Сохранить').click();

        cy.contains(title).should('exist');
    });
});
