
  /// <reference types ="Cypress" />

  describe('UI Elements', function() {  

    it('verify input box and radio buttons', function() { 
    
    cy.visit("https://demo.guru99.com/test/newtours/");

    cy.url().should('include','newtours')

    cy.get('input[name=userName]').should('be.visible').should('be.enabled').type("div1234")

    cy.get('input[name=password]').should('be.visible').should('be.enabled').type("admit1234")

    cy.get('input[name=submit]').should('be.visible').click()
    
    cy.wait(3000)

    cy.get('a[href="reservation.php"]').click()

    cy.get('input[value=roundtrip]').should('be.visible').should('be.checked')

    cy.get('input[value=oneway]').should('be.visible').should('not.be.checked').click()

    cy.get('[name=findFlights]').should('be.visible').click()

    cy.title().should('eq','Find a Flight: Mercury Tours:')
    




   
  
  
  })
  })