import { RobotEyes, RobotHands, Dependencies } from '../../robots/wikipedia/Robot';

context('Search Test', () => {
const robotEyes = new RobotEyes();
const robotHands = new RobotHands();
const dependencies = new Dependencies();
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

    describe('Search the required information', ()=>
    {

        it("Launch the amazon page", () => {
            dependencies.visitAmazon()
        });
        it("Today's deal",function(){
            robotHands.clickOnDomElement('[href="/deals?ref_=nav_cs_gb"]')
            
        })
        it("Third  deal",function(){
            robotHands.clickOnDomElement("img[src ='https://m.media-amazon.com/images/I/41Yw1CGtFEL.jpg']")
           
        })
        it("product",function(){
            robotHands.clickOnDomElement(":nth-child(2) > .a-list-item > .octopus-dlp-asin-section > .a-spacing-base > .a-link-normal > .a-section")
           
        })
        it("Add to cart",function(){
            robotHands.clickOnDomElement("#add-to-cart-button")
           
        })
        
      it('Search for Mobiles',() =>{
            
            robotHands.clickOnId('twotabsearchtextbox').typeTextonId('twotabsearchtextbox','Mobiles')
            robotHands.wait(4000)
            robotHands.clickOnId('nav-search-submit-button')
           
        })
       
        it('SignIn test',function(){
            robotHands.wait(2000)
            robotHands.clickOnId('nav-link-accountList')
            robotHands.typeTextonId('ap_email','9952760152')
            robotHands.clickOnId('continue')
            robotHands.wait(2000)
            robotHands.typeTextonId('ap_password','admit123')
            robotHands.clickOnId('signInSubmit')
            robotHands.wait(2000)
        })
        it('Orders ',function(){
            robotHands.wait(2000)
            robotHands.clickOnId('nav-link-accountList')
            robotHands.clickOnDomElement(":nth-child(2) > :nth-child(1) > .ya-card__whole-card-link > .a-box > .a-box-inner")
            robotHands.wait(2000)
            robotHands.typeTextonId('ap_email','9952760152')
            robotHands.clickOnId('continue')
            robotHands.wait(2000)
            robotHands.typeTextonId('ap_password','admit123')
            robotHands.clickOnId('signInSubmit')
            robotHands.clickOnId('nav-link-accountList')
          
         
        })
        it('Payment options',function(){
            robotHands.wait(2000)
         
            robotHands.clickOnDomElement(":nth-child(3) > :nth-child(2) > .ya-card__whole-card-link > .a-box")
            robotHands.typeTextonId('ap_email','9952760152')
            robotHands.clickOnId('continue')
            robotHands.wait(2000)
            robotHands.typeTextonId('ap_password','admit123')
            robotHands.clickOnId('signInSubmit')
            robotHands.clickOnId('nav-link-accountList')
            robotHands.clickOnId('nav-link-accountList')
        })
        it('Adding Address',function(){
            robotHands.wait(2000)
            robotHands.clickOnDomElement(":nth-child(3) > :nth-child(1) > .ya-card__whole-card-link > .a-box > .a-box-inner > .a-row")
            robotHands.typeTextonId('ap_email','9952760152')
            robotHands.clickOnId('continue')
            robotHands.wait(2000)
            robotHands.typeTextonId('ap_password','admit123')
            robotHands.clickOnId('signInSubmit')
            robotHands.clickOnDomElement(' #ya-myab-address-add-link > .a-box')
            robotHands.typeTextonId('address-ui-widgets-enterAddressFullName','Sudarshan')
            robotHands.typeTextonId('address-ui-widgets-enterAddressPhoneNumber','9999999999')
            robotHands.typeTextonId('address-ui-widgets-enterAddressPostalCode','600059')
            robotHands.typeTextonId('address-ui-widgets-enterAddressLine1','G1 Krishnarpanam')
            robotHands.typeTextonId('address-ui-widgets-enterAddressLine2','East tambaram')
            robotHands.clickOnDomElement(" #address-ui-widgets-addr-details-address-type-and-business-hours > .a-button-inner > .a-button-text") 
            robotHands.clickOnDomElement(" #dropdown1_1")
            robotHands.clickOnDomElement(" #address-ui-widgets-form-submit-button > .a-button-inner > .a-button-input")
            
        })

    });

});