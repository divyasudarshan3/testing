import { RobotEyes, RobotHands, Dependencies } from '../../robots/wikipedia/Robot';

context('Search Test', () => {
const robotEyes = new RobotEyes();
const robotHands = new RobotHands();

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

    describe('Search the required information', ()=>
    {

        it("Launch the Green commute page", () => {
        cy.visit("http://18.223.206.231:3000/")
        });
        it("Enter location",function(){
            robotHands.clickOnId('mui-1').typeTextonId('mui-1','Hyderabad') 
        })
        it("click next",function(){
             robotHands.clickOnDomElement(".css-sc2lyq > .MuiButton-root")
           
         })
         it("Job location",function(){
            robotHands.typeTextonDom("placeholder", "Enter your job location", "Hyderabad{downarrow}{enter}")
        })
        it("click next",function(){
            robotHands.clickOnDomElement(".MuiButton-contained")
        })
        it("Enter Skills",function(){
            robotHands.typeTextonDom("placeholder", "Enter your skills", "Graphic Designer{downarrow}{enter}")
        })
        it("click next",function(){
            robotHands.clickOnDomElement(" .MuiButton-contained > .MuiTypography-root")
        })
        it("Find jobs",function(){
            robotHands.clickOnDomElement("  :nth-child(1) > .css-15lhdtc")
            robotHands.clickOnDomElement(".MuiButton-outlined")
            robotHands.clickOnDomElement(" .css-y6ta9y > .MuiBox-root > .MuiButton-contained")
            robotHands.clickOnDomElement("span[class='MuiTypography-root MuiTypography-caption1 css-1cns4fj-MuiTypography-root']") 
            robotHands.clickOnDomElement("svg[class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1844seg-MuiSvgIcon-root']")    
        })
       
  
    
})
})
