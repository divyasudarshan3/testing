import { BaseHands, BaseEyes, BaseDependencies } from '../robots/BaseRobot';


export class Dependencies extends BaseDependencies {
   
    visitAmazon(){
        cy.fixture("amazon.json").then((user) => {
            cy.visit(user.url)
        })
    }
}

export class RobotHands extends BaseHands{

   clickTodaysDeals(element : string){
    this.clickOnDomElement("[href='/deals?ref_=nav_cs_gb']")
    
    }
    clickThirdDeal(element : string){
        this.clickOnDomElement("img[src ='https://m.media-amazon.com/images/I/31NmWpDfMZL.jpg']")
    }
    clickProduct(element : string){
        this.clickOnDomElement(":nth-child(2) > .a-list-item > .octopus-dlp-asin-section > .a-spacing-base > .a-link-normal > .a-section")
    }
    clickAddToCart(element : string){
        this.clickOnDomElement("#add-to-cart-button")
    }
    clickTextInput(elementId : string , textOnElement: string){
       this.typeTextonId(elementId , textOnElement)
     
          
    }
    clickContinueButton(elementId : string  ){
       
            this .clickOnDomElement(elementId)
           
    }
    
    mainMenu(element : string){
        this.clickOnDomElement("#nav-logo-sprites")
    }
    signIn(element : string){
        this.clickOnDomElement("#nav-link-accountList-nav-line-1")
    }
    email(){
        this.typeTextonDom("type", "email", "918056286914")
            .clickOnDomElement("#ap_email")
    }
    
    continue(){
        this.clickOnDomElement(".a-button-inner > #continue")
    }
    clickToSign(elementId : string){
        this.clickOnDomElement(elementId)
    }
    
    password(){
        this.typeTextonDom("type", "password","admit123")
            .clickOnDomElement("#signInSubmit")
            cy.wait(5000)
    }
   
    
    menu1(){
        this.clickOnDomElement("#nav-hamburger-menu")
    }
    
    mobile1(){
        this.clickOnDomElement(" .hmenu-visible > :nth-child(15) > .hmenu-item")
    }
    mobile2(){
        this.clickOnDomElement(".hmenu-visible > :nth-child(3) > .hmenu-item")
    }
    prime()
    {
        this.clickOnDomElement(":nth-child(3) > .a-unordered-list > .a-spacing-micro > .a-list-item > .a-link-normal > .a-checkbox > label > .a-icon")
    }
    signInMenu()
    {
        this.clickOnDomElement("#nav-link-accountList") 
        
    }
    orders()
    {
        
        this.clickOnDomElement(":nth-child(2) > :nth-child(1) > .ya-card__whole-card-link > .a-box > .a-box-inner > .a-row")
    }
    payment()
    {
        this.clickOnDomElement(":nth-child(3) > :nth-child(1) > .ya-card__whole-card-link > .a-box > .a-box-inner > .a-row") 
    }

address()
{
    this.clickOnDomElement(":nth-child(3) > :nth-child(1) > .ya-card__whole-card-link > .a-box > .a-box-inner > .a-row") 
}

addAddress()
{
    this.clickOnDomElement("#ya-myab-address-add-link > .a-box > .a-box-inner") 
}
addressType()
{
    this.clickOnDomElement("#ya-myab-address-add-link > .a-box > .a-box-inner") 
}
addLast(){
    this.clickOnDomElement(" #address-ui-widgets-addr-details-address-type-and-business-hours > .a-button-inner > .a-button-text") 
    this.clickOnDomElement(" #dropdown1_1")
   
}
adressButton(){
    this.clickOnDomElement("#address-ui-widgets-form-submit-button > .a-button-inner > .a-button-input")
}
}

export class RobotEyes extends BaseEyes{
    seesMainPage(){
        this.seesDomVisible("Main page")
    }  
}

