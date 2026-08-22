describe('Home', () => {

  it('Deve acessar a página inicial com sucesso', () => {

    cy.visit('https://automationexercise.com')

    cy.contains('AutomationExercise')
      .should('be.visible')

  })

})
