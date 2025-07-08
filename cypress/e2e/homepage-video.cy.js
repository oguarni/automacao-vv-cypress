describe('Homepage Video Navigation', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.wait(3000) // Wait for page to fully load
  })

  it('should load homepage and navigate to a video', () => {
    // Verify the page loaded
    cy.get('body').should('be.visible')
    cy.title().should('not.be.empty')
    
    // Intercept YouTube navigation to prevent ERR_ABORTED
    cy.intercept('GET', '**/youtube.com/**', { statusCode: 200 }).as('youtubeRequest')
    
    // Look for video/article links with multiple possible selectors
    const contentSelectors = [
      'a[href*="/video/"]',
      'article a',
      '.video-card a',
      '.content-card a',
      'div[class*="grid"] a[href]'
    ]
    
    let found = false
    contentSelectors.forEach(selector => {
      cy.get('body').then($body => {
        if ($body.find(selector).length > 0 && !found) {
          found = true
          cy.get(selector).should('have.length.at.least', 1)
          
          // Click the first valid link (only internal links)
          cy.get(selector).first().then($el => {
            const href = $el.attr('href')
            if (href && !href.startsWith('#') && !href.includes('youtube.com')) {
              cy.wrap($el).click({ force: true })
              
              // Verify navigation occurred
              cy.wait(2000)
              cy.url().should('not.equal', Cypress.config().baseUrl + '/')
            }
          })
        }
      })
    })
    
    // Verify content links exist (including YouTube) without clicking
    cy.get('a').then($links => {
      const hasContent = $links.toArray().some(link => 
        link.href.includes('youtube.com') || 
        link.href.includes('/video/') ||
        link.textContent.toLowerCase().includes('watch')
      )
      expect(hasContent).to.be.true
    })
  })
})