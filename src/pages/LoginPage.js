exports.LoginPage = class LoginPage{
    constructor(page) {
        this.page = page;
        this.username_textbox = page.getByRole("textbox", {name: "Username:"});
        this.password_textbox = page.getByRole("textbox", {name: "Password:"});
        this.userRole_checkbox = page.locator("(//span[@class='checkmark'])[1]");
        this.adminRole_checkbox = page.locator("(//span[@class='checkmark'])[2]");
        this.occupationAsTeacher = page.getByRole("combobox");
        this.agree_button = page.getByRole("checkbox", {name:"I agree to the terms and"});
        this.submit_button = page.getByRole("button", {name:"Sign In"});
        this.alert_popup = page.getByRole("button", {name:"okay"});
        this.errorMessage = page.getByText('Incorrect username/password.');
        this.emptyErrorMessage = page.getByText('Empty username/password.');
        this.successLoginText = page.getByRole('link', { name: 'ProtoCommerce Home' });

    }

    // Action Methods 

    async gotoLoginPage(){
        await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/#");
    }

    async enterUsername(username){
        await this.username_textbox.fill(username);
    }

    async enterPassword(password){
        await this.password_textbox.fill(password);
    }

    async PickRoleAsUser(){
        await this.userRole_checkbox.click();
    }

    async PickRoleAsAdmin(){
        await this.adminRole_checkbox.click();
    }

    async PickOccupationAsTeacher(){
        await this.occupationAsTeacher.selectOption("teacher").click();
    }

    async selectAgreeButton(){
        await this.agree_button.click();
    }

    async acceptUserAlert(){
        await this.alert_popup.click();
    }

    async clickSubmit(){
        await this.submit_button.click();

    }

};


