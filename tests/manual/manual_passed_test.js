Feature("@manual");

Scenario("Manual test - Passed", async ({ I }) => {
  xray_`step1`;
  I.setRequestTimeout(3000);
  I.assertEqual(true, true);

  xray_`step2`;
  I.setRequestTimeout(3000);
  I.assertEqual(true, true);

  xray_`step3`;
  I.setRequestTimeout(3000);
  I.assertEqual(true, true);
}).tag("@passed").tag("@TEST_KEY-1143");
