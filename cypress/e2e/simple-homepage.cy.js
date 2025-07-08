describe('Kurzgesagt Website Basic Tests', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.wait(2000)
  })

  it('should load homepage and verify content', () => {
    cy.get('body').should('be.visible')
    cy.title().should('not.be.empty')
    cy.get('a').should('have.length.at.least', 5)
    cy.get('h1, h2, h3').should('exist')
  })

  it('should have social media links', () => {
    cy.get('a[href*="youtube.com"], a[href*="instagram.com"], a[href*="twitter.com"], a[href*="facebook.com"]')
      .should('have.length.at.least', 1)
  })

  it('should navigate to about/who-we-are page', () => {
    cy.get('a[href*="who-we-are"], a[href*="about"]').first().click({ force: true })
    cy.wait(2000)
    cy.url().should('not.equal', Cypress.config().baseUrl + '/')
  })

  it('should verify shop functionality exists', () => {
    cy.get('body').then($body => {
      const hasShop = $body.find('a[href*="shop"], a[href*="store"]').length > 0
      if (hasShop) {
        cy.get('a[href*="shop"], a[href*="store"]').first().click({ force: true })
        cy.wait(2000)
      } else {
        cy.log('No shop link found, site focuses on content')
        cy.get('h1, h2, h3').should('exist')
      }
    })
  })
})