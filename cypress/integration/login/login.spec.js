import STORAGE_KEYS from '../../../src/constants/storage'
context('Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should alert if user is not registered', () => {
    beforeEach(() => {
      cy.clearLocalStorage().should((ls) => {
        expect(ls.getItem(STORAGE_KEYS.USER)).to.be.null
        expect(ls.getItem(STORAGE_KEYS.USERS)).to.be.null
      })
    })

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
    cy.get('form')
      .submit()
      .should(() => {
        expect(localStorage.getItem(STORAGE_KEYS.USER)).to.be.null
      })
    cy.get('[id="user-invalid-dialog"').should('be.visible')
  })

  it('should login if user was correct', () => {
    beforeEach(() => {
      cy.clearLocalStorage().should((ls) => {
        expect(ls.getItem(STORAGE_KEYS.USER)).to.be.null
        expect(ls.getItem(STORAGE_KEYS.USERS)).to.be.null
      })
      localStorage.setItem(
        STORAGE_KEYS.USERS,
        JSON.stringify([{ email, password }])
      )
    })

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
    cy.get('form')
      .submit()
      .should(() => {
        expect(localStorage.getItem(STORAGE_KEYS.USER)).equal(
          JSON.stringify({ email, password })
        )
      })

    cy.url().should('include', '/dash')
  })

  it('should login if user was correct', () => {
    beforeEach(() => {
      cy.clearLocalStorage().should((ls) => {
        expect(ls.getItem(STORAGE_KEYS.USER)).to.be.null
        expect(ls.getItem(STORAGE_KEYS.USERS)).to.be.null
      })
      localStorage.setItem(
        STORAGE_KEYS.USERS,
        JSON.stringify([{ email, password }])
      )
    })

    const email = 'teste@teste.com.br'
    const password = 'testes123'
    cy.get('[data-test="email"] input').should('have.value', '')
    cy.get('[data-test="password"] input').should('have.value', '')
    cy.get('[data-test="rememberMe"] input').should('not.have.checked')

    cy.get('[data-test="email"] input').type(email)
    cy.get('[data-test="email"] input').should('have.value', email)

    cy.get('[data-test="password"] input').type(password)
    cy.get('[data-test="password"] input').should('have.value', password)

    cy.get('[data-test="rememberMe"] input').should('have.not.checked')
    cy.get('form')
      .submit()
      .then(() => {
        expect(localStorage.getItem(STORAGE_KEYS.USER)).to.be.null
      })

    cy.url().should('include', '/dash')
  })

  it('should change route to register page ', () => {
    cy.get('[data-test="registerLink"]').click()
    cy.url().should('include', '/register')
  })
})
