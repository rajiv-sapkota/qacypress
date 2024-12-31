describe('saucedemo', () => {
    it('login', () => {
      cy.visit('https://www.saucedemo.com/v1/')
      cy.url().should("include","https://www.saucedemo.com/v1/")
        cy.get("#user-name").type("standard_user")
        cy.get("#password").type("secret_sauce")
        cy.get("#login-button").click()
        cy.url().should("include","https://www.saucedemo.com/v1/inventory.html")
        cy.get(".product_label").should("contain","Products")
    })
    it('loginneg', () => {
        cy.visit('https://www.saucedemo.com/v1/')
        cy.url().should("include","https://www.saucedemo.com/v1/")
          cy.get("#user-name").type("standard_user")
          cy.get("#password").type("secret_sauc")
          cy.get("#login-button").click()
          cy.url().should("include","https://www.saucedemo.com/v1")
         
    })


    
  })