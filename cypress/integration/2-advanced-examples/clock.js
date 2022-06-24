describe('working with inputs', ()=> {
    it('should override the current time', ()=> {   
     //Unix Timestamp: the number of seconds that have elapsed since midnight Coordinated Universal Time (UTC), 1 January 1970.
        const date =new Date(2022, 3, 10).getTime()
//return the number of milliseconds since 1 January 1970. when a new Date object is created it stores the date and time data when it is created.
        cy.clock(date)
        cy.log(date)

    })
    
    it('should load login page', ()=> {   //for an individual test case
     
        cy.clock()
       
        cy.visit("http://zero.webappsecurity.com/login.html")
        cy.clearCookies({log:true})
        
        cy.clearLocalStorage('your item', {log : true})
        cy.tick(5000)
    })

    it('should fill username', ()=> {  
     

       
        cy.get('#user_login').as('username')
        cy.get('@username').clear()
        cy.get('@username').type('some invalid name',{delay:50})
       
    })  
    it('should fill password', ()=> {  
     
cy.clock()
       
        cy.get('#user_password').as('password')
        cy.get('@password').clear()
        cy.get('@password').type('some invalid password',{delay:50})
        cy.tick(5000)
       
    })
    it('should mark checkbox', ()=> {  
     

       
     cy.get('input[type="checkbox"]').click()   
      
       
    })
    it('should submit login form', ()=> {  
     

       
        cy.contains('Sign in').click()
         
          
       })
})