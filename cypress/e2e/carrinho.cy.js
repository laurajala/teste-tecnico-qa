describe('Carrinho de Compras', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('CT07 - Deve adicionar um produto ao carrinho com sucesso', () => {

    cy.contains('Products')
      .click()

    cy.get('.productinfo')
      .first()
      .within(() => {
        cy.get('p')
          .invoke('text')
          .as('nomeProduto')

        cy.contains('Add to cart')
          .click({ force: true })
      })

    cy.contains('View Cart')
      .click()

    cy.get('#cart_info_table')
      .should('be.visible')

    cy.get('@nomeProduto').then((nomeProduto) => {
      cy.get('#cart_info_table')
        .should('contain.text', nomeProduto.trim())
    })

  })

})
