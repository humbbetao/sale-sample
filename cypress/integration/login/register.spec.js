context('Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/register')
  })

  it('should have email and password value if they were typed', () => {
    const name = 'João das neves'
    const email = 'joao_das_neves@teste.com.br'
    const cpf = '98765432100'
    const cpfFormatted = '987.654.321-00'
    const password = 'testes123'
    const confirmPassword = 'testes123'
    cy.get('[data-test="name"] input').type(name)
    cy.get('[data-test="CPF"] input').type(cpf)
    cy.get('[data-test="email"] input').type(email)
    cy.get('[data-test="password"] input').type(password)
    cy.get('[data-test="confirmPassword"] input').type(confirmPassword)
    cy.get('[data-test="name"] input').should('have.value', name)
    cy.get('[data-test="CPF"] input').should('have.value', cpfFormatted)
    cy.get('[data-test="email"] input').should('have.value', email)
    cy.get('[data-test="password"] input').should('have.value', password)
    cy.get('[data-test="confirmPassword"] input').should(
      'have.value',
      confirmPassword
    )

    // cy.get('form').submit()
  })

  it('should change route to login page ', () => {
    cy.get('[data-test="loginLink"]').click()
    cy.url().should('include', '/')
  })
})
