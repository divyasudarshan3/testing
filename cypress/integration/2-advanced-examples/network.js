
  /// <reference types ="Cypress" />
///Configuring Cypress to work with iFrames & cross-origin sites.
  describe('Network requests', ()=> {  

    it('Json data', ()=> { 
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept({   //cy.intercept() is used to control the behavior of HTTP requests. Y
            path :'/posts'
        }).as('posts')

        cy.get("table:nth-of-type(1) a[href='/posts']").click()
        cy.wait('@posts').then(inter =>{   //to check the response data of each response of an aliased route, you can use several cy.wait() calls.       
           
            expect(inter.response.body).to.have.length(100)
        })
        })
        it.only('mocking with intercept test', ()=>{
            cy.visit('https://jsonplaceholder.typicode.com/')
            cy.intercept('GET','/posts',{totalpost:5 , name:'divya'}).as('posts')
            cy.get("table:nth-of-type(1) a[href='/posts']").click()
            cy.wait('@posts')
        })




   
  
  
  })
  