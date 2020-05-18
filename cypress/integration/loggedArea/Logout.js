context('Logout', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/dash')
  })
  context('Desktop', () => {
    beforeEach(() => {
      cy.viewport(1920, 1080)
      cy.wait(500)
    })
    it('should logout after clicking to logout ', () => {
      cy.get('[data-test="logout-button"]').click()
      cy.url().should('include', '/')
    })
  })
  context('Mobile', () => {
    beforeEach(() => {
      cy.viewport(375, 812)
      cy.wait(500)
    })
    it('should logout after clicking to logout ', () => {
      cy.get('[data-test="logout-button"]').click()
      cy.url().should('include', '/')
    })
  })
})
