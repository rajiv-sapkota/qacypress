describe('saucedemo', () => {
   beforeEach(() => {
    cy.login()
  })
    
  it('login', () => {
        
        cy.url().should("include","https://www.saucedemo.com/v1/inventory.html")
        cy.get(".product_label").should("contain","Products")
    })
    
    it('loginneg', () => {
        
          cy.url().should("eq","abc")
         
    })


    
  })