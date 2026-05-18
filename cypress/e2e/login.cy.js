describe('Home', () => {

  it('Deve acessar a home com sucesso', () => {

    cy.visit('https://automationexercise.com')

    cy.contains('AutomationExercise')
      .should('be.visible')

  })

})
