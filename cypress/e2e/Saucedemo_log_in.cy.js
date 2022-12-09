/// <reference types="cypress"/>
///// <reference types="@cypress-audit/lighthouse"/>
// 
import {
  PageElements
} from "../support/selectors"

const pe = new PageElements()

describe('Saucedemo different users test', () => {
  beforeEach(() => {
    cy.visit('/')
  Cypress.on('uncaught:exception', (err, runnable) => {
     return false
  })
  cy.clearLocalStorage()
})
 
  it('Logging via correct user', () => {
  /*This should work. 
    There is package for cypress, that should easly integrate in autotests, and shows perfomance info about current page.
    cy.lighthouse(
    {
      performance: 60,
      accessibility: 90,
      'best-practices': 80,
      seo: 80,
    },
    {
      formFactor: 'desktop',
      screenEmulation: {
        mobile: false,
        disable: false,
        width: Cypress.config('viewportWidth'),
        height: Cypress.config('viewportHeight'),
        deviceScaleRatio: 1,
      },
    },
  )*/
      cy.loginFormValidation_UI();
      cy.loggingIn(Cypress.env('users').correct_user["username"], Cypress.env('users').correct_user["password"]);
      cy.homePageValidation_UI();
      cy.loggingOut();
    })

    it('Logging via locked out user', () => {

      cy.loginFormValidation_UI();
      cy.loggingIn(Cypress.env('users').blocked_user["username"], Cypress.env('users').blocked_user["password"]);
      cy.verifyText('h3', 'Epic sadface: Sorry, this user has been locked out.')  
    })
    
    it('Logging via problem user', () => {

      cy.loginFormValidation_UI();
      cy.loggingIn(Cypress.env('users').bad_user["username"], Cypress.env('users').bad_user["password"]);
      cy.loggingOut();
    })

    it('Logging via glitch user', () => {

      cy.loginFormValidation_UI();
      cy.loggingIn(Cypress.env('users').glitch_user["username"], Cypress.env('users').glitch_user["password"]); 
      cy.homePageValidation_UI();
      cy.loggingOut();
    })
  })
