const Expense_Icon='//*[@resource-id="com.monefy.app.lite:id/expense_button"]'
const Income_Icon='//*[@resource-id="com.monefy.app.lite:id/income_button"]'
const Balance='//*[@resource-id="com.monefy.app.lite:id/balance_amount"]'
const Current_Expense='//*[@resource-id="com.monefy.app.lite:id/expense_amount_text"]'
const Income_Value='//*[@resource-id="com.monefy.app.lite:id/income_amount_text"]'
const Header_Monefy='//*[@text="Monefy"]'

class HomePage{

    wait_untill_screen_is_displayed(){
        $(Expense_Icon).waitForDisplayed();
    }
    
    get expense_icon(){
        return $(Expense_Icon);
    }
     get income_icon(){
        return $(Income_Icon);
    }

    get balance(){
        return $(Balance);
    }

    get current_expense(){
        return $(Current_Expense);
    }
    get income_value(){
        return $(Income_Value);
    }

    get header_monefy(){
        return $(Header_Monefy);
    }

}

export default new HomePage();