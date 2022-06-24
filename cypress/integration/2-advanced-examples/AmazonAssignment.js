describe('Amazon Assignment', function() {   
    
    it('Verifying today deals', function() {   
     
        cy.visit("https://www.amazon.in/");

        cy.get('[href="/deals?ref_=nav_cs_gb"]').click()

        cy.get('img[src = "https://m.media-amazon.com/images/I/31NmWpDfMZL.jpg"]').mouse()

        cy.get(':nth-child(2) > .a-list-item > .octopus-dlp-asin-section > .a-spacing-base > .a-link-normal > .a-section').click()

        cy.wait(3000)
        
       cy.get("#add-to-cart-button").click()

       cy.wait(3000)

       cy.get('#twotabsearchtextbox').type('mobiles')

       cy.get('#nav-search-submit-button').click()

       cy.wait(3000)

       cy.scrollTo('0%','85%',{
           easing:'linear'
       })

       cy.get('#nav-logo-sprites').click()

    })

    it('signin', function()  {
   
        cy.get('#nav-link-accountList-nav-line-1').click()

        cy.get('#ap_email').type('9952760152')

        cy.get('.a-button-inner > #continue').click()

       
        cy.get('#ap_password').type('admit123')

        cy.get('#signInSubmit').click()

        cy.wait(3000)

        cy.get('#nav-hamburger-menu').click()  

        cy.get(' .hmenu-visible > :nth-child(15) > .hmenu-item').click()
        
        
        cy.wait(3000)

        cy.get(' .hmenu-visible > :nth-child(3) > .hmenu-item').click()  

        cy.get(':nth-child(3) > .a-unordered-list > .a-spacing-micro > .a-list-item > .a-link-normal > .a-checkbox > label > .a-icon').click()  
       
})


    it('orders and payments', function()  {

        cy.get('#nav-link-accountList').click()

        cy.get(':nth-child(2) > :nth-child(1) > .ya-card__whole-card-link > .a-box > .a-box-inner > .a-row').click()

        cy.wait(3000)
        cy.get('#ap_email').type('9952760152')

        cy.get('.a-button-inner > #continue').click()

        cy.wait(3000)
       
        cy.get('#ap_password').type('admit123')

        cy.get('#signInSubmit').click()

        cy.get('#nav-link-accountList').click()

        cy.get(':nth-child(3) > :nth-child(2) > .ya-card__whole-card-link > .a-box > .a-box-inner').click()

        cy.get('.a-button-input').click()
        cy.get('#nav-link-accountList').click()

       cy.get(':nth-child(3) > :nth-child(1) > .ya-card__whole-card-link > .a-box > .a-box-inner > .a-row').click()

       cy.get('#ya-myab-address-add-link > .a-box > .a-box-inner').click()

       cy.get('#address-ui-widgets-enterAddressFullName').type('sudarshan')

       cy.get('#address-ui-widgets-enterAddressPhoneNumber').type('9999999999')
       cy.get(' #address-ui-widgets-enterAddressPostalCode').type('600059')

       cy.get('  #address-ui-widgets-enterAddressLine1').type('East tambaram')
       cy.get('  #address-ui-widgets-enterAddressLine2').type('chennai')
       cy.get('   #address-ui-widgets-landmark').type('suvasini apt')
       cy.get('#address-ui-widgets-addr-details-address-type-and-business-hours > .a-button-inner > .a-button-text').click()
       cy.get(' #dropdown1_1').click()
       cy.get('.a-button-input').click()

      
      
       
      


    })
})
