Feature("@manual");

/**
 * If 'createNewJiraTest: true' This test will be created automatically on Jira and its result will be sent to the corresponding Test execution configured
 * If 'createNewJiraTest: false' This test will be ignored by xray import
 * Test with type 'Manual' with 3 steps will be created on jira
 */
Scenario("[Auto created test] Manual test - Passed", async ({ I }) => {
  xray_`Open the Change Password screen by selecting option`;
  I.setRequestTimeout(3000);
  I.assertEqual(true, true);

  xray_`Fill the password field`;
  I.setRequestTimeout(3000);
  I.assertEqual(true, true);

  xray_`Check the result`;
  I.setRequestTimeout(3000);
  I.assertEqual(true, true);
}).tag("@auto_create");
