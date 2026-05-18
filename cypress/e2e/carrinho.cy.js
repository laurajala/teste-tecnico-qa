describe('Carrinho', () => {

  it('Deve adicionar produto ao carrinho', () => {

    cy.visit('https://automationexercise.com')

    cy.contains('Products')
      .click()

    cy.contains('Add to cart')
      .first()
      .click({ force: true })

    cy.contains('View Cart')
      .click()

    cy.get('#cart_info_table')
      .should('be.visible')
  })

})
