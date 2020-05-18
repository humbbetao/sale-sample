context('AddPurchase', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/dash')
  })
  context('Desktop', () => {
    beforeEach(() => {
      cy.viewport(1920, 1080)
    })
    it('should cancel new purchase input', () => {
      const code = '123'
      const date = '17/05/2010'
      const value = '200'
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

    it('should add new purchase input', () => {
      const code = '123'
      const date = '17/05/2010'
      const value = '200'
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
  context('Mobile', () => {
    beforeEach(() => {
      cy.viewport(375, 812)
    })
    it('should cancel new purchase input', () => {
      const code = '123'
      const date = '17/05/2010'
      const value = '200'
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

    it('should add new purchase input', () => {
      const code = '123'
      const date = '17/05/2010'
      const value = '200'
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
