describe('AddPurchase', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/dash')
  })
  const code = '123'
  const date = '17/05/2010'
  const value = '200'
  describe('Desktop', () => {
    beforeEach(() => {
      cy.viewport(1920, 1080)
    })
    it('should cancel new purchase input', () => {
      cy.get('[data-test="add-new-purchase"]').click()
      cy.get('[data-test="code-purchase"] input').type(code)
      cy.get('[data-test="date-purchase"] input').clear()
      cy.get('[data-test="date-purchase"] input').type(date)
      cy.get('[data-test="value-purchase"] input').type(value)
      cy.get('[data-test="code-purchase"] input').should('have.value', code)
      cy.get('[data-test="value-purchase"] input').should('have.value', value)
      cy.get('[data-test="date-purchase"] input').should('have.value', date)
      cy.get('[data-test="cancel-button"]').click()
      cy.get('[data-test="code-purchase"] input').should('be.not.visible')
    })

    describe('should add new purchase input', () => {
      afterEach(() => {
        cy.get('[data-test="delete-purchase-button"]').click()
        cy.get('[data-test="agree-button"]').click()
      })
      it('should be valid', () => {
        cy.get('[data-test="add-new-purchase"]').click()
        cy.get('[data-test="code-purchase"] input').type(code)
        cy.get('[data-test="date-purchase"] input').clear()
        cy.get('[data-test="date-purchase"] input').type(date)
        cy.get('[data-test="value-purchase"] input').type(value)
        cy.get('[data-test="code-purchase"] input').should('have.value', code)
        cy.get('[data-test="value-purchase"] input').should('have.value', value)
        cy.get('[data-test="date-purchase"] input').should('have.value', date)
        cy.get('[data-test="add-button"]').click()
        cy.get('[data-test="code-purchase"] input').should('be.not.visible')
        cy.get(`[data-test="${code}-purchase"]`).should('be.visible')
      })
    })
  })
  describe('Mobile', () => {
    beforeEach(() => {
      cy.viewport(375, 812)
    })

    it('should cancel new purchase input', () => {
      cy.get('[data-test="add-new-purchase"]').click()
      cy.get('[data-test="code-purchase"] input').type(code)
      cy.get('[data-test="date-purchase"] input').clear()
      cy.get('[data-test="date-purchase"] input').type(date)
      cy.get('[data-test="value-purchase"] input').type(value)
      cy.get('[data-test="code-purchase"] input').should('have.value', code)
      cy.get('[data-test="value-purchase"] input').should('have.value', value)
      cy.get('[data-test="date-purchase"] input').should('have.value', date)
      cy.get('[data-test="cancel-button"]').click()
      cy.get('[data-test="code-purchase"] input').should('be.not.visible')
    })

    describe('should add new purchase input', () => {
      afterEach(() => {
        cy.get('[data-test="delete-purchase-button"]').click()
        cy.get('[data-test="agree-button"]').click()
      })
      it('should be valid', () => {
        cy.get('[data-test="add-new-purchase"]').click()
        cy.get('[data-test="code-purchase"] input').type(code)
        cy.get('[data-test="date-purchase"] input').clear()
        cy.get('[data-test="date-purchase"] input').type(date)
        cy.get('[data-test="value-purchase"] input').type(value)
        cy.get('[data-test="code-purchase"] input').should('have.value', code)
        cy.get('[data-test="value-purchase"] input').should('have.value', value)
        cy.get('[data-test="date-purchase"] input').should('have.value', date)
        cy.get('[data-test="add-button"]').click()
        cy.get('[data-test="code-purchase"] input').should('be.not.visible')
        cy.get(`[data-test="${code}-purchase"]`).should('be.visible')
      })
    })
  })
})
