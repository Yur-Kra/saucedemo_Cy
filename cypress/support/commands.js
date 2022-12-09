/// <reference types="cypress" />

const {
  PageElements
} = require("../support/selectors")
   const pe = new PageElements()
  
Cypress.Commands.add('loginFormValidation_UI', () => {
   cy.elementIsVisible('div.login_logo')
   cy.elementIsVisible(pe.userNameField)
   cy.elementIsVisible(pe.passField)
})

Cypress.Commands.add('loggingIn', (userName, passWord) => {
   cy.get(pe.userNameField).type(userName);
   cy.get(pe.passField).type(passWord);
   cy.get('input#login-button').click(); 
})

Cypress.Commands.add('homePageValidation_UI', () => {
   cy.elementIsVisible('div.app_logo');
   cy.elementIsVisible('a.shopping_cart_link');
   cy.elementIsVisible('#item_4_img_link > .inventory_item_img');
   cy.verifyText('span.active_option', 'Name (A to Z)') 
})

Cypress.Commands.add('loggingOut', () => {
   cy.elementIsVisible(pe.hamburgerIcon).click();
   
})

Cypress.Commands.add('elementIsVisible', (element) => {
   cy.get(element).should('be.visible')
 })

 Cypress.Commands.add('elementExist', (element) => {
   cy.get(element).should('exist')
 })

 Cypress.Commands.add('verifyText', (element, text) => {
   cy.get(element).should('have.text', text)
 })