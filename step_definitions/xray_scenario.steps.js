const {I} = inject();

Given('I visit "login"', () => {
    I.say('given part');
    I.assertEqual(true, true);
});

When('I enter "Bob" in the "user name" field', () => {
    I.say(`when : now`);
});

Then('I should see the "welcome" page passed', () => {
    I.say(`then : here`);
});

Then('I should see the "welcome" page failed', () => {
    I.amOnPage('/');
    I.see('HANDLE YOUR PAYMENTS WITH OUR INTEGRATION');
    I.see('google');
});

