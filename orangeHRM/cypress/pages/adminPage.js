class admin{
    menuIsVisible(){
        cy.get("ul.oxd-main-menu").should("be.visible")
    }
    clickAdmin(){
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    }
   
    typeUsername(){
        cy.get(':nth-child(2) > .oxd-input').type("Test123")
    }
    clickSearch(){
        cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    }
    verifyUser(){
        cy.get('.orangehrm-horizontal-padding > .oxd-text').should("have.text","No Records Found")
    }

}
export default admin