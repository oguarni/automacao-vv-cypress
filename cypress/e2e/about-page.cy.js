describe('About Page Information', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.wait(3000)
  })

  it('should verify about page or footer information', () => {
    // Try to find and click About link
    cy.get('a').then($links => {
      const aboutLink = $links.toArray().find(link => 
        link.textContent.toLowerCase().includes('about') ||
        link.href.includes('about')
      )
      
      if (aboutLink) {
        cy.wrap(aboutLink).click({ force: true })
        cy.wait(2000)
        
        // Verify about page content
        cy.get('body').should('contain.text', /about|team|mission|who/i)
      } else {
        // Check footer for about information
        cy.log('Checking footer for about information')
        cy.get('footer, [class*="footer"]').should('exist')
      }
    })
    
    // Verify social media links exist somewhere on the site
    const socialSelectors = [
      'a[href*="youtube.com"]',
      'a[href*="twitter.com"]',
      'a[href*="instagram.com"]',
      'a[href*="facebook.com"]',
      'a[href*="patreon.com"]',
      '[class*="social"]'
    ]
    
    let socialFound = false
    socialSelectors.forEach(selector => {
      cy.get('body').then($body => {
        if ($body.find(selector).length > 0) {
          socialFound = true
        }
      })
    })
    
    cy.wrap(socialFound).should('be.true')
  })
})