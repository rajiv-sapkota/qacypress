/// <reference types="cypress"/>

describe("assignment1", () => {
   
    

    it("should login to the url" , () =>{
      cy.login("standard_user","secret_sauce")

    })

    it("should add products with odd index to the cart" , () =>{
        cy.login("standard_user","secret_sauce")
        for (let i=0;i<6;i++)
        {
            if (i % 2 == 0)
            {
                cy.get(".btn_inventory ").eq(i).click()

              
            }
        }
    })
    it.only('should add products with odd index using jquery dynamically', () => {
        cy.login("standard_user","secret_sauce")
        cy.contains('Swag Labs').should('be.visible')
        cy.get('.btn_inventory').each(($btnadd,index) => { //geting each btn locator from .btn_inventory and creating an jQuery object $btn
           if(index %2 == 0)
           {
            cy.wrap($btnadd).click()
          
            
           }
           
        }) 
        cy.get('.btn_inventory').each(($btnRemove,index) => { //geting each btn locator from .btn_inventory and creating an jQuery object $btn
            if(index %2 == 0)
            {
             cy.wrap($btnRemove).should("have.text","Remove")
            }
            })     
    })
    it('should add products with odd index using jquery dynamically and then remove them', () => {
        cy.login("standard_user","secret_sauce")
        cy.contains('Swag Labs').should('be.visible')
        cy.get('.btn_inventory').each(($btn,index) => { //geting each btn locator from .btn_inventory and creating an jQuery object $btn
           if(index %2 == 0)
           {
            cy.wrap($btn).click()
            
           }
          
                
        })
        cy.get('.btn_inventory').each(($btn,index) => { //geting each btn locator from .btn_inventory and creating an jQuery object $btn
            if($btn.text() == "Remove")
            {
             cy.wrap($btn).click()
             
            }
            
                 
         }) 

    })

    
})