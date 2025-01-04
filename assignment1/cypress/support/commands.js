Cypress.Commands.add("login",(username,password) =>{
    cy.visit("https://www.saucedemo.com/")
    cy.url().should("eq", "https://www.saucedemo.com/")
    cy.get("#user-name").type(username)
    cy.get("#password").type(password,{log:false})
    cy.get("#login-button").click()
})