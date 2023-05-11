Feature("@generic");

/**
 * If 'testExecutionSendEvidenceOnFail: true', a screenshot will be sent to test run
 * the error message is sent to comment field of the test run
 */
Scenario("Generic test - Failed with screenshot", ({ I }) => {
  I.amOnPage("/");
  I.see("HANDLE YOUR PAYMENTS WITH OUR INTEGRATION");
  I.see("google");
}).tag("@failed").tag("@TEST_KEY-1144");
