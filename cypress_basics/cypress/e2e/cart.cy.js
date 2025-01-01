///<reference types = "cypress" />



describe("Login Test", () => {


   beforeEach(() => {
       cy.login("standard_user", 'secret_sauce');
       for (let i = 0; i < 6; i++) {
           cy.get('.btn_inventory').eq(i).click();
       }
   })
  it("should allow users to add the items in the cart", () => {
      cy.get('.shopping_cart_badge').invoke('text').then((cartNumber) => {
          console.log(cartNumber);
          cy.get('.shopping_cart_badge').should('have.text', `${cartNumber}`)
       })           
  })
   it('should remove the items if already added', () => {
       cy.contains('Swag Labs').should('be.visible')
       cy.get('.btn_inventory').each(($btn) => { //geting each btn locator from .btn_inventory and creating an jQuery object $btn
           if ($btn.text() === 'Remove') {
               cy.wrap($btn).click();
           }
       })      
   })
   it.only('should filter the products price from high to low', () => {
       cy.get('.product_sort_container').select('Price (high to low)')
       cy.get('.inventory_item_price').then(($pricesLocator) => {
           const price = Cypress._.map($pricesLocator, (itemPrice) => itemPrice.innerText) //map between the locators and price
           cy.log(price.slice(0, 9).join(","))
           const onlyPrice = (string) => string.replace(/[^0-9.]/g, ""); //function to remove the $ sign using regex
           const digits = price.map(onlyPrice) // sending each price with $ to onlyPrice function
           cy.log(digits.slice(0, 9).join(","))
           const numbers = digits.map(parseFloat) // converting into integer.
           cy.log(numbers.slice(0, 9).join(","))
           const sortedPrice = Cypress._.sortBy(numbers); //sort in low to high
           const sortedPriceDesc = sortedPrice.reverse(); // reverse into high to low.
           cy.log(sortedPriceDesc.slice(0, 9).join(","))
           expect(sortedPriceDesc).to.deep.equal(numbers)
       })
   })
   it('should filter the products name from A - Z', () => {
       //
   })
})









