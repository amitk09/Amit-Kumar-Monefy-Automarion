const Button_1='//*[@resource-id="com.monefy.app.lite:id/buttonKeyboard1"]'
const Button_2='//*[@resource-id="com.monefy.app.lite:id/buttonKeyboard2"]'
const Button_3='//*[@resource-id="com.monefy.app.lite:id/buttonKeyboard3"]'
const Button_4='//*[@resource-id="com.monefy.app.lite:id/buttonKeyboard4"]'
const Button_5='//*[@resource-id="com.monefy.app.lite:id/buttonKeyboard5"]'
const Button_0='//*[@resource-id="com.monefy.app.lite:id/buttonKeyboard0"]'
const Choose_Category='//*[@resource-id="com.monefy.app.lite:id/keyboard_action_button"]'

class Buttons{

    wait_untill_screen_is_displayed(){
        $(Choose_Category).waitForDisplyed();
    }

    get button_0(){
        return $(Button_0);
    }
    get button_1(){
        return $(Button_1);
    }
    get button_2(){
        return $(Button_2);
    }

    get button_3(){
        return $(Button_3);
    }
    get button_4(){
        return $(Button_4);
    }
    get button_5(){
        return $(Button_5);
    }
    get choose_category(){
        return $(Choose_Category);
    }

}

export default new Buttons();