describe('Home', () => {

  it('Deve acessar a página inicial com sucesso', () => {

    cy.visit('/')

    cy.contains('AutomationExercise')
      .should('be.visible')

  })

})
