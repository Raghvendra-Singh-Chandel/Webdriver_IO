class loginPage {
   get getLoginURL() {
       return  browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    }
  get  getUserName() {
        return $("[name='username']")

    }
   get getPassword() {
        return $("[name='password']")

    }
   get getLoginButton() {
        return $("[type='submit']")

    }

    get InvalidCredentialAlertBox() {
        return $("[role='alert']")
    }

    get invalidCredentialMessage() {
        return $("[role='alert'] p")
    }

    async loginApplication(username,password) {
        await this.getUserName.setValue(username)
        await this.getPassword.setValue(password)
        await this.getLoginButton.click()
    }

    async loginWithInvalidCredential() {
        await this.getUserName.setValue("username")
        await this.getPassword.setValue("password")
        await this.getLoginButton.click()
        await expect(this.InvalidCredentialAlertBox).toBeExisting()
        await expect(this.invalidCredentialMessage).toHaveText("Invalid credentials")

    }
}
module.exports = new loginPage()