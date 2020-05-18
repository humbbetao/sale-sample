import STORAGE_KEYS from '../../../src/constants/storage'

context('Register', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/register')
  })

  it('should register the new user', () => {
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

    cy.get('form')
      .submit()
      .should(() => {
        expect(localStorage.getItem(STORAGE_KEYS.USERS)).equal(
          JSON.stringify([{ name, cpfFormatted, email, password }])
        )
        expect(localStorage.getItem(STORAGE_KEYS.USER)).to.be.null
      })
  })

  it('should show helper text when user type something wrong', () => {
    const name = 'Jo'
    const email = 'joao_das_neves@testr'
    const cpf = '987650'
    const cpfFormatted = '987.650._-'
    const password = 'test3'
    const confirmPassword = 'tes123'
    cy.get('[data-test="name"] input').type(name)
    cy.get('[data-test="CPF"] input').type(cpf)
    cy.get('[data-test="email"] input').type(email)
    cy.get('[data-test="password"] input').type(password)
    cy.get('[data-test="confirmPassword"] input').type(confirmPassword)

    cy.get('[id="name-helper-text"]').should(
      'contain',
      'Nome Inválido, nome precisa conter pelo menos 3 letras'
    )
    cy.get('[id="CPF-helper-text"]').should('contain', 'CPF inválido')
    cy.get('[id="email-helper-text"]').should('contain', 'Email inválido')
    cy.get('[id="password-helper-text"]').should(
      'contain',
      'As senhas tem que ser iguais e conter seis caracteres'
    )
    cy.get('[id="confirmPassword-helper-text"]').should(
      'contain',
      'As senhas tem que ser iguais e conter seis caracteres'
    )
  })

  it('should change route to login page ', () => {
    cy.get('[data-test="loginLink"]').click()
    cy.url().should('include', '/')
  })
})
