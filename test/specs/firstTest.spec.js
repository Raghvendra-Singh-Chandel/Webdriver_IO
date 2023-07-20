const loginPage = require("../pageobjects/loginPage")


describe("first test of web driver IO", ()=> {
    beforeEach ("navigate to landing page", async ()=> {
        loginPage.getLoginURL
    })
     /**
     * Login with invalid credential
     */
     it ("Login with invalid credential", async()=> {
        await loginPage.loginWithInvalidCredential()
    })

    /**
     * Login with valid credential
     */
    it ("Login with valid credential", async()=> {
        
        await loginPage.loginApplication("Admin", "admin123")  

    })

})