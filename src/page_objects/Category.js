const Category_Car='//*[@text="Car"]'
const Category_Salary='//*[@text="Salary"]'

class Category{

     wait_untill_category_car_is_displayed(){
        $(Category_Car).waitForDisplyed();
    }

    get category_car(){
        return $(Category_Car);
    }

     wait_untill_category_salary_is_displayed(){
        $(Category_Salary).waitForDisplyed();
    }

    get category_salary(){
        return $(Category_Salary);
    }

}

export default new Category();