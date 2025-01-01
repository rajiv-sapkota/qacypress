///<reference types="cypress">

describe("cartpage", () => {
    beforeEach( ()=> {
        cy.login("standard_user","secret_sauce")
        cy.url().should("eq","https://www.saucedemo.com/inventory.html")

    })

  

    

    it("allows users to add single product in the cart", ()=>{
        cy.get("#add-to-cart-sauce-labs-backpack").click()
        cy.get("#remove-sauce-labs-backpack").should("have.text","Remove")
        cy.get('[data-test="shopping-cart-badge"]').should(($text) => {
            // access the native DOM element
            expect($text.get(0).innerText).to.eq('1')
            })

    })

    it("allows users to add all items in the cart", () => {
       for (let i=0; i<6 ; i++)
       {
        cy.get(".btn_inventory").eq(i).click()
       }
       cy.get('[data-test="shopping-cart-badge"]').should("contain","6")
        
    })

    it('add all items using jQuery', () => {
        cy.contains('Swag Labs').should('be.visible')
        cy.get('.btn_inventory').each(($btn) => { //geting each btn locator from .btn_inventory and creating an jQuery object $btn
            
             cy.wrap($btn).click();
            
        }) 

    it ("remore all items",()=>{
            cy.get('.btn_inventory').each(($btn) => { //geting each btn locator from .btn_inventory and creating an jQuery object $btn
            
                cy.wrap($btn).click();

               
           })
           cy.get('.btn_inventory').each(($btn) => { //geting each btn locator from .btn_inventory and creating an jQuery object $btn
            if($btn.text()==="Remove"){
                cy.wrap($btn).click();

            }
            
           
       }) 

   


        })
        
        

    })

    

    it.only('should filter the products price from high to low', () => {
        cy.get('.product_sort_container').select('Price (high to low)')

       
        
    })


   
})