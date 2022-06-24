  /// <reference types ="Cypress" />
  
  
  
  describe('My First Cypress Test', function() {   //a way to group our tests
    it('Verifying the type of locators', function() {   //for an individual test case
    
    cy.visit("https://demo.nopcommerce.com/");


    cy.get('#small-searchterms').type("HTC One Mini Blue")

    
    cy.get("[type='submit']").click()

    cy.get(".product-box-add-to-cart-button").click()

    cy.wait(5000)

    cy.get("#topcartlink > a > span.cart-label").click()

    cy.wait(3000)

    cy.get(".product-unit-price").contains("$100.00")
  
  
  
  })
  })