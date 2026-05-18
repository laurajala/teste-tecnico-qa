describe('Login', () => {

  it('Deve realizar login com sucesso', () => {

    cy.visit('https://automationexercise.com/login')

    cy.get('[data-qa="login-email"]')
      .type('teste@email.com')

    cy.get('[data-qa="login-password"]')
      .type('123456')

    cy.get('[data-qa="login-button"]')
      .click()

    cy.contains('Logged in as')
      .should('be.visible')
  })
})
