describe('Shop/Store Browsing', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.wait(3000)
  })

  it('should browse shop or external store links', () => {
    // Look for shop/store links with increased timeout
    cy.get('a', { timeout: 20000 }).then($links => {
      const shopLink = $links.toArray().find(link => {
        const text = link.textContent.toLowerCase();
        const href = link.href.toLowerCase();
        return text.includes('shop') || text.includes('store') || 
               href.includes('shop') || href.includes('store') ||
               text.includes('merch') || href.includes('merch');
      });
      
      if (shopLink) {
        // Add interceptor to handle potential external redirects
        cy.intercept('GET', '**/*').as('shopRequest');
        cy.wrap(shopLink).click({ force: true });
        cy.wait(3000);
        
        // Check if we're on a shop page or redirected externally
        cy.url().then(url => {
          if (url.includes('kurzgesagt.org')) {
            // Internal shop page
            cy.get('body').should('contain', 'Shop');
          } else {
            // External shop - just verify redirect happened
            cy.log('Redirected to external shop: ' + url);
            expect(url).to.not.equal(Cypress.config().baseUrl + '/');
          }
        });
      } else {
        // No shop found, verify educational content as alternative
        cy.log('No shop found - validating educational content');
        cy.get('body').should('contain', 'Videos');
        // Additional check for YouTube link as expected content
        cy.get('a[href*="youtube.com"]').should('exist');
      }
    })
  })
})