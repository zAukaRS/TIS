describe('Cypress Test', () => {
    it('None-existent login test', () => {
        cy.fixture('cypressTest').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.main_url)

            cy.log('Ввод несуществующего логина')
            cy.get('input[id="passp-field-login"]')
                .type(data.none_existent_login)

            cy.log('Клик по кнопке "Войти"')
            cy.get('div[class="passp-button passp-sign-in-button"] button[type="submit"]')
                .click()

            cy.log('Проверка, что появился элемент сигнализирующий об ошибке')
            cy.get('div[class="passp-form-field__error"]')
                .should('exist')
        })
    })
    it('None-existent password test', () => {
        cy.fixture('cypressTest').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.main_url)

            cy.log('Ввод логина')
            cy.get('input[id="passp-field-login"]')
                .type(data.login)

            cy.log('Клик по кнопке "Войти"')
            cy.get('div[class="passp-button passp-sign-in-button"] button[type="submit"]')
                .click()

            // ожидаем 2 секунды для появления формы ввода пароля
            cy.wait(10000)

            cy.log('Ввод несуществующего пароля')
            cy.get('input[id="passp-field-pwd"]')
                .type(data.none_existent_password)

            cy.log('Клик по кнопке "Войти"')
            cy.get('div[class="passp-button passp-sign-in-button"] button[type="submit"]')
                .click()

            cy.log('Проверка что появился элемент сигнализирующий об ошибке')
            cy.get('div[class="passp-form-field__error"]')
                .should('exist')
        });
    });
})
