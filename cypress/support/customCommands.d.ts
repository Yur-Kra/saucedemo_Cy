declare namespace Cypress {
    interface Chainable<Subject> {

      loginFormValidation_UI(element: any): Chainable<any>
      homePageValidation_UI(element: any): Chainable<any>
      loggingIn(username: any, password: any): Chainable<any>
      loggingOut(username: any, password: any): Chainable<any>
      lighthouse(element: any): Chainable<any>
      elementIsVisible(element: any): Chainable<any>    
      elementExist(element: any): Chainable<any> 
      verifyText(elementuu: any, textee: any): Chainable<any> 
      
        
  }
}