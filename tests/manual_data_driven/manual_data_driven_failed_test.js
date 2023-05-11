Feature("@data_driven");

/**
 * If 'testExecutionSendEvidenceOnFail: true', a screenshot will be sent to test run
 * The error message is sent to comment field of the test run
 * Status will be sent for each step
 */

let accounts = new DataTable(["username", "password", "valid"]);
accounts.add(["user1", "1234", "valid"]);
accounts.add(["user2", "12345", "valid"]);
accounts.add(["user3", "123456", "valid"]);

Data(accounts).Scenario("Manual test with dataset - Failed with screenshot", async ({ I, current }) => {
    xray_`step1`;
    I.amOnPage("/");

    xray_`step2`;
    I.see("HANDLE YOUR PAYMENTS WITH OUR INTEGRATION");
    if (current.username !== "user2") I.see("apple");
  }).tag("@failed").tag("@TEST_KEY-1146");
