// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Custom command to handle dynamic content loading
Cypress.Commands.add('waitForContent', (selector, timeout = 10000) => {
  cy.get(selector, { timeout }).should('be.visible')
})

// Custom command for safe clicking with retry
Cypress.Commands.add('safeClick', (selector) => {
  cy.get(selector).first().scrollIntoView().click({ force: true })
})