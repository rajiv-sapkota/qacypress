import loginPage from "../pages/loginPage";


const loginPageObj = new loginPage()

Cypress.Commands.add ("login", (username,password)=>{
    loginPageObj.visit()
    loginPageObj.verifyUrl()
    loginPageObj.getUserName()
    loginPageObj.getPassword()
    loginPageObj.clickLoginButton()
    loginPageObj.assertLogin()
})


Cypress.Commands.add("LoginCookie",()=>{
    


})