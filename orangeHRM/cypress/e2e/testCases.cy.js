import admin from "../pages/adminPage"
import addCandidates from "../fixtures/addCandidates.json"





describe("login test", ()=> {
    beforeEach (()=>{
        cy.login()

    
    })



    it("should test a user does not exist",()=>{

        const adminObj = new admin()
        adminObj.menuIsVisible()
        adminObj.clickAdmin()
        adminObj.typeUsername()
        adminObj.clickSearch()
        adminObj.verifyUser()
        
        
    })

    it.only("should add candidate with fixture", ()=>{
        cy.get(':nth-child(5) > .oxd-main-menu-item > .oxd-text').click()
        cy.get('.orangehrm-header-container > .oxd-button').click()

        cy.fixture("addCandidates.json").then((data)=>{
          

        })
        cy.get(".orangehrm-firstname").type(data.firstName)
        


    })



})