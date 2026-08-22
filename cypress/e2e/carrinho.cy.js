describe('Carrinho de Compras', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('CT07 - Deve adicionar um produto ao carrinho com sucesso', () => {

    cy.contains('Products')
      .click()

    cy.url()
      .should('include', '/products')

    cy.get('.productinfo')
      .should('be.visible')

    cy.get('.productinfo a.add-to-cart[data-product-id="1"]')
      .click({ force: true })

    cy.contains('View Cart')
      .should('be.visible')
      .click()

    cy.url()
      .should('include', '/view_cart')

    cy.get('#cart_info_table')
      .should('be.visible')

    cy.get('#product-1')
      .should('exist')
      .and('be.visible')
  })

})
