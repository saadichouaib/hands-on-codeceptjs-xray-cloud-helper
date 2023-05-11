Feature("@data_driven");

/**
 * If 'createNewJiraTest: true' This test will be created automatically on Jira and its result will be sent to the corresponding Test execution configured
 * If 'createNewJiraTest: false' This test will be ignored by xray import
 * Test with type 'Manual' with 2 steps will be created on jira
 * Iterations will be sent directly to the test run
 */

let accounts = new DataTable(["username", "password", "valid"]);
accounts.add(["user1", "1234", "valid"]);
accounts.add(["user2", "12345", "valid"]);
accounts.add(["user3", "123456", "valid"]);

Data(accounts).Scenario("Manual test with dataset - Passed", async ({ I, current }) => {
    xray_`Open the Change Password screen by selecting option`;
    I.assertEqual(true, true);

    xray_`Fill the password field`;
    I.assertEqual(current.valid, "valid");
}).tag("@auto_create");
