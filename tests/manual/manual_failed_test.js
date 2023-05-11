Feature("@manual");

/**
 * If 'testExecutionSendEvidenceOnFail: true', a screenshot will be sent to test run
 * The error message is sent to comment field of the test run
 * Status will be sent for each step
 */
Scenario("Manual test - Failed with screenshot", async ({ I }) => {
  xray_`step1`;
  I.amOnPage("/");

  xray_`step2`;
  I.see("HANDLE YOUR PAYMENTS WITH OUR INTEGRATION");

  xray_`step3`;
  I.dontSee("test");
}).tag("@failed").tag("@TEST_KEY-1145");