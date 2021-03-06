import { BaseHands, BaseEyes, BaseDependencies } from '../BaseRobot';


export class Dependencies extends BaseDependencies {
   
    visitAmazon(){
        cy.fixture("amazon.json").then((user) => {
            cy.visit(user.url)
        })
        
    }
}
    


export class RobotEyes extends BaseEyes{
    seesMainPage(){
        this.seesDomVisible("Main page")
    }  
}

export class RobotHands extends BaseHands{

    searchtesting(){
        this.typeTextonDom("name", "search", "Automation Testing")
            .clickOnDomElement("[class='sprite svg-search-icon']")
    }
}