describe('saucedemo', () => {
   beforeEach(() => {
    cy.login("standard_user","secret_sauce")
  })
    
  it('login', () => {
        
        cy.url().should("include","https://www.saucedemo.com/inventory.html")
        //cy.get(".product_label").should("contain","Products")
    })
    
    it('loginneg', () => {
        
          //cy.url().should("eq","abc")
         
    })


    
  })