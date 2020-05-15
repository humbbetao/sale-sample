context('Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should have email and password value if they were typed', () => {
    const email = 'teste@teste.com.br'
    const password = 'testes123'
    cy.get('[data-test="email"] input').should('have.value', '')
    cy.get('[data-test="password"] input').should('have.value', '')
    cy.get('[data-test="rememberMe"] input').should('not.have.checked')

    cy.get('[data-test="email"] input').type(email)
    cy.get('[data-test="email"] input').should('have.value', email)

    cy.get('[data-test="password"] input').type(password)
    cy.get('[data-test="password"] input').should('have.value', password)

    cy.get('[data-test="rememberMe"] input').check()
    cy.get('[data-test="rememberMe"] input').should('have.checked')
    // cy.get('form').submit()
  })

  it('should change route to register page ', () => {
    cy.get('[data-test="registerLink"]').click()
    cy.url().should('include', '/register')
  })
})
