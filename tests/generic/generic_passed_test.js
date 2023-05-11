Feature("@generic");

Scenario("Generic test - Passed", ({ I }) => {
  I.say("Hello");
  I.setRequestTimeout(120000);
  I.assertEqual(true, true);
}).tag("@passed").tag("@TEST_KEY-1110");
