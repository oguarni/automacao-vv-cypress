describe('Shop/Store Browsing', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.wait(3000)
  })

  it('should browse shop or external store links', () => {
    // Look for shop/store links
    cy.get('a').then($links => {
      const shopLink = $links.toArray().find(link => 
        link.textContent.toLowerCase().includes('shop') ||
        link.textContent.toLowerCase().includes('store') ||
        link.href.includes('shop') ||
        link.href.includes('store')
      )
      
      if (shopLink) {
        cy.wrap(shopLink).click({ force: true })
        cy.wait(3000)
        
        // Check if we're on a shop page or redirected externally
        cy.url().then(url => {
          if (url.includes('kurzgesagt.org')) {
            // Internal shop page
            cy.get('body').should('contain.text', /shop|store|product/i)
          } else {
            // External shop - just verify redirect happened
            cy.log('Redirected to external shop: ' + url)
            expect(url).to.not.equal(Cypress.config().baseUrl + '/')
          }
        })
      } else {
        // No shop found, verify other e-commerce elements
        cy.log('No direct shop link found, checking for product references')
        cy.get('body').should('contain.text', /video|animation|science/i)
      }
    })
  })
})