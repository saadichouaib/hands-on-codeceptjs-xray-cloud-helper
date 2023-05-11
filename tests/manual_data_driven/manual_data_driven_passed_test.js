Feature("@data_driven");

let accounts = new DataTable(["username", "password", "valid"]);
accounts.add(["user1", "1234", "valid"]);
accounts.add(["user2", "12345", "valid"]);
accounts.add(["user3", "123456", "valid"]);

Data(accounts).Scenario("Manual test with dataset - Passed", async ({ I, current }) => {
    xray_`step1`;
    I.assertEqual(true, true);

    xray_`step2`;
    I.assertEqual(current.valid, "valid");
}).tag("@passed").tag("@TEST_KEY-1137");
