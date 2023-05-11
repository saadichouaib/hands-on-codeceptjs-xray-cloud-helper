@nominal_scenario
Feature: Subscribers see different articles based on their subscription level

  #@PRECOND_KEY-7003
  Background:
    Given I visit "login"

  @passed @TEST_KEY-1138
  Scenario: Cucumber scenario test passed
    Given I visit "login"
    When I enter "Bob" in the "user name" field
    Then I should see the "welcome" page passed

  @failed @TEST_KEY-1147
  Scenario: Cucumber scenario test failed
    Given I visit "login"
    When I enter "Bob" in the "user name" field
    Then I should see the "welcome" page failed