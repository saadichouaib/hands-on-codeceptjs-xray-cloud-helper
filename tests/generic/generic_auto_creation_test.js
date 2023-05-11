Feature("@generic");

/**
 * If 'createNewJiraTest: true' This test will be created automatically on Jira and its result will be sent to the corresponding Test execution configured
 * If 'createNewJiraTest: false' This test will be ignored by xray import
 */
Scenario("[Auto created test] Generic test - Passed", ({ I }) => {
  I.say("Hello");
  I.setRequestTimeout(120000);
  I.assertEqual(true, true);
}).tag("@auto_create");
