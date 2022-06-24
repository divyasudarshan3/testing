describe('Static and dynamic drop down', function() {   //a way to group our tests
    it('Verifying the checkbox', function() {   //for an individual test case
     

        /*it.only('only run this one', () => {
                 similarly use it.skip(...) to skip a test
}) */
        cy.visit("http://demo.automationtesting.in/Register.html");
        cy.get('input[ng-model=FirstName]').type("Divya")
        
        cy.get('input[ng-model=LastName]').type("Sudarshan")
        
        cy.get('textarea[ng-model=Adress]').type("No 7 V.C garden Mandaveli")
        
        cy.get('input[ng-model=EmailAdress]').type("div@gmail.com")

        cy.get('input[ng-model=Phone]').type("9999999999")

        cy.get('input[value=FeMale]').click()

        cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket')

        cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies')
        
        cy.get('#checkbox3').check().should('be.checked').and ('have.value','Hockey')

        cy.get('#checkbox1').uncheck().should('not.be.checked').and('have.value','Cricket')

        cy.get('#checkbox2').uncheck().should('not.be.checked').and ('have.value','Movies')
        
        cy.get('#checkbox3').uncheck().should('not.be.checked').and ('have.value','Hockey')

        cy.get('input[type=checkbox]').check(['Cricket','Hockey'])


  })
  it('Verifying the dropdown', function() {   //for an individual test case
     
  
    cy.get('#Skills').select('Android').should('have.value','Android')

})

  it('Languages multiselect', function() {   //for an individual test case
     
  
    cy.get('#msdd').click()
    
    cy.get('.ui-corner-all').contains('English').click()

    cy.get('.ui-corner-all').contains('Japanese').click()	

    cy.get('[role=combobox]').click({force:true})

    cy.get('.select2-search__field').type('Ind')

    cy.get('.select2-search__field').type('{enter}')

    cy.get('#yearbox').select('1998')

    cy.get('select[ng-model=monthbox]').select('May')

    cy.get('select[ng-model=daybox]').select('9')

    cy.get('#firstpassword').type("admitme")
        
    cy.get('#secondpassword').type("admitme")
    cy.get('#submitbtn').click()

		


})
  })