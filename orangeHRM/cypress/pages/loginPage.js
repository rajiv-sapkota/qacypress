class loginPage{
    visit(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    }
    verifyUrl(){
        cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    }
    getUserName(){
        cy.get('input[name="username"]').type("Admin")
    }
    getPassword(){
        cy.get('input[name="password"]').type("admin123")

    }
    clickLoginButton(){
        cy.get(".orangehrm-login-button").click()
    }
    assertLogin(){
        cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
        cy.get(".oxd-topbar-header-hamburger").should("not.be.visible")
    }

}
export default loginPage




