const { I } = inject();

Given('a web browser is on the Google page', () => {
    I.say('given part');

});

When('the search phrase {string} is entered', (phrase) => {
    I.say(`when : ${phrase}`);

});

Then('results for {string} are shown passed', (phrase) => {
    I.say(`then : ${phrase}`);
});

Then('results for {string} are shown failed', (phrase) => {
    I.amOnPage('/');
    I.see('HANDLE YOUR PAYMENTS WITH OUR INTEGRATION');

    if (phrase === "unit" || phrase === "whitebox") I.see('mailbox');
});
