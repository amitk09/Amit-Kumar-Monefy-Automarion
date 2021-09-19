import Buttons from '../page_objects/Buttons'
import Category from '../page_objects/Category'
import HomePage from '../page_objects/HomePage'


class Steps {

    async add_salary(){
      await HomePage.wait_untill_screen_is_displayed();
      await HomePage.income_icon.click();
      await Buttons.wait_untill_screen_is_displayed();
      await Buttons.button_4.click();
      await Buttons.button_0.click();
      await  Buttons.button_0.click();
      await  Buttons.button_0.click();
      await  Buttons.choose_category.click();
      await  Category.wait_untill_category_salary_is_displayed();
      await  Category.category_salary.click();
    }

    async verfiy_salary_added(){
        await HomePage.wait_untill_screen_is_displayed();
        let salary = await HomePage.income_value.getText(); 
        let x = await salary.substring(1,salary.length-1).trim();
        chaiExpect(x).to.be.equal('4,000.0');
    }

    async add_expense(){
      await HomePage.wait_untill_screen_is_displayed();
      await HomePage.expense_icon.click();
      await Buttons.wait_untill_screen_is_displayed();
      await Buttons.button_1.click();
      await Buttons.button_0.click();
      await  Buttons.button_0.click();
      await  Buttons.button_0.click();
      await  Buttons.choose_category.click();
      await Category.wait_untill_category_car_is_displayed();
      await Category.category_car.click();
    }

    async verify_expense_added(){
      await HomePage.wait_untill_screen_is_displayed();
     let expense= await HomePage.current_expense.getText();
     let x = await expense.substring(1,expense.length-1).trim();
     chaiExpect(x).to.be.equal('1,000.0');
    }

    async verify_balance(){
      await HomePage.wait_untill_screen_is_displayed();
      let balance= await HomePage.balance.getText();
      let x = await balance.substring(10,balance.length-1).trim();
      chaiExpect(x).to.be.equal('3,000.0');
    }

    async verify_header(){
      await HomePage.wait_untill_screen_is_displayed();
      let text = await  HomePage.header_monefy.getText();
      chaiExpect(text).to.be.equal('Monefy');
    }


}

export default new Steps();