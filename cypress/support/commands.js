// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  Cypress.Commands.add('searchItem', (item, itemId) => {
    cy.fixture('index').then((locators) => {
    cy.get(locators.MagnifyingGlass).click();
    cy.get(locators.searchBar).click().type(item);
    cy.get(itemId).click();
    })
  })

Cypress.Commands.add('searchColor', (color, colorId) => {
  cy.fixture('index').then((locators) => {
    cy.get(locators.colorId).debug()
    cy.get(locators.colorId).each((color, index, list) =>{
      if (color == locators.glossColor) {
        cy.get(locators.colorId).click

        
      }
    })
  })
})


