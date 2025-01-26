/// <reference types="cypress"/>

describe("assignment1", () => {
   
    beforeEach(()=>{
        cy.login(Cypress.env("username"),Cypress.env("password"))
    })

    it("should login to the url" , () =>{
      cy.url().should("eq","https://www.saucedemo.com/inventory.html")
    })

    it("should add products with odd index to the cart" , () =>{
        
        for (let i=0;i<6;i++)
        {
            if (i % 2 == 0)
            {
                cy.get(".btn_inventory ").eq(i).click()

              
            }
        }
    })
    it('should add products with odd index using jquery dynamically', () => {
        
        cy.contains('Swag Labs').should('be.visible')
        cy.get('.btn_inventory').each(($btnadd,index) => { //geting each btn locator from .btn_inventory and creating an jQuery object $btn
           if(index %2 == 0)
           {
            cy.wrap($btnadd).should("have.text","Add to cart").click()
            
          
            
           }
           
        }) 
        cy.get('.btn_inventory').each(($btnRemove,index) => { //geting each btn locator from .btn_inventory and creating an jQuery object $btnRemove
            if(index %2 == 0)
            {
             cy.wrap($btnRemove).should("have.text","Remove")
            }
           })     
    })
    it('should add products with odd index using jquery dynamically and then remove them', () => {
       
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

   
        
    it("should sort and assert prices", ()=>{
        cy.get(".product_sort_container").select("Price (high to low)")
        cy.get(".inventory_item_price").then(($priceLocator) => { 
            const crudePrice = Cypress._.map($priceLocator , (item) => item.innerText)
            cy.log(crudePrice.slice(0-9).join(","))
            const cleanText = (string) => string.replace(/[^0-9.]/g,"")
            const signsRemoved = crudePrice.map(cleanText)
            cy.log(signsRemoved.slice(0-9).join(","))
            const priceInDigits = signsRemoved.map(parseFloat)
            const defaultSort = Cypress._.sortBy(priceInDigits)
            cy.log(defaultSort.slice(0-9).join(","))
            const decendingSort = defaultSort.reverse()
            cy.log(decendingSort.slice(0-9).join(","))
            expect(decendingSort).to.deep.equal(priceInDigits)
        })


    })

    it.only("should sort and assert without using .sort method",() =>{
        cy.get(".product_sort_container").select("Price (low to high)")
        cy.get(".inventory_item_price").then(($locators) => {
            const textPrice = Cypress._.map($locators,(item)=>item.innerText)
            const dollarRemover = (string) => string.replace(/[^0-9.]/g,"")
            const dollarRemoved = textPrice.map(dollarRemover)
            cy.log("dollars removed"+dollarRemoved.slice(0-9).join(","))
            const price=dollarRemoved.map(parseFloat)
            cy.log("price in number"+price.slice(0-9).join(","))
            

            //to sort manually
            const sortedAscending = (arr) =>{
                for(let i=0;i<arr.length;i++){
                    for(let j=0;j<arr.length-1;j++){
                        if(arr[j]>arr[j+1]){
                            let a = arr[j]
                            arr[j]=arr[j+1]
                            arr[j+1]=a

                           
                        }
                    }
                }
                return arr


            }
            cy.log("price in number"+price.slice(0-9).join(","))
            const sortedPrice=sortedAscending([...price])
            cy.log("sortedDiscending"+sortedPrice.slice(0-9).join(","))
            expect(sortedPrice).to.deep.equal(price)

            

        })



    })


    
})