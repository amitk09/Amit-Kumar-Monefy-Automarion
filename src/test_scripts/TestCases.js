import Steps from'../test_scripts/Steps';

describe('1. Verify app header as Monefy', function(){

    it('user should be able see Monefy on top', async function(){
        await  Steps.verify_header();
    });
 
});

describe('2. Verify user is able to add salary of 4000 as income', function(){

    it('user should be able to add salary', async function(){
        await  Steps.add_salary();
    });
    it('Added salary should be visible on homepage', async function(){
        await Steps.verfiy_salary_added();
    });
});

describe('3. Verify user is able to add 1000 as expenses', function(){

    it('User should be able to expenses', async function(){
        await Steps.add_expense(); 
    });
    it('Added expense should be visible on homepage', async function(){
        await Steps.verify_expense_added();
        
    });
});

describe('4. Verify Balance amount as 3000 after expense', function(){

    it('Balance amount should be 3000', async function(){
        await Steps.verify_balance();  
    });
});
